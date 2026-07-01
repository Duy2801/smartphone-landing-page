import { designHighlights } from "@/config/product";

export function DesignShowcase() {
  return (
    <section
      id="design"
      className="mx-auto grid w-full max-w-7xl gap-10 px-5 py-16 sm:px-8 lg:grid-cols-[1fr_1fr] lg:px-10 lg:py-24"
      aria-labelledby="design-title"
    >
      <div className="order-2 grid gap-4 sm:grid-cols-2 lg:order-1">
        {["Graphite", "Aurora Blue", "Pearl White", "Titanium Mist"].map(
          (color) => (
            <div
              key={color}
              className="min-h-52 rounded-[2rem] border border-border bg-surface-elevated p-5 shadow-sm backdrop-blur"
            >
              <div className="h-28 rounded-[1.5rem] bg-gradient-to-br from-slate-200 via-blue-200 to-violet-300" />
              <p className="mt-5 text-sm font-semibold text-foreground">
                {color}
              </p>
            </div>
          ),
        )}
      </div>

      <div className="order-1 lg:order-2 lg:pl-8">
        <p className="mb-4 inline-flex rounded-full border border-border bg-accent-soft px-4 py-2 text-sm font-medium text-accent">
          Design Showcase
        </p>
        <h2
          id="design-title"
          className="text-balance text-4xl font-semibold tracking-[-0.045em] text-foreground sm:text-5xl"
        >
          Cảm giác cao cấp nằm trong từng cạnh bo và lớp hoàn thiện.
        </h2>
        <p className="mt-5 text-pretty text-base leading-8 text-muted sm:text-lg">
          Thiết kế của Astra X1 hướng tới sự tối giản: nhẹ khi cầm lâu, bền khi
          di chuyển nhiều và đủ nổi bật để trở thành điểm nhấn thương hiệu.
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
