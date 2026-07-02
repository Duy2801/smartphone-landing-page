"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { loadChatHistory, sendChatMessage } from "@/lib/chat-api";
import type { ChatMessage } from "@/types/chat";

const SESSION_KEY = "iphone17-chat-session";

function getSessionId() {
  const stored = window.localStorage.getItem(SESSION_KEY);
  if (stored) return stored;
  const created = window.crypto.randomUUID();
  window.localStorage.setItem(SESSION_KEY, created);
  return created;
}

export function useAiChat() {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [isLoadingHistory, setIsLoadingHistory] = useState(true);
  const [isSending, setIsSending] = useState(false);
  const [error, setError] = useState("");
  const sessionIdRef = useRef("");

  useEffect(() => {
    const controller = new AbortController();
    const sessionId = getSessionId();
    sessionIdRef.current = sessionId;

    void loadChatHistory(sessionId, controller.signal)
      .then(setMessages)
      .catch((reason: unknown) => {
        if (!controller.signal.aborted) {
          setError(reason instanceof Error ? reason.message : "Không tải được lịch sử.");
        }
      })
      .finally(() => {
        if (!controller.signal.aborted) setIsLoadingHistory(false);
      });

    return () => controller.abort();
  }, []);

  const sendMessage = useCallback(async (content: string) => {
    const message = content.trim();
    if (!message || isSending || !sessionIdRef.current) return false;

    const userMessage: ChatMessage = {
      id: window.crypto.randomUUID(),
      role: "user",
      content: message,
    };
    setMessages((current) => [...current, userMessage]);
    setIsSending(true);
    setError("");

    try {
      const result = await sendChatMessage(sessionIdRef.current, message);
      setMessages((current) => [
        ...current,
        {
          id: window.crypto.randomUUID(),
          role: "assistant",
          content: result.answer,
        },
      ]);
      return true;
    } catch (reason) {
      setError(reason instanceof Error ? reason.message : "Trợ lý AI đang bận.");
      return false;
    } finally {
      setIsSending(false);
    }
  }, [isSending]);

  return { messages, isLoadingHistory, isSending, error, sendMessage };
}
