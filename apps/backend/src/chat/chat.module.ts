import { Module } from '@nestjs/common';
import { GeminiModule } from '../gemini/gemini.module';
import { KnowledgeModule } from '../knowledge/knowledge.module';
import { ChatController } from './chat.controller';
import { ChatService } from './chat.service';
import { ChatHistoryModule } from '../chat-history/chat-history.module';

@Module({
  imports: [GeminiModule, KnowledgeModule, ChatHistoryModule],
  controllers: [ChatController],
  providers: [ChatService],
})
export class ChatModule {}
