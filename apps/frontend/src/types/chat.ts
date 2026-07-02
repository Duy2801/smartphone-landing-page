export type ChatRole = "user" | "assistant";

export type ChatMessage = {
  id: string;
  role: ChatRole;
  content: string;
  createdAt?: string;
};

export type ChatApiResponse = {
  answer: string;
  sessionId: string;
  sources: Array<{ title: string; reference: string }>;
};
