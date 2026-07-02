"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import { useAiChat } from "@/hooks/useAiChat";

const welcomeMessage =
  "Chào bạn! Mình là trợ lý AI về iPhone 17. Bạn có thể hỏi về màn hình, camera, pin, dung lượng hoặc phụ kiện trong hộp.";

export function ChatPanel({ onClose }: { onClose: () => void }) {
  const [question, setQuestion] = useState("");
  const { messages, isLoadingHistory, isSending, error, sendMessage } =
    useAiChat();
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }, [messages, isSending]);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const content = question.trim();
    if (!content || isSending) return;
    setQuestion("");
    const sent = await sendMessage(content);
    if (!sent) setQuestion(content);
  }

  return (
    <section
      className="fixed bottom-28 right-4 z-[70] flex h-[min(38rem,calc(100dvh-9rem))] w-[min(calc(100vw-2rem),25rem)] flex-col overflow-hidden rounded-[2rem] border border-border bg-surface shadow-2xl shadow-black/20 sm:bottom-32 sm:right-7"
      aria-label="Trợ lý AI tư vấn iPhone 17"
    >
      <header className="flex items-center justify-between border-b border-border bg-foreground px-5 py-4 text-background">
        <div className="flex items-center gap-3">
          <span className="relative grid size-10 place-items-center rounded-full bg-background/10 text-lg">
            ✦
            <span className="absolute bottom-0 right-0 size-2.5 rounded-full border-2 border-foreground bg-emerald-400" />
          </span>
          <div>
            <p className="font-semibold">iPhone 17 AI</p>
            <p className="text-xs text-background/60">Gemini · dữ liệu sản phẩm</p>
          </div>
        </div>
        <button
          type="button"
          onClick={onClose}
          className="grid size-9 place-items-center rounded-full border border-background/20 transition hover:bg-background/10"
          aria-label="Đóng cửa sổ trò chuyện"
        >
          ×
        </button>
      </header>

      <div className="flex-1 space-y-3 overflow-y-auto p-4" aria-live="polite">
        <div className="max-w-[88%] rounded-2xl rounded-tl-md bg-surface-muted px-4 py-3 text-sm leading-6 text-muted">
          {welcomeMessage}
        </div>

        {isLoadingHistory ? (
          <p className="py-2 text-center text-xs text-muted-foreground">Đang tải lịch sử...</p>
        ) : null}

        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
          >
            <p
              className={`max-w-[88%] whitespace-pre-wrap rounded-2xl px-4 py-3 text-sm leading-6 ${
                message.role === "user"
                  ? "rounded-tr-md bg-accent text-accent-foreground"
                  : "rounded-tl-md bg-surface-muted text-muted"
              }`}
            >
              {message.content}
            </p>
          </div>
        ))}

        {isSending ? (
          <div className="flex justify-start">
            <div className="flex gap-1 rounded-2xl rounded-tl-md bg-surface-muted px-4 py-4" aria-label="Trợ lý đang trả lời">
              {[0, 1, 2].map((dot) => (
                <span key={dot} className="size-1.5 animate-pulse rounded-full bg-muted-foreground" style={{ animationDelay: `${dot * 160}ms` }} />
              ))}
            </div>
          </div>
        ) : null}

        {error ? (
          <p className="rounded-xl bg-red-500/10 px-3 py-2 text-xs leading-5 text-red-600" role="alert">
            {error}
          </p>
        ) : null}
        <div ref={endRef} />
      </div>

      <form className="border-t border-border bg-surface p-3" onSubmit={handleSubmit}>
        <div className="flex items-end gap-2 rounded-[1.5rem] border border-border bg-background p-1.5 pl-4 focus-within:border-accent focus-within:ring-4 focus-within:ring-accent/10">
          <label className="sr-only" htmlFor="chat-question">Câu hỏi</label>
          <textarea
            id="chat-question"
            value={question}
            onChange={(event) => setQuestion(event.target.value)}
            onKeyDown={(event) => {
              if (event.key === "Enter" && !event.shiftKey) {
                event.preventDefault();
                event.currentTarget.form?.requestSubmit();
              }
            }}
            placeholder="Hỏi về iPhone 17..."
            rows={1}
            maxLength={1000}
            disabled={isSending || isLoadingHistory}
            className="max-h-24 min-h-10 flex-1 resize-none bg-transparent py-2 text-sm text-foreground outline-none placeholder:text-muted-foreground disabled:opacity-60"
          />
          <button
            type="submit"
            disabled={isSending || !question.trim()}
            className="grid size-10 shrink-0 place-items-center rounded-full bg-accent text-accent-foreground transition hover:scale-105 disabled:cursor-not-allowed disabled:opacity-40"
            aria-label="Gửi câu hỏi"
          >
            ↑
          </button>
        </div>
        <p className="mt-2 text-center text-[11px] text-muted-foreground">AI có thể mắc lỗi. Hãy kiểm tra thông tin quan trọng.</p>
      </form>
    </section>
  );
}
