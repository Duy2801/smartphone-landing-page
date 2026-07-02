import Image from "next/image";
import { cameraStory } from "@/config/product";

export function CameraStory() {
  return (
    <section
      id="camera"
      className="mx-auto grid w-full max-w-7xl scroll-mt-28 gap-12 px-5 py-20 sm:px-8 lg:min-h-[105svh] lg:grid-cols-[0.92fr_1.08fr] lg:items-center lg:px-10 lg:py-32"
      aria-labelledby="camera-title"
    >
      <div className="lg:sticky lg:top-28 lg:self-start">
        <p className="mb-4 inline-flex rounded-full border border-border bg-accent-soft px-4 py-2 text-sm font-medium text-accent">
          Camera iPhone 17
        </p>
        <h2
          id="camera-title"
          className="text-balance text-4xl font-semibold tracking-[-0.045em] text-foreground sm:text-5xl"
        >
          Nhiều góc nhìn hơn cho câu chuyện của bạn.
        </h2>
        <p className="mt-5 text-pretty text-base leading-8 text-muted sm:text-lg">
          Hệ thống camera 48MP Dual Fusion linh hoạt từ ảnh phong cảnh, macro
          đến chân dung 2x. Camera trước Center Stage giúp mọi người luôn vừa khung hình.
        </p>

        <div
          aria-hidden="true"
          className="mt-8 overflow-hidden rounded-[2rem] border border-border bg-surface-elevated p-4 shadow-2xl shadow-blue-950/10"
        >
          <Image src="/images/products/image5.png" alt="Tổng quan Ceramic Shield 2, camera trước Center Stage, ProMotion 120Hz, pin và chip A19 của iPhone 17" width={1200} height={1200} className="h-auto w-full rounded-[1.5rem]" sizes="(min-width: 1024px) 42vw, 90vw" />
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
