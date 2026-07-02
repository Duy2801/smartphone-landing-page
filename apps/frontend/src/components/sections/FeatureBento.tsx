import { features } from "@/config/features";

export function FeatureBento() {
  return (
    <section
      id="features"
      className="mx-auto w-full max-w-7xl scroll-mt-28 px-5 py-20 sm:px-8 lg:px-10 lg:py-32"
      aria-labelledby="features-title"
    >
      <div className="mx-auto max-w-3xl text-center">
        <p className="mb-4 inline-flex rounded-full border border-border bg-accent-soft px-4 py-2 text-sm font-medium text-accent">
          Tính năng nổi bật
        </p>
        <h2
          id="features-title"
          className="text-balance text-4xl font-semibold tracking-[-0.045em] text-foreground sm:text-5xl"
        >
          Những nâng cấp được chọn lọc cho trải nghiệm hằng ngày.
        </h2>
        <p className="mt-5 text-pretty text-base leading-8 text-muted sm:text-lg">
          Từ màn hình ProMotion đến camera Dual Fusion, mỗi nâng cấp trên
          iPhone 17 đều được tạo ra để bạn cảm nhận ngay trong từng thao tác.
        </p>
      </div>

      <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {features.map((feature) => (
          <article
            key={feature.title}
            className={`group relative min-h-72 overflow-hidden rounded-[2rem] border border-border bg-surface-elevated p-6 shadow-sm backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-accent/50 hover:shadow-2xl hover:shadow-blue-950/10 ${feature.className}`}
          >
            <div
              className={`absolute inset-0 bg-gradient-to-br ${feature.accent} opacity-80 transition group-hover:opacity-100`}
            />
            <div className="absolute -right-10 -top-10 size-40 rounded-full border border-white/10 bg-white/10 blur-2xl" />

            <div className="relative flex h-full flex-col justify-between gap-10">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-muted-foreground">
                  {feature.eyebrow}
                </p>
                <h3 className="mt-4 max-w-lg text-2xl font-semibold tracking-[-0.035em] text-foreground">
                  {feature.title}
                </h3>
                <p className="mt-3 max-w-xl text-sm leading-7 text-muted">
                  {feature.description}
                </p>
              </div>

              <div className="flex items-end justify-between gap-4">
                <span className="text-5xl font-semibold tracking-[-0.06em] text-foreground/90">
                  {feature.metric}
                </span>
                <span className="grid size-12 place-items-center rounded-full border border-border bg-surface text-accent transition group-hover:scale-110">
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    className="size-5"
                    fill="none"
                  >
                    <path
                      d="M7 17 17 7M9 7h8v8"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    />
                  </svg>
                </span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
