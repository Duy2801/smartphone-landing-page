"use client";

import { FormEvent, useState } from "react";
import { chatbotFaq } from "@/config/product";

const welcomeMessage =
  "Chào bạn! Mình có thể tư vấn nhanh về giá, màn hình, pin hoặc camera của iPhone 17.";

export function ChatPanel({ onClose }: { onClose: () => void }) {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState(welcomeMessage);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const normalizedQuestion = question.toLocaleLowerCase("vi").trim();
    if (!normalizedQuestion) return;

    const match = chatbotFaq.find((item) =>
      item.keywords.some((keyword) => normalizedQuestion.includes(keyword)),
    );
    setAnswer(
      match?.answer ??
        "Mình chưa có câu trả lời phù hợp. Bạn hãy thử hỏi về giá, pin, camera hoặc thời gian mở bán nhé.",
    );
    setQuestion("");
  }

  return (
    <section
      className="fixed bottom-24 right-4 z-[70] w-[min(calc(100vw-2rem),23rem)] overflow-hidden rounded-[2rem] border border-border bg-surface shadow-2xl shadow-black/20 sm:right-6"
      aria-label="Trợ lý tư vấn iPhone 17"
    >
      <header className="flex items-center justify-between border-b border-border bg-foreground px-5 py-4 text-background">
        <div>
          <p className="font-semibold">iPhone 17 Assistant</p>
          <p className="text-xs text-background/65">Trả lời FAQ tự động</p>
        </div>
        <button
          type="button"
          onClick={onClose}
          className="grid size-9 place-items-center rounded-full border border-background/20"
          aria-label="Đóng cửa sổ trò chuyện"
        >
          ×
        </button>
      </header>
      <div className="p-4">
        <div className="min-h-28 rounded-2xl bg-surface-muted p-4 text-sm leading-6 text-muted" aria-live="polite">
          {answer}
        </div>
        <form className="mt-3 flex gap-2" onSubmit={handleSubmit}>
          <label className="sr-only" htmlFor="chat-question">Câu hỏi</label>
          <input
            id="chat-question"
            value={question}
            onChange={(event) => setQuestion(event.target.value)}
            placeholder="Hỏi về camera..."
            autoComplete="off"
            className="min-w-0 flex-1 rounded-full border border-border bg-background px-4 text-sm text-foreground outline-none focus:border-accent"
          />
          <button type="submit" className="grid size-11 shrink-0 place-items-center rounded-full bg-accent text-accent-foreground" aria-label="Gửi câu hỏi">
            →
          </button>
        </form>
      </div>
    </section>
  );
}
