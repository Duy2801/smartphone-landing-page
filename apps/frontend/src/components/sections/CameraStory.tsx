import { cameraStory } from "@/config/product";

export function CameraStory() {
  return (
    <section
      id="camera"
      className="mx-auto grid w-full max-w-7xl scroll-mt-28 gap-10 px-5 py-16 sm:px-8 lg:grid-cols-[0.95fr_1.05fr] lg:px-10 lg:py-24"
      aria-labelledby="camera-title"
    >
      <div className="lg:sticky lg:top-28 lg:self-start">
        <p className="mb-4 inline-flex rounded-full border border-border bg-accent-soft px-4 py-2 text-sm font-medium text-accent">
          Camera Story
        </p>
        <h2
          id="camera-title"
          className="text-balance text-4xl font-semibold tracking-[-0.045em] text-foreground sm:text-5xl"
        >
          Mỗi khung hình được xử lý như một câu chuyện.
        </h2>
        <p className="mt-5 text-pretty text-base leading-8 text-muted sm:text-lg">
          Cụm camera AI của Astra X1 ưu tiên màu sắc tự nhiên, vùng sáng cân
          bằng và chi tiết ổn định trong nhiều điều kiện chụp.
        </p>

        <div
          aria-hidden="true"
          className="mt-8 overflow-hidden rounded-[2rem] border border-border bg-surface-elevated p-4 shadow-2xl shadow-blue-950/10"
        >
          <div className="relative aspect-[4/3] overflow-hidden rounded-[1.5rem] bg-gradient-to-br from-slate-950 via-blue-950 to-cyan-600">
            <div className="absolute left-8 top-8 size-24 rounded-full bg-white/80 blur-sm" />
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/70 to-transparent" />
            <div className="absolute bottom-8 left-8 right-8 grid grid-cols-3 gap-3">
              <div className="h-20 rounded-2xl bg-white/15 backdrop-blur" />
              <div className="h-20 rounded-2xl bg-white/25 backdrop-blur" />
              <div className="h-20 rounded-2xl bg-white/10 backdrop-blur" />
            </div>
          </div>
        </div>
      </div>

      <div className="grid gap-4">
        {cameraStory.map((item, index) => (
          <article
            key={item.title}
            className="rounded-[2rem] border border-border bg-surface-elevated p-6 shadow-sm backdrop-blur transition hover:-translate-y-1 hover:border-accent/50"
          >
            <div className="flex items-start justify-between gap-6">
              <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-accent-soft text-sm font-bold text-accent">
                0{index + 1}
              </span>
              <div className="text-right">
                <p className="text-3xl font-semibold tracking-[-0.05em] text-foreground">
                  {item.stat}
                </p>
                <p className="mt-1 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                  {item.label}
                </p>
              </div>
            </div>
            <h3 className="mt-8 text-2xl font-semibold tracking-[-0.035em] text-foreground">
              {item.title}
            </h3>
            <p className="mt-3 text-sm leading-7 text-muted">
              {item.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
