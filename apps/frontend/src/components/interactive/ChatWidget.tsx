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
        className="group fixed bottom-8 right-4 z-[70] inline-flex h-14 items-center gap-3 rounded-full border border-white/20 bg-gradient-to-r from-blue-600 to-indigo-600 py-1.5 pl-1.5 pr-5 text-sm font-semibold text-white shadow-[0_12px_35px_rgba(37,99,235,0.38)] transition-all duration-300 hover:-translate-y-1 hover:scale-[1.03] hover:shadow-[0_16px_40px_rgba(37,99,235,0.48)] active:translate-y-0 active:scale-95 sm:bottom-10 sm:right-7"
        aria-expanded={isOpen}
        aria-label={isOpen ? "Đóng trợ lý tư vấn" : "Mở trợ lý tư vấn"}
      >
        <span
          aria-hidden="true"
          className="relative grid size-11 place-items-center rounded-full bg-white/15 ring-1 ring-inset ring-white/25 transition group-hover:rotate-6 group-hover:bg-white/20"
        >
          {isOpen ? (
            <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M6 6l12 12M18 6 6 18" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M7.5 18.5 4 20l1.2-3.7A8 8 0 1 1 7.5 18.5Z" />
              <path d="M9 10h.01M12 10h.01M15 10h.01" strokeWidth="2.5" />
            </svg>
          )}
          {!isOpen && <span className="absolute right-0 top-0 size-2.5 rounded-full border-2 border-blue-600 bg-emerald-400" />}
        </span>
        <span>{isLoading ? "Đang mở..." : isOpen ? "Đóng" : "Tư vấn"}</span>
      </button>
    </>
  );
}
