import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseUUIDPipe,
  Post,
} from '@nestjs/common';
import { Throttle } from '@nestjs/throttler';
import { ChatService } from './chat.service';
import { SendMessageDto } from './dto/send-message.dto';
import { ChatHistoryService } from '../chat-history/chat-history.service';

@Controller('chat')
export class ChatController {
  constructor(
    private readonly chatService: ChatService,
    private readonly historyService: ChatHistoryService,
  ) {}

  @Post('messages')
  @Throttle({ default: { limit: 5, ttl: 60_000 } })
  sendMessage(@Body() dto: SendMessageDto) {
    return this.chatService.sendMessage(dto);
  }

  @Get('sessions/:sessionId/messages')
  getMessages(@Param('sessionId', ParseUUIDPipe) sessionId: string) {
    return this.historyService.getMessages(sessionId);
  }

  @Delete('sessions/:sessionId')
  deleteSession(@Param('sessionId', ParseUUIDPipe) sessionId: string) {
    return this.historyService.deleteSession(sessionId);
  }
}
