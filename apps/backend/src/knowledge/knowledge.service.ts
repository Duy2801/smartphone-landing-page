import { Injectable, Logger, OnModuleInit } from '@nestjs/common';
import { promises as fs } from 'node:fs';
import path from 'node:path';

export type KnowledgeContext = {
  content: string;
  sources: string[];
};

@Injectable()
export class KnowledgeService implements OnModuleInit {
  private readonly logger = new Logger(KnowledgeService.name);
  private documents: Array<{ name: string; content: string }> = [];

  async onModuleInit() {
    await this.loadDocuments();
  }

  getContext(question: string): KnowledgeContext {
    const terms = this.normalize(question).split(/\s+/).filter(Boolean);
    const ranked = this.documents
      .map((document) => ({
        ...document,
        score: terms.reduce(
          (score, term) =>
            score + (this.normalize(document.content).includes(term) ? 1 : 0),
          0,
        ),
      }))
      .sort((a, b) => b.score - a.score);

    const selected = ranked.filter((item) => item.score > 0).slice(0, 3);
    const fallback = selected.length > 0 ? selected : ranked.slice(0, 2);

    return {
      content: fallback
        .map((item) => `### Nguồn: ${item.name}\n${item.content}`)
        .join('\n\n'),
      sources: fallback.map((item) => item.name),
    };
  }

  private async loadDocuments() {
    const directories = [
      path.resolve(process.cwd(), 'data/knowledge'),
      path.resolve(process.cwd(), 'apps/backend/data/knowledge'),
    ];

    for (const directory of directories) {
      try {
        const names = (await fs.readdir(directory)).filter((name) =>
          name.endsWith('.md'),
        );
        this.documents = await Promise.all(
          names.map(async (name) => ({
            name,
            content: await fs.readFile(path.join(directory, name), 'utf8'),
          })),
        );
        this.logger.log(`Loaded ${this.documents.length} knowledge documents`);
        return;
      } catch {
        // Try the next path because the working directory differs by runner.
      }
    }

    this.logger.warn('No local knowledge documents were found');
  }

  private normalize(value: string) {
    return value
      .toLocaleLowerCase('vi')
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '');
  }
}
