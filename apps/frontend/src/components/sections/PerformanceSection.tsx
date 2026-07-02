import { performanceStats } from "@/config/product";

export function PerformanceSection() {
  return (
    <section
      id="performance"
      className="mx-auto flex min-h-[80svh] w-full max-w-7xl items-center px-5 py-20 sm:px-8 lg:px-10 lg:py-32"
      aria-labelledby="performance-title"
    >
      <div className="w-full overflow-hidden rounded-[2.5rem] border border-border bg-foreground p-6 text-background shadow-2xl shadow-blue-950/20 sm:p-8 lg:p-12">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="mb-4 inline-flex rounded-full border border-background/20 bg-background/10 px-4 py-2 text-sm font-medium text-background">
              Sức mạnh A19
            </p>
            <h2
              id="performance-title"
              className="text-balance text-4xl font-semibold tracking-[-0.045em] sm:text-5xl"
            >
              Hiệu năng mạnh mẽ. Năng lượng dồi dào.
            </h2>
            <p className="mt-5 text-base leading-8 text-background/70 sm:text-lg">
              Chip A19 tăng tốc mọi việc từ Apple Intelligence đến game AAA,
              đồng thời duy trì thời lượng pin xem video lên đến 30 giờ.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            {performanceStats.map((item) => (
              <article
                key={item.label}
                className="rounded-[2rem] border border-background/15 bg-background/10 p-5 backdrop-blur"
              >
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-background/55">
                  {item.label}
                </p>
                <p className="mt-6 text-5xl font-semibold tracking-[-0.06em]">
                  {item.value}
                </p>
                <p className="mt-3 text-sm leading-6 text-background/65">
                  {item.description}
                </p>
                <div className="mt-6 h-2 overflow-hidden rounded-full bg-background/15">
                  <div className="h-full w-3/4 rounded-full bg-accent" />
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
