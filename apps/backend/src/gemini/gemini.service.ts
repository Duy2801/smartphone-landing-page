import {
  Injectable,
  Logger,
  ServiceUnavailableException,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { ApiError, GoogleGenAI } from '@google/genai';
import { SALES_ASSISTANT_PROMPT } from '../knowledge/prompts/sales-assistant.prompt';

const MAX_ATTEMPTS = 3;
const RETRYABLE_STATUS_CODES = new Set([429, 500, 502, 503, 504]);

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

    let lastError: unknown;

    for (let attempt = 1; attempt <= MAX_ATTEMPTS; attempt += 1) {
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
        lastError = error;
        if (!this.isRetryable(error) || attempt === MAX_ATTEMPTS) break;

        const delayMs = 500 * 2 ** (attempt - 1);
        this.logger.warn(
          `Gemini temporarily unavailable; retrying in ${delayMs}ms (${attempt}/${MAX_ATTEMPTS})`,
        );
        await this.delay(delayMs);
      }
    }

    this.logger.error(
      'Gemini request failed after retries',
      lastError instanceof Error ? lastError.stack : undefined,
    );
    throw new ServiceUnavailableException(
      'Trợ lý AI đang quá tải. Vui lòng thử lại sau ít phút.',
    );
  }

  private isRetryable(error: unknown): boolean {
    return (
      error instanceof ApiError && RETRYABLE_STATUS_CODES.has(error.status)
    );
  }

  private delay(milliseconds: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, milliseconds));
  }
}
