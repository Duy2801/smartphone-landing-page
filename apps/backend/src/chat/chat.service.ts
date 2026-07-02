import { BadRequestException, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { GeminiService } from '../gemini/gemini.service';
import { KnowledgeService } from '../knowledge/knowledge.service';
import { SendMessageDto } from './dto/send-message.dto';
import { ChatResponse } from './types/chat-response';
import { ChatHistoryService } from '../chat-history/chat-history.service';

@Injectable()
export class ChatService {
  constructor(
    private readonly config: ConfigService,
    private readonly gemini: GeminiService,
    private readonly knowledge: KnowledgeService,
    private readonly historyService: ChatHistoryService,
  ) {}

  async sendMessage(dto: SendMessageDto): Promise<ChatResponse> {
    const message = dto.message.trim();
    if (!message)
      throw new BadRequestException('Tin nhắn không được để trống.');

    const historyLimit = this.config.get<number>(
      'CHAT_MAX_HISTORY_MESSAGES',
      10,
    );
    const history = await this.historyService.getRecentMessages(
      dto.sessionId,
      historyLimit,
    );
    await this.historyService.appendMessage(dto.sessionId, 'user', message);
    const context = this.knowledge.getContext(message);
    const conversation = history
      .map(
        (item) =>
          `${item.role === 'user' ? 'Khách' : 'Trợ lý'}: ${item.content}`,
      )
      .join('\n');

    const prompt = `
NGỮ CẢNH ĐƯỢC DUYỆT:
${context.content || 'Chưa có dữ liệu phù hợp.'}

LỊCH SỬ HỘI THOẠI:
${conversation || 'Chưa có.'}

CÂU HỎI HIỆN TẠI:
${message}
`;

    const answer = await this.gemini.generateAnswer(prompt);
    await this.historyService.appendMessage(dto.sessionId, 'assistant', answer);

    return {
      answer,
      sessionId: dto.sessionId,
      sources: context.sources.map((source) => ({
        title: source.replace(/\.md$/, ''),
        reference: source,
      })),
    };
  }
}
