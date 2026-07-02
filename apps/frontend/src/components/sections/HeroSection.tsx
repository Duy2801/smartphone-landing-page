import Image from "next/image";
import { product } from "@/config/product";

export function HeroSection() {
  return (
    <section
      id="hero"
      className="mx-auto grid min-h-[calc(100vh-8rem)] w-full max-w-7xl scroll-mt-28 items-center gap-12 px-5 py-10 sm:px-8 lg:grid-cols-[1.02fr_0.98fr] lg:px-10 lg:py-16"
      aria-labelledby="hero-title"
    >
      <div className="max-w-3xl text-center lg:text-left">
        <p className="mb-5 inline-flex rounded-full border border-border bg-accent-soft px-4 py-2 text-sm font-medium text-accent">
          {product.eyebrow}
        </p>

        <h1
          id="hero-title"
          className="text-balance text-5xl font-semibold tracking-[-0.055em] text-foreground sm:text-6xl lg:text-7xl"
        >
          {product.headline}
        </h1>

        <p className="mt-6 max-w-2xl text-pretty text-base leading-8 text-muted sm:text-lg lg:mx-0">
          {product.description}
        </p>

        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row lg:justify-start">
          <a
            className="inline-flex min-h-12 items-center justify-center rounded-full bg-accent px-6 text-sm font-semibold text-accent-foreground shadow-lg shadow-blue-500/20 transition hover:-translate-y-0.5 hover:shadow-blue-500/30"
            href={product.primaryCta.href}
            data-analytics="hero_cta_click"
            data-analytics-label="primary"
          >
            {product.primaryCta.label}
          </a>
          <a
            className="inline-flex min-h-12 items-center justify-center rounded-full border border-border bg-surface px-6 text-sm font-semibold text-foreground transition hover:-translate-y-0.5 hover:border-accent"
            href={product.secondaryCta.href}
            data-analytics="hero_cta_click"
            data-analytics-label="secondary"
          >
            {product.secondaryCta.label}
          </a>
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-2 lg:justify-start">
          {product.badges.map((badge) => (
            <span
              key={badge}
              className="rounded-full border border-border bg-surface-elevated px-3 py-1.5 text-xs font-semibold text-muted shadow-sm"
            >
              {badge}
            </span>
          ))}
        </div>

        <dl className="mt-10 grid gap-3 sm:grid-cols-3">
          {product.highlights.map((item) => (
            <div
              key={item.label}
              className="rounded-3xl border border-border bg-surface-elevated p-5 shadow-sm backdrop-blur"
            >
              <dt className="text-2xl font-semibold tracking-[-0.04em] text-foreground">
                {item.label}
              </dt>
              <dd className="mt-1 text-sm text-muted">{item.description}</dd>
            </div>
          ))}
        </dl>
      </div>

      <div className="relative mx-auto flex w-full max-w-[38rem] items-center justify-center lg:justify-end">
        <div className="absolute inset-8 rounded-full bg-accent/20 blur-3xl" />
        <div className="relative w-full rounded-[2.5rem] border border-border bg-white p-4 shadow-2xl shadow-violet-950/20 sm:p-6">
          <div className="absolute -left-6 top-14 z-10 hidden rounded-3xl border border-border bg-surface-elevated px-5 py-4 shadow-xl shadow-black/10 backdrop-blur sm:block">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-muted-foreground">
              Dung lượng
            </p>
            <p className="mt-1 text-lg font-semibold text-foreground">
              {product.priceLabel}
            </p>
          </div>

          <div className="absolute -right-5 bottom-14 z-10 hidden rounded-3xl border border-border bg-surface-elevated px-5 py-4 shadow-xl shadow-black/10 backdrop-blur sm:block">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-muted-foreground">
              Màn hình
            </p>
            <p className="mt-1 text-lg font-semibold text-foreground">
              6,3″ · 120Hz
            </p>
          </div>

          <Image
            src="/images/products/image1.png"
            alt="iPhone 17 màu Tím Oải Hương, góc nhìn mặt trước và mặt sau"
            width={1200}
            height={1200}
            className="h-auto w-full rounded-[1.75rem] object-contain"
            sizes="(min-width: 1024px) 48vw, 90vw"
            priority
          />
        </div>
      </div>
    </section>
  );
}
