export type ChatResponse = {
  answer: string;
  sessionId: string;
  sources: Array<{ title: string; reference: string }>;
};
