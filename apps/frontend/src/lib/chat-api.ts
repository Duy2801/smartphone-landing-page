import type { ChatApiResponse, ChatMessage } from "@/types/chat";
import { apiClient } from "@/lib/api-client";

type HistoryResponse = {
  messages: Array<{
    _id?: string;
    role: "user" | "assistant";
    content: string;
    createdAt?: string;
  }>;
};

export async function loadChatHistory(
  sessionId: string,
  signal?: AbortSignal,
): Promise<ChatMessage[]> {
  const { data } = await apiClient.get<HistoryResponse>(
    `/chat/sessions/${encodeURIComponent(sessionId)}/messages`,
    { signal },
  );

  return data.messages.map((message, index) => ({
    id: message._id ?? `${message.role}-${index}`,
    role: message.role,
    content: message.content,
    createdAt: message.createdAt,
  }));
}

export async function sendChatMessage(
  sessionId: string,
  message: string,
  signal?: AbortSignal,
): Promise<ChatApiResponse> {
  const { data } = await apiClient.post<ChatApiResponse>(
    "/chat/messages",
    { sessionId, message },
    { signal },
  );
  return data;
}
