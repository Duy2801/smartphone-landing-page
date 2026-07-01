import { product } from "@/config/product";

export function FinalCta() {
  return (
    <section className="px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
      <div className="mx-auto overflow-hidden rounded-[2.5rem] border border-border bg-surface-elevated shadow-2xl shadow-blue-950/10 backdrop-blur">
        <div className="grid gap-8 p-6 sm:p-8 lg:grid-cols-[1fr_0.75fr] lg:p-12">
          <div>
            <p className="mb-4 inline-flex rounded-full border border-border bg-accent-soft px-4 py-2 text-sm font-medium text-accent">
              Sẵn sàng trải nghiệm?
            </p>
            <h2 className="max-w-3xl text-balance text-4xl font-semibold tracking-[-0.045em] text-foreground sm:text-5xl">
              Nhận thông tin mở bán và ưu đãi sớm cho {product.name}.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-muted sm:text-lg">
              Đăng ký để nhận thông báo về thời gian ra mắt, cấu hình chính
              thức và các gói ưu đãi đặt trước.
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

          <div className="rounded-[2rem] border border-border bg-foreground p-6 text-background">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-background/60">
              Giá dự kiến
            </p>
            <p className="mt-4 text-4xl font-semibold tracking-[-0.06em]">
              {product.priceLabel}
            </p>
            <p className="mt-5 text-sm leading-7 text-background/65">
              Ưu đãi demo: bảo hành 24 tháng, trả góp 0% và gói phụ kiện cao
              cấp cho người đăng ký sớm.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
