import {
  Injectable,
  Logger,
  ServiceUnavailableException,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { GoogleGenAI } from '@google/genai';
import { SALES_ASSISTANT_PROMPT } from '../knowledge/prompts/sales-assistant.prompt';

@Injectable()
export class GeminiService {
  private readonly logger = new Logger(GeminiService.name);
  private readonly client: GoogleGenAI | null;
  private readonly model: string;

  constructor(private readonly config: ConfigService) {
    const apiKey = this.config.get<string>('GEMINI_API_KEY');
    this.model = this.config.get<string>('GEMINI_MODEL', 'gemini-2.5-flash');
    this.client = apiKey ? new GoogleGenAI({ apiKey }) : null;

    if (!apiKey) {
      this.logger.warn(
        'GEMINI_API_KEY is missing. The chat endpoint will return 503.',
      );
    }
  }

  async generateAnswer(input: string): Promise<string> {
    if (!this.client) {
      throw new ServiceUnavailableException(
        'Trợ lý AI chưa được cấu hình API key.',
      );
    }

    try {
      const response = await this.client.models.generateContent({
        model: this.model,
        contents: input,
        config: {
          systemInstruction: SALES_ASSISTANT_PROMPT,
          temperature: 0.25,
          maxOutputTokens: 500,
        },
      });

      const answer = response.text?.trim();
      if (!answer) throw new Error('Gemini returned an empty response');

      return answer;
    } catch (error) {
      if (error instanceof ServiceUnavailableException) throw error;

      this.logger.error(
        'Gemini request failed',
        error instanceof Error ? error.stack : undefined,
      );
      throw new ServiceUnavailableException(
        'Trợ lý AI đang bận. Vui lòng thử lại sau.',
      );
    }
  }
}
