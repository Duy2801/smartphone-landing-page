# Astra X1 Smartphone Landing Page

Landing page giới thiệu smartphone Astra X1, xây dựng bằng Next.js 16, React 19, TypeScript và Tailwind CSS 4 trong Turborepo.

## Tính năng

- Landing page responsive với hero, bento features, storytelling và thông số kỹ thuật.
- SEO Technical: metadata, Open Graph, robots, sitemap và web manifest.
- Newsletter validate bằng Zod ở client và API route.
- Dark mode, scroll reveal và tracking hành vi nhẹ.
- Mini commerce lưu yêu thích, giỏ hàng và sản phẩm đã xem bằng localStorage.
- Chatbot FAQ được tách bundle và chỉ tải khi người dùng mở.

## Chạy local

Yêu cầu Node.js 20+ và pnpm.

```bash
pnpm install
pnpm --filter frontend dev
```

Mở `http://localhost:3000`.

## Kiểm tra production

```bash
pnpm --filter frontend lint
pnpm --filter frontend build
pnpm check-types
pnpm --filter frontend start
```

Sau khi server chạy, dùng Lighthouse ở chế độ Mobile/Incognito. Mục tiêu: Performance >= 85, Accessibility >= 90, SEO >= 90.

## Deploy Vercel

1. Đẩy repository lên GitHub và import project vào Vercel.
2. Chọn framework **Next.js**.
3. Đặt Root Directory là `apps/frontend`; Vercel sẽ nhận diện workspace pnpm ở thư mục gốc.
4. Giữ Build command mặc định `next build` và Install command mặc định.
6. Deploy và cập nhật `url` trong `apps/frontend/src/config/site.ts` thành domain thật.

Newsletter hiện dùng API route demo và chưa lưu dữ liệu lâu dài. Khi chạy production, kết nối webhook hoặc database trong `src/app/api/newsletter/route.ts`.

## Checklist trước khi bàn giao

- Thay domain demo trong `site.ts` và kiểm tra canonical/sitemap.
- Nén ảnh mới sang AVIF/WebP và luôn khai báo kích thước.
- Chạy Lighthouse bằng production build, không đo ở dev mode.
- Kiểm tra form, dark mode, localStorage và chatbot trên mobile.
- Không đưa API key chatbot vào mã frontend; gọi AI qua server route nếu tích hợp API thật.
