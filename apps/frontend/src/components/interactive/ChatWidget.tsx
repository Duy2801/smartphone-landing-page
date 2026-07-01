"use client";

import { ComponentType, useState } from "react";

type PanelComponent = ComponentType<{ onClose: () => void }>;

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [Panel, setPanel] = useState<PanelComponent | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  async function openChat() {
    setIsOpen(true);
    if (Panel) return;

    setIsLoading(true);
    const chatPanel = await import("./ChatPanel");
    setPanel(() => chatPanel.ChatPanel);
    setIsLoading(false);
  }

  return (
    <>
      {isOpen && Panel ? <Panel onClose={() => setIsOpen(false)} /> : null}
      <button
        type="button"
        onClick={isOpen ? () => setIsOpen(false) : openChat}
        className="fixed bottom-5 right-4 z-[70] inline-flex min-h-14 items-center gap-2 rounded-full bg-accent px-5 text-sm font-semibold text-accent-foreground shadow-2xl shadow-blue-500/30 transition hover:-translate-y-1 sm:right-6"
        aria-expanded={isOpen}
        aria-label={isOpen ? "Đóng trợ lý tư vấn" : "Mở trợ lý tư vấn"}
      >
        <span aria-hidden="true">{isOpen ? "×" : "✦"}</span>
        {isLoading ? "Đang mở..." : isOpen ? "Đóng" : "Tư vấn"}
      </button>
    </>
  );
}
