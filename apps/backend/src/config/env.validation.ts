type Environment = Record<string, string | undefined>;

export function validateEnvironment(config: Environment) {
  const port = Number(config.PORT ?? 3001);
  const maxMessageLength = Number(config.CHAT_MAX_MESSAGE_LENGTH ?? 1000);
  const maxHistoryMessages = Number(config.CHAT_MAX_HISTORY_MESSAGES ?? 10);

  if (!Number.isInteger(port) || port < 1 || port > 65535) {
    throw new Error('PORT must be an integer between 1 and 65535');
  }

  if (!Number.isInteger(maxMessageLength) || maxMessageLength < 1) {
    throw new Error('CHAT_MAX_MESSAGE_LENGTH must be a positive integer');
  }

  if (!Number.isInteger(maxHistoryMessages) || maxHistoryMessages < 0) {
    throw new Error('CHAT_MAX_HISTORY_MESSAGES must be a non-negative integer');
  }

  return {
    ...config,
    PORT: port,
    FRONTEND_ORIGIN: config.FRONTEND_ORIGIN,
    GEMINI_MODEL: config.GEMINI_MODEL,
    MONGODB_URI:
      config.MONGODB_URI ?? 'mongodb://127.0.0.1:27017/iphone17_chat',
    CHAT_MAX_MESSAGE_LENGTH: maxMessageLength,
    CHAT_MAX_HISTORY_MESSAGES: maxHistoryMessages,
  };
}
