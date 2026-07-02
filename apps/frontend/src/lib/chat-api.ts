import type { ChatApiResponse, ChatMessage } from "@/types/chat";

const API_URL =
  process.env.NEXT_PUBLIC_BACKEND_URL;

type HistoryResponse = {
  messages: Array<{
    _id?: string;
    role: "user" | "assistant";
    content: string;
    createdAt?: string;
  }>;
};

async function parseError(response: Response) {
  const body = (await response.json().catch(() => null)) as {
    message?: string | string[];
  } | null;
  const message = body?.message;
  return Array.isArray(message)
    ? message[0]
    : message || "Không thể kết nối với trợ lý AI.";
}

export async function loadChatHistory(
  sessionId: string,
  signal?: AbortSignal,
): Promise<ChatMessage[]> {
  const response = await fetch(
    `${API_URL}/chat/sessions/${encodeURIComponent(sessionId)}/messages`,
    { signal, cache: "no-store" },
  );
  if (!response.ok) throw new Error(await parseError(response));

  const data = (await response.json()) as HistoryResponse;
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
  const response = await fetch(`${API_URL}/chat/messages`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ sessionId, message }),
    signal,
  });
  if (!response.ok) throw new Error(await parseError(response));
  return response.json() as Promise<ChatApiResponse>;
}
