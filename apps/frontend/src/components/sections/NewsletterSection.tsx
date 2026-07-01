"use client";

import { FormEvent, useId, useState } from "react";
import { subscribeNewsletter } from "@/lib/newsletter";
import { newsletterSchema } from "@/lib/schemas";
import { trackEvent } from "@/lib/analytics";

type FormStatus = "idle" | "loading" | "success" | "error";

export function NewsletterSection() {
  const emailId = useId();
  const consentId = useId();
  const honeypotId = useId();
  const [email, setEmail] = useState("");
  const [consent, setConsent] = useState(false);
  const [website, setWebsite] = useState("");
  const [status, setStatus] = useState<FormStatus>("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const payload = {
      email,
      consent,
      website,
      source: "landing-newsletter",
    };

    const parsed = newsletterSchema.safeParse(payload);

    if (!parsed.success) {
      setStatus("error");
      setMessage(parsed.error.issues[0]?.message ?? "Dữ liệu chưa hợp lệ.");
      return;
    }

    setStatus("loading");
    setMessage("Đang gửi đăng ký...");

    const result = await subscribeNewsletter(parsed.data);

    setStatus(result.ok ? "success" : "error");
    setMessage(result.message);

    if (result.ok) {
      trackEvent("newsletter_submit", { source: parsed.data.source });
      setEmail("");
      setConsent(false);
      setWebsite("");
    }
  }

  return (
    <section
      id="newsletter"
      className="mx-auto w-full max-w-7xl scroll-mt-28 px-5 py-16 sm:px-8 lg:px-10 lg:py-24"
      aria-labelledby="newsletter-title"
    >
      <div className="grid gap-8 overflow-hidden rounded-[2.5rem] border border-border bg-surface-elevated p-6 shadow-2xl shadow-blue-950/10 backdrop-blur sm:p-8 lg:grid-cols-[0.95fr_1.05fr] lg:p-12">
        <div>
          <p className="mb-4 inline-flex rounded-full border border-border bg-accent-soft px-4 py-2 text-sm font-medium text-accent">
            Newsletter
          </p>
          <h2
            id="newsletter-title"
            className="max-w-2xl text-balance text-4xl font-semibold tracking-[-0.045em] text-foreground sm:text-5xl"
          >
            Nhận tin mở bán, ưu đãi và bản cập nhật sản phẩm.
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-8 text-muted sm:text-lg">
            Để lại email để nhận thông báo về thời điểm ra mắt Astra X1. Form
            có kiểm tra dữ liệu ở cả trình duyệt và API route.
          </p>
        </div>

        <form
          className="rounded-[2rem] border border-border bg-surface p-5 shadow-sm"
          onSubmit={handleSubmit}
          noValidate
        >
          <div className="grid gap-4">
            <label className="grid gap-2" htmlFor={emailId}>
              <span className="text-sm font-semibold text-foreground">
                Email của bạn
              </span>
              <input
                id={emailId}
                type="email"
                inputMode="email"
                autoComplete="email"
                placeholder="you@example.com"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                className="min-h-12 rounded-2xl border border-border bg-background px-4 text-sm text-foreground outline-none transition placeholder:text-muted-foreground focus:border-accent focus:ring-4 focus:ring-accent/15"
                aria-describedby={message ? "newsletter-message" : undefined}
              />
            </label>

            <label className="hidden" htmlFor={honeypotId}>
              Website
              <input
                id={honeypotId}
                tabIndex={-1}
                autoComplete="off"
                value={website}
                onChange={(event) => setWebsite(event.target.value)}
              />
            </label>

            <label
              className="flex cursor-pointer items-start gap-3 rounded-2xl border border-border bg-background p-4 text-sm leading-6 text-muted"
              htmlFor={consentId}
            >
              <input
                id={consentId}
                type="checkbox"
                checked={consent}
                onChange={(event) => setConsent(event.target.checked)}
                className="mt-1 size-4 accent-[var(--accent)]"
              />
              <span>
                Tôi đồng ý nhận thông tin sản phẩm, ưu đãi và có thể hủy đăng
                ký bất cứ lúc nào.
              </span>
            </label>

            <button
              type="submit"
              disabled={status === "loading"}
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-accent px-6 text-sm font-semibold text-accent-foreground shadow-lg shadow-blue-500/20 transition hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:translate-y-0"
            >
              {status === "loading" ? "Đang gửi..." : "Đăng ký nhận tin"}
            </button>

            {message ? (
              <p
                id="newsletter-message"
                className={`rounded-2xl px-4 py-3 text-sm ${
                  status === "success"
                    ? "bg-emerald-500/10 text-emerald-600"
                    : status === "error"
                      ? "bg-red-500/10 text-red-600"
                      : "bg-accent-soft text-accent"
                }`}
                role={status === "error" ? "alert" : "status"}
              >
                {message}
              </p>
            ) : null}
          </div>
        </form>
      </div>
    </section>
  );
}
