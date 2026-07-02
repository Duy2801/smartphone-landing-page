import type { NewsletterInput } from "@/lib/schemas";

export type NewsletterResponse = {
  ok: boolean;
  message: string;
};

export async function subscribeNewsletter(
  input: NewsletterInput,
): Promise<NewsletterResponse> {
  const response = await fetch("/api/newsletter", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(input),
  });

  const data = (await response.json().catch(() => null)) as
    | NewsletterResponse
    | null;

  if (!response.ok) {
    return {
      ok: false,
      message:
        data?.message ?? "Không thể gửi đăng ký lúc này. Vui lòng thử lại.",
    };
  }

  return {
    ok: true,
    message:
      data?.message ?? "Đăng ký thành công. Cảm ơn bạn đã quan tâm iPhone 17!",
  };
}
