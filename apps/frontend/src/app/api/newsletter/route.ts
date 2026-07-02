import { NextResponse } from "next/server";
import { newsletterSchema } from "@/lib/schemas";

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const parsed = newsletterSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      {
        ok: false,
        message: parsed.error.issues[0]?.message ?? "Dữ liệu chưa hợp lệ.",
      },
      { status: 400 },
    );
  }

  const { email, source } = parsed.data;
  const [name = "", domain = ""] = email.split("@");
  const maskedEmail = `${name.slice(0, 2)}***@${domain}`;

  // Demo storage/webhook placeholder:
  // Ở phần mở rộng, thay đoạn này bằng Supabase, webhook hoặc backend NestJS.
  console.info("newsletter_subscription", {
    email: maskedEmail,
    source,
    createdAt: new Date().toISOString(),
  });

  return NextResponse.json({
    ok: true,
    message: "Đăng ký thành công. Chúng tôi sẽ gửi thông tin iPhone 17 sớm nhất!",
  });
}
