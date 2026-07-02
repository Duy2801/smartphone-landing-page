import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {
  ChatRole,
  Conversation,
  ConversationDocument,
} from './schemas/conversation.schema';

@Injectable()
export class ChatHistoryService {
  private readonly maxStoredMessages = 200;

  constructor(
    @InjectModel(Conversation.name)
    private readonly conversations: Model<ConversationDocument>,
  ) {}

  async appendMessage(sessionId: string, role: ChatRole, content: string) {
    const conversation = await this.conversations
      .findOneAndUpdate(
        { sessionId },
        {
          $setOnInsert: { sessionId },
          $push: {
            messages: {
              $each: [{ role, content, createdAt: new Date() }],
              $slice: -this.maxStoredMessages,
            },
          },
        },
        { upsert: true, new: true, setDefaultsOnInsert: true },
      )
      .exec();

    return conversation.messages.at(-1);
  }

  async getRecentMessages(sessionId: string, limit: number) {
    const conversation = await this.conversations
      .findOne({ sessionId })
      .select({ messages: { $slice: -Math.max(limit, 1) } })
      .lean()
      .exec();

    return conversation?.messages ?? [];
  }

  async getMessages(sessionId: string) {
    const conversation = await this.conversations
      .findOne({ sessionId })
      .select({ _id: 0, sessionId: 1, messages: 1, createdAt: 1, updatedAt: 1 })
      .lean()
      .exec();

    return (
      conversation ?? {
        sessionId,
        messages: [],
        createdAt: null,
        updatedAt: null,
      }
    );
  }

  async deleteSession(sessionId: string) {
    const result = await this.conversations.deleteOne({ sessionId }).exec();
    return { deleted: result.deletedCount > 0 };
  }
}
