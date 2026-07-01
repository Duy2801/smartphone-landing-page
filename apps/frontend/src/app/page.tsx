export default function Home() {
  return (
    <main className="min-h-screen px-5 py-8 sm:px-8 lg:px-10">
      <section
        id="landing-foundation"
        className="mx-auto flex min-h-[calc(100vh-4rem)] w-full max-w-6xl flex-col items-center justify-center gap-12 rounded-[2rem] border border-border bg-surface-elevated px-6 py-16 text-center shadow-2xl shadow-black/5 backdrop-blur sm:px-10 lg:grid lg:grid-cols-[1.05fr_0.95fr] lg:px-14 lg:text-left"
      >
        <div className="max-w-2xl">
          <p className="mb-5 inline-flex rounded-full border border-border bg-accent-soft px-4 py-2 text-sm font-medium text-accent">
            Smartphone AI cao cấp · Landing page foundation
          </p>
          <h1 className="text-balance text-4xl font-semibold tracking-[-0.04em] text-foreground sm:text-5xl lg:text-7xl">
            Astra X1 sẵn sàng cho một trải nghiệm flagship mới.
          </h1>
          <p className="mt-6 text-pretty text-base leading-8 text-muted sm:text-lg">
            Nền giao diện đã được dọn sạch, có design token, responsive base và
            typography ổn định để tiếp tục xây các section hero, tính năng,
            thông số và newsletter.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row lg:justify-start">
            <a
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-accent px-6 text-sm font-semibold text-accent-foreground shadow-lg shadow-blue-500/20 transition hover:-translate-y-0.5 hover:shadow-blue-500/30"
              href="#landing-foundation"
            >
              Xem nền giao diện
            </a>
            <a
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-border bg-surface px-6 text-sm font-semibold text-foreground transition hover:-translate-y-0.5 hover:border-accent"
              href="#next-section"
            >
              Sẵn sàng làm phần 2
            </a>
          </div>
        </div>

        <div
          aria-hidden="true"
          className="relative flex aspect-[4/5] w-full max-w-[22rem] items-center justify-center overflow-hidden rounded-[2rem] border border-border bg-surface-muted p-8 shadow-inner"
        >
          <div className="absolute inset-8 rounded-[2rem] bg-gradient-to-br from-blue-500/20 via-violet-500/20 to-cyan-400/10 blur-2xl" />
          <div className="relative h-full w-[72%] rounded-[2.25rem] border-[10px] border-foreground bg-background p-3 shadow-2xl shadow-black/20">
            <div className="mx-auto mb-5 h-2 w-16 rounded-full bg-muted-foreground/35" />
            <div className="grid h-[calc(100%-1.75rem)] gap-3">
              <div className="rounded-3xl bg-gradient-to-br from-accent to-violet-500" />
              <div className="grid grid-cols-2 gap-3">
                <div className="rounded-2xl bg-surface" />
                <div className="rounded-2xl bg-surface" />
              </div>
              <div className="rounded-2xl bg-surface" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
