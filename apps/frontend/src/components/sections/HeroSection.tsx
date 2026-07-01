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
          >
            {product.primaryCta.label}
          </a>
          <a
            className="inline-flex min-h-12 items-center justify-center rounded-full border border-border bg-surface px-6 text-sm font-semibold text-foreground transition hover:-translate-y-0.5 hover:border-accent"
            href={product.secondaryCta.href}
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

      <div className="relative mx-auto flex w-full max-w-[34rem] items-center justify-center lg:justify-end">
        <div className="absolute inset-0 rounded-full bg-accent/20 blur-3xl" />
        <div className="relative aspect-[0.82] w-[min(78vw,24rem)] rounded-[3rem] border border-border bg-surface-muted p-6 shadow-2xl shadow-blue-950/20">
          <div className="absolute -left-6 top-14 hidden rounded-3xl border border-border bg-surface-elevated px-5 py-4 shadow-xl shadow-black/10 backdrop-blur sm:block">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-muted-foreground">
              Giá dự kiến
            </p>
            <p className="mt-1 text-lg font-semibold text-foreground">
              {product.priceLabel}
            </p>
          </div>

          <div className="absolute -right-5 bottom-20 hidden rounded-3xl border border-border bg-surface-elevated px-5 py-4 shadow-xl shadow-black/10 backdrop-blur sm:block">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-muted-foreground">
              Pin thông minh
            </p>
            <p className="mt-1 text-lg font-semibold text-foreground">
              Trọn ngày
            </p>
          </div>

          <div className="relative h-full rounded-[2.5rem] border-[12px] border-foreground bg-background p-3 shadow-2xl shadow-black/25">
            <div className="mx-auto mb-5 h-2 w-20 rounded-full bg-muted-foreground/35" />
            <div className="grid h-[calc(100%-1.75rem)] gap-3">
              <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-blue-500 via-violet-500 to-cyan-400">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.55),transparent_24%),radial-gradient(circle_at_80%_80%,rgba(255,255,255,0.18),transparent_28%)]" />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="rounded-3xl bg-surface" />
                <div className="rounded-3xl bg-surface" />
              </div>
              <div className="rounded-3xl bg-surface" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
