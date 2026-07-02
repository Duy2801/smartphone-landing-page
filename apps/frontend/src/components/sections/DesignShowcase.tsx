import Image from "next/image";
import { designHighlights } from "@/config/product";

export function DesignShowcase() {
  return (
    <section
      id="design"
      className="mx-auto grid w-full max-w-7xl gap-12 px-5 py-20 sm:px-8 lg:min-h-[105svh] lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:px-10 lg:py-32"
      aria-labelledby="design-title"
    >
      <div className="order-2 grid gap-4 sm:grid-cols-2 lg:order-1">
        <Image src="/images/products/image3.png" alt="Màn hình iPhone 17 với ProMotion 120Hz và Ceramic Shield 2" width={1200} height={1200} className="h-auto w-full rounded-[2rem] border border-border shadow-sm sm:col-span-2" sizes="(min-width: 1024px) 45vw, 90vw" />
        <Image src="/images/products/image2.png" alt="Mặt trước iPhone 17 màu Tím Oải Hương" width={1200} height={1200} className="h-auto w-full rounded-[2rem] border border-border bg-white shadow-sm" sizes="(min-width: 1024px) 22vw, 45vw" />
        <Image src="/images/products/image4.png" alt="Trong hộp iPhone 17 gồm điện thoại và cáp sạc USB-C" width={1200} height={1200} className="h-auto w-full rounded-[2rem] border border-border shadow-sm" sizes="(min-width: 1024px) 22vw, 45vw" />
      </div>

      <div className="order-1 lg:order-2 lg:pl-8">
        <p className="mb-4 inline-flex rounded-full border border-border bg-accent-soft px-4 py-2 text-sm font-medium text-accent">
          Thiết kế & độ bền
        </p>
        <h2
          id="design-title"
          className="text-balance text-4xl font-semibold tracking-[-0.045em] text-foreground sm:text-5xl"
        >
          Sắc màu tinh tế. Bền đẹp cho từng ngày.
        </h2>
        <p className="mt-5 text-pretty text-base leading-8 text-muted sm:text-lg">
          iPhone 17 có khung nhôm nhẹ, mặt sau kính pha màu và Ceramic Shield 2
          ở mặt trước. Phiên bản Tím Oải Hương tạo điểm nhấn dịu mắt mà vẫn hiện đại.
        </p>

        <ul className="mt-8 grid gap-3">
          {designHighlights.map((item) => (
            <li
              key={item}
              className="flex items-start gap-3 rounded-2xl border border-border bg-surface-elevated p-4 text-sm text-muted"
            >
              <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-accent-soft text-xs font-bold text-accent">
                ✓
              </span>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
