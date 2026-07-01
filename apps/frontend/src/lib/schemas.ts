import { z } from "zod";

export const newsletterSchema = z.object({
  email: z
    .string()
    .trim()
    .min(1, "Vui lòng nhập email.")
    .email("Email chưa đúng định dạng."),
  consent: z.literal(true, {
    error: "Bạn cần đồng ý nhận thông tin trước khi gửi.",
  }),
  source: z.string().trim().min(1).default("landing-page"),
  website: z.string().max(0, "Yêu cầu không hợp lệ.").optional(),
});

export type NewsletterInput = z.input<typeof newsletterSchema>;
export type NewsletterPayload = z.output<typeof newsletterSchema>;
