import Image from "next/image";
import { product } from "@/config/product";
import { ProductActions } from "@/components/interactive/ProductActions";

export function FinalCta() {
  return (
    <section className="px-5 py-20 sm:px-8 lg:px-10 lg:py-32">
      <div className="mx-auto overflow-hidden rounded-[2.5rem] border border-border bg-surface-elevated shadow-2xl shadow-blue-950/10 backdrop-blur">
        <div className="grid gap-8 p-6 sm:p-8 lg:grid-cols-[1fr_0.75fr] lg:p-12">
          <div>
            <p className="mb-4 inline-flex rounded-full border border-border bg-accent-soft px-4 py-2 text-sm font-medium text-accent">
              Sẵn sàng trải nghiệm?
            </p>
            <h2 className="max-w-3xl text-balance text-4xl font-semibold tracking-[-0.045em] text-foreground sm:text-5xl">
              Chọn iPhone 17 phù hợp với bạn.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-muted sm:text-lg">
              Nhận tư vấn về màu sắc, dung lượng, phương thức thanh toán và
              gói bảo vệ để yên tâm sử dụng lâu dài.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#newsletter"
                className="inline-flex min-h-12 items-center justify-center rounded-full bg-accent px-6 text-sm font-semibold text-accent-foreground shadow-lg shadow-blue-500/20 transition hover:-translate-y-0.5"
              >
                Đăng ký nhận tin
              </a>
              <a
                href="#specifications"
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-border bg-surface px-6 text-sm font-semibold text-foreground transition hover:-translate-y-0.5 hover:border-accent"
              >
                Xem lại thông số
              </a>
            </div>
          </div>

          <div className="rounded-[2rem] border border-border bg-foreground p-4 text-background sm:p-6">
            <Image src="/images/products/image6.png" alt="Quyền lợi AppleCare+ gồm sửa chữa, thay pin và hỗ trợ từ chuyên gia Apple" width={1200} height={1200} className="h-auto w-full rounded-[1.5rem]" sizes="(min-width: 1024px) 35vw, 90vw" />
            <p className="mt-6 text-sm font-semibold uppercase tracking-[0.22em] text-background/60">
              Lựa chọn
            </p>
            <p className="mt-4 text-4xl font-semibold tracking-[-0.06em]">
              {product.priceLabel}
            </p>
            <p className="mt-5 text-sm leading-7 text-background/65">
              Tư vấn thêm về AppleCare+, phụ kiện tương thích và phương thức
              thanh toán phù hợp với nhu cầu của bạn.
            </p>
            <ProductActions />
          </div>
        </div>
      </div>
    </section>
  );
}
