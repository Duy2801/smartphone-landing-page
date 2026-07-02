import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ChatRole = 'user' | 'assistant';

@Schema({ _id: true, versionKey: false })
export class ConversationMessage {
  @Prop({ required: true, enum: ['user', 'assistant'] })
  role!: ChatRole;

  @Prop({ required: true, trim: true, maxlength: 4000 })
  content!: string;

  @Prop({ default: Date.now })
  createdAt!: Date;
}

export const ConversationMessageSchema =
  SchemaFactory.createForClass(ConversationMessage);

@Schema({ timestamps: true, versionKey: false, collection: 'conversations' })
export class Conversation {
  @Prop({ required: true, unique: true, index: true })
  sessionId!: string;

  @Prop({ type: [ConversationMessageSchema], default: [] })
  messages!: ConversationMessage[];

  createdAt!: Date;
  updatedAt!: Date;
}

export type ConversationDocument = HydratedDocument<Conversation>;
export const ConversationSchema = SchemaFactory.createForClass(Conversation);

ConversationSchema.index({ updatedAt: 1 }, { expireAfterSeconds: 2_592_000 });
