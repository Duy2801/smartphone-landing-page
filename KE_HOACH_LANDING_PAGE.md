# Kế hoạch làm Smartphone Landing Page theo 10 phần commit

Mục tiêu: xây dựng landing page giới thiệu smartphone **Astra X1** bằng Next.js, giao diện hiện đại, responsive tốt, có SEO Technical, tối ưu PageSpeed Mobile 85+ và có thể mở rộng form/webhook, dark mode, animation, mini commerce, chatbot.

> Cách dùng: làm xong từng phần thì chạy kiểm tra, ổn rồi commit. Đừng gom tất cả vào một commit lớn.

---

## Nguyên tắc chia thư mục

Project frontend dùng cấu trúc `src/` để code sạch hơn:

- `src/app`: chỉ dùng cho App Router của Next.js: route, layout, page, metadata, API route. `page.tsx` chỉ nên compose component, không nhét UI/logic dài vào đây.
- `src/components`: chứa component tái sử dụng hoặc section UI. Component nhận props, render UI, hạn chế xử lý nghiệp vụ phức tạp.
- `src/hooks`: chứa custom hooks tái sử dụng, ví dụ `useLocalStorage`, `useScrollProgress`, `useTheme`. Hook xử lý state/effect phía client.
- `src/lib`: chứa logic dùng chung, helper, validation schema, service gọi API, analytics, format dữ liệu. Đây là nơi để xử lý nghiệp vụ thuần không phụ thuộc UI.
- `src/config`: chứa dữ liệu/config tĩnh như navigation, thông tin sản phẩm, danh sách tính năng, thông số kỹ thuật, SEO config.
- `public`: chỉ chứa asset public như ảnh, icon, OG image. Không đặt `app` trong `public`.

Quy tắc nhanh:

```text
Route/page/layout/API       -> src/app
UI tái sử dụng              -> src/components
State/effect tái sử dụng    -> src/hooks
Logic/schema/service/helper -> src/lib
Dữ liệu tĩnh/config         -> src/config
Ảnh/icon public             -> public
```

---

## Công nghệ đề xuất

| Hạng mục | Công nghệ | Lý do |
| --- | --- | --- |
| Frontend | Next.js 16 + React 19 + TypeScript | App Router, SEO tốt, tối ưu ảnh/font |
| Styling | Tailwind CSS 4 + CSS variables | Làm UI nhanh, dễ responsive và dark mode |
| Validation | Zod | Validate form ở client/server gọn |
| Animation | CSS + Intersection Observer | Nhẹ, đủ đẹp, ít ảnh hưởng PageSpeed |
| Backend mở rộng | NestJS hoặc Next API Route | Dùng cho newsletter, tracking, chatbot |
| Deploy | Vercel | Hợp Next.js, dễ deploy miễn phí |

---

## Cây thư mục đề xuất

```text
smartphone-landing-page/
├── apps/
│   ├── frontend/
│   │   ├── public/
│   │   │   ├── images/
│   │   │   │   ├── hero/
│   │   │   │   ├── features/
│   │   │   │   └── og/
│   │   │   └── icons/
│   │   ├── src/
│   │   │   ├── app/
│   │   │   │   ├── api/
│   │   │   │   │   └── newsletter/
│   │   │   │   │       └── route.ts
│   │   │   │   ├── privacy/
│   │   │   │   │   └── page.tsx
│   │   │   │   ├── favicon.ico
│   │   │   │   ├── globals.css
│   │   │   │   ├── layout.tsx
│   │   │   │   ├── manifest.ts
│   │   │   │   ├── page.tsx
│   │   │   │   ├── robots.ts
│   │   │   │   └── sitemap.ts
│   │   │   ├── components/
│   │   │   │   ├── layout/
│   │   │   │   │   ├── Header.tsx
│   │   │   │   │   └── Footer.tsx
│   │   │   │   ├── sections/
│   │   │   │   │   ├── HeroSection.tsx
│   │   │   │   │   ├── FeatureBento.tsx
│   │   │   │   │   ├── CameraStory.tsx
│   │   │   │   │   ├── PerformanceSection.tsx
│   │   │   │   │   ├── DesignShowcase.tsx
│   │   │   │   │   ├── Specifications.tsx
│   │   │   │   │   ├── NewsletterSection.tsx
│   │   │   │   │   └── FinalCta.tsx
│   │   │   │   ├── interactive/
│   │   │   │   │   ├── ThemeToggle.tsx
│   │   │   │   │   ├── ScrollReveal.tsx
│   │   │   │   │   ├── ProductActions.tsx
│   │   │   │   │   └── ChatWidget.tsx
│   │   │   │   └── ui/
│   │   │   │       ├── Button.tsx
│   │   │   │       ├── Input.tsx
│   │   │   │       ├── Toast.tsx
│   │   │   │       └── SectionHeading.tsx
│   │   │   ├── config/
│   │   │   │   ├── navigation.ts
│   │   │   │   ├── product.ts
│   │   │   │   ├── features.ts
│   │   │   │   ├── specifications.ts
│   │   │   │   └── site.ts
│   │   │   ├── hooks/
│   │   │   │   ├── useLocalStorage.ts
│   │   │   │   ├── useScrollProgress.ts
│   │   │   │   └── useTheme.ts
│   │   │   └── lib/
│   │   │       ├── analytics.ts
│   │   │       ├── newsletter.ts
│   │   │       ├── schemas.ts
│   │   │       ├── storage.ts
│   │   │       └── utils.ts
│   │   ├── next.config.ts
│   │   └── package.json
│   └── backend/
│       └── src/
│           ├── newsletter/
│           ├── analytics/
│           └── products/
├── packages/
├── .github/workflows/ci.yml
├── KE_HOACH_LANDING_PAGE.md
└── README.md
```

---

## Quy ước import

Nên cấu hình alias trong `tsconfig.json`:

```json
{
  "compilerOptions": {
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
```

Ví dụ import:

```ts
import { HeroSection } from "@/components/sections/HeroSection";
import { product } from "@/config/product";
import { newsletterSchema } from "@/lib/schemas";
```

---

# 10 phần thực hiện và commit

## Phần 1 — Dọn nền project, theme và design token

Mục tiêu: bỏ giao diện mặc định, chuẩn bị nền UI chuyên nghiệp.

Việc cần làm:

- Dùng đúng App Router trong `apps/frontend/src/app`.
- Không dùng `apps/frontend/public/app`.
- Cập nhật `src/app/globals.css`.
- Cập nhật `src/app/layout.tsx`.
- Cập nhật `src/app/page.tsx` để chỉ là landing foundation tạm.
- Tạo CSS variables cho màu nền, chữ, surface, border, accent.
- Đặt `lang="vi"`.

File dự kiến sửa:

- `apps/frontend/src/app/layout.tsx`
- `apps/frontend/src/app/globals.css`
- `apps/frontend/src/app/page.tsx`

Kiểm tra:

```bash
pnpm --filter frontend lint
pnpm --filter frontend build
pnpm check-types
```

Commit:

```text
chore(frontend): setup landing page base theme
```

---

## Phần 2 — SEO nền tảng và metadata

Mục tiêu: có SEO Technical cơ bản.

Việc cần làm:

- Metadata trong `src/app/layout.tsx`.
- Tạo `src/app/robots.ts`.
- Tạo `src/app/sitemap.ts`.
- Tạo `src/app/manifest.ts`.
- Tạo config SEO trong `src/config/site.ts`.
- Nếu cần, thêm JSON-LD helper trong `src/lib`.

File dự kiến:

- `apps/frontend/src/app/layout.tsx`
- `apps/frontend/src/app/robots.ts`
- `apps/frontend/src/app/sitemap.ts`
- `apps/frontend/src/app/manifest.ts`
- `apps/frontend/src/config/site.ts`

Commit:

```text
feat(seo): add metadata sitemap robots and manifest
```

---

## Phần 3 — Header, navigation và Footer

Mục tiêu: tạo layout điều hướng responsive.

Việc cần làm:

- `Header` và `Footer` đặt trong `src/components/layout`.
- Navigation tĩnh đặt trong `src/config/navigation.ts`.
- `src/app/page.tsx` chỉ import và ghép layout, không viết UI dài trong page.

File dự kiến:

- `apps/frontend/src/components/layout/Header.tsx`
- `apps/frontend/src/components/layout/Footer.tsx`
- `apps/frontend/src/config/navigation.ts`
- `apps/frontend/src/app/page.tsx`

Commit:

```text
feat(layout): add responsive header and footer
```

---

## Phần 4 — Hero Section tối ưu LCP

Mục tiêu: hero đẹp, nhẹ, rõ sản phẩm.

Việc cần làm:

- Tạo `HeroSection` trong `src/components/sections`.
- Dữ liệu sản phẩm chính đặt trong `src/config/product.ts`.
- Nếu có helper format giá/thông số thì đặt trong `src/lib/utils.ts`.
- Ảnh hero đặt trong `apps/frontend/public/images/hero`.
- Chỉ dùng `next/image` cho ảnh thật, khai báo size rõ.

File dự kiến:

- `apps/frontend/src/components/sections/HeroSection.tsx`
- `apps/frontend/src/config/product.ts`
- `apps/frontend/src/app/page.tsx`
- `apps/frontend/public/images/hero/*`

Commit:

```text
feat(hero): build responsive smartphone hero section
```

---

## Phần 5 — Feature Bento và config tính năng

Mục tiêu: trình bày tính năng nổi bật bằng bento grid.

Việc cần làm:

- Dữ liệu tính năng đặt trong `src/config/features.ts`.
- UI bento đặt trong `src/components/sections/FeatureBento.tsx`.
- Card nhỏ có thể tách vào `src/components/ui` nếu dùng lại nhiều lần.

File dự kiến:

- `apps/frontend/src/config/features.ts`
- `apps/frontend/src/components/sections/FeatureBento.tsx`
- `apps/frontend/src/app/page.tsx`

Commit:

```text
feat(features): add bento grid for key smartphone features
```

---

## Phần 6 — Camera Story, Performance và Design Showcase

Mục tiêu: thêm các section kể chuyện, tăng cảm giác cao cấp.

Việc cần làm:

- Section UI đặt trong `src/components/sections`.
- Data tĩnh nếu nhiều thì đặt trong `src/config/product.ts` hoặc file config riêng.
- Logic tính toán nhỏ, format số, mapping class nên đặt trong `src/lib/utils.ts`.
- Không để animation/scroll logic dài trong component; nếu cần thì tách hook.

File dự kiến:

- `apps/frontend/src/components/sections/CameraStory.tsx`
- `apps/frontend/src/components/sections/PerformanceSection.tsx`
- `apps/frontend/src/components/sections/DesignShowcase.tsx`
- `apps/frontend/src/app/page.tsx`

Commit:

```text
feat(sections): add camera performance and design storytelling
```

---

## Phần 7 — Specifications và Final CTA

Mục tiêu: đáp ứng yêu cầu có thông số kỹ thuật và CTA cuối trang.

Việc cần làm:

- Thông số đặt trong `src/config/specifications.ts`.
- UI thông số đặt trong `src/components/sections/Specifications.tsx`.
- CTA cuối trang đặt trong `src/components/sections/FinalCta.tsx`.
- Nếu table mobile cần state accordion, có thể tách component client nhỏ.

File dự kiến:

- `apps/frontend/src/config/specifications.ts`
- `apps/frontend/src/components/sections/Specifications.tsx`
- `apps/frontend/src/components/sections/FinalCta.tsx`
- `apps/frontend/src/app/page.tsx`

Commit:

```text
feat(specs): add technical specifications and final cta
```

---

## Phần 8 — Newsletter form, validation và API route

Mục tiêu: form nhận tin hoạt động thật ở mức cơ bản.

Việc cần làm:

- UI form đặt trong `src/components/sections/NewsletterSection.tsx`.
- Schema validate đặt trong `src/lib/schemas.ts`.
- Logic submit/call API đặt trong `src/lib/newsletter.ts`.
- API route đặt trong `src/app/api/newsletter/route.ts`.
- Nếu cần hook riêng cho state form thì đặt trong `src/hooks`.

Luồng:

```text
Người dùng nhập email
  -> component form gọi schema/helper
  -> POST /api/newsletter
  -> route.ts validate lại
  -> trả success/error
  -> component hiển thị trạng thái
```

File dự kiến:

- `apps/frontend/src/components/sections/NewsletterSection.tsx`
- `apps/frontend/src/lib/schemas.ts`
- `apps/frontend/src/lib/newsletter.ts`
- `apps/frontend/src/app/api/newsletter/route.ts`
- `apps/frontend/src/app/page.tsx`

Commit:

```text
feat(newsletter): add validated subscription form
```

---

## Phần 9 — Dark mode, scroll animation và tracking

Mục tiêu: thêm điểm cộng UX nhưng vẫn giữ performance.

Việc cần làm:

- `ThemeToggle` đặt trong `src/components/interactive`.
- `ScrollReveal` đặt trong `src/components/interactive`.
- `useTheme`, `useScrollProgress` đặt trong `src/hooks`.
- Tracking event đặt trong `src/lib/analytics.ts`.
- Không đặt scroll listener trực tiếp lung tung trong section.

File dự kiến:

- `apps/frontend/src/components/interactive/ThemeToggle.tsx`
- `apps/frontend/src/components/interactive/ScrollReveal.tsx`
- `apps/frontend/src/hooks/useTheme.ts`
- `apps/frontend/src/hooks/useScrollProgress.ts`
- `apps/frontend/src/lib/analytics.ts`
- `apps/frontend/src/app/globals.css`

Commit:

```text
feat(ux): add dark mode scroll reveal and behavior tracking
```

---

## Phần 10 — Mini commerce, chatbot, deploy và PageSpeed

Mục tiêu: hoàn thiện điểm cộng và deploy thật.

Việc cần làm:

- `ProductActions` đặt trong `src/components/interactive`.
- `ChatWidget` đặt trong `src/components/interactive`.
- `useLocalStorage` đặt trong `src/hooks`.
- Helper lưu/đọc storage đặt trong `src/lib/storage.ts`.
- FAQ chatbot tĩnh có thể đặt trong `src/config/product.ts` hoặc `src/config/chatbot.ts`.
- Không load chatbot ngay từ đầu; lazy-load khi người dùng mở.

File dự kiến:

- `apps/frontend/src/components/interactive/ProductActions.tsx`
- `apps/frontend/src/components/interactive/ChatWidget.tsx`
- `apps/frontend/src/hooks/useLocalStorage.ts`
- `apps/frontend/src/lib/storage.ts`
- `apps/frontend/src/config/product.ts`
- `README.md`

Kiểm tra cuối:

```bash
pnpm lint
pnpm check-types
pnpm build
```

Commit:

```text
feat(extras): add mini commerce chatbot and deployment docs
```

---

# Checklist PageSpeed Mobile 85+

- Dùng `next/image` cho ảnh lớn.
- Ảnh hero dùng AVIF/WebP, dung lượng nhỏ.
- Không dùng video nền autoplay.
- Không load chatbot/analytics ngay từ đầu.
- Không import animation library nặng nếu CSS đủ dùng.
- Không để layout shift khi ảnh/widget xuất hiện.
- Font dùng ít weight.
- Production build trước khi đo.

```bash
pnpm build
pnpm --filter frontend start
```

Mục tiêu:

| Chỉ số | Mục tiêu |
| --- | --- |
| Lighthouse Performance Mobile | >= 85 |
| LCP | <= 2.5s |
| INP | <= 200ms |
| CLS | <= 0.1 |
| Accessibility | >= 90 |
| SEO | >= 90 |

---

# Thứ tự ưu tiên nếu thiếu thời gian

1. Phần 1–2: nền project + SEO.
2. Phần 3–4: header/footer + hero.
3. Phần 5–7: tính năng + thông số + CTA.
4. Phần 8: newsletter form.
5. Phần 9: dark mode + animation.
6. Phần 10: mini commerce/chatbot/deploy/performance.

Lưu ý quan trọng: landing page gọn, nhanh, responsive và cấu trúc rõ sẽ tốt hơn một trang nhiều tính năng nhưng code lẫn lộn hoặc PageSpeed thấp.
