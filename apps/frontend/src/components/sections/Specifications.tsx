import { specifications } from "@/config/specifications";

export function Specifications() {
  return (
    <section
      id="specifications"
      className="mx-auto w-full max-w-7xl scroll-mt-28 px-5 py-20 sm:px-8 lg:px-10 lg:py-32"
      aria-labelledby="specifications-title"
    >
      <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <p className="mb-4 inline-flex rounded-full border border-border bg-accent-soft px-4 py-2 text-sm font-medium text-accent">
            Thông số kỹ thuật
          </p>
          <h2
            id="specifications-title"
            className="text-balance text-4xl font-semibold tracking-[-0.045em] text-foreground sm:text-5xl"
          >
            Mọi thông số quan trọng, rõ ràng trong một nơi.
          </h2>
          <p className="mt-5 text-pretty text-base leading-8 text-muted sm:text-lg">
            Từ màn hình, chip A19 đến camera và pin — xem nhanh những gì tạo nên
            trải nghiệm iPhone 17.
          </p>
        </div>

        <div className="grid gap-4">
          {specifications.map((section) => (
            <article
              key={section.group}
              className="overflow-hidden rounded-[2rem] border border-border bg-surface-elevated shadow-sm backdrop-blur"
            >
              <div className="border-b border-border px-5 py-4">
                <h3 className="text-lg font-semibold tracking-[-0.03em] text-foreground">
                  {section.group}
                </h3>
              </div>

              <div className="hidden sm:block">
                <table className="w-full border-collapse text-left text-sm">
                  <tbody>
                    {section.items.map(([label, value]) => (
                      <tr key={label} className="border-b border-border/70 last:border-0">
                        <th className="w-44 px-5 py-4 font-medium text-muted">
                          {label}
                        </th>
                        <td className="px-5 py-4 text-foreground">{value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <dl className="grid gap-3 p-4 sm:hidden">
                {section.items.map(([label, value]) => (
                  <div
                    key={label}
                    className="rounded-2xl border border-border bg-surface p-4"
                  >
                    <dt className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                      {label}
                    </dt>
                    <dd className="mt-2 text-sm font-medium text-foreground">
                      {value}
                    </dd>
                  </div>
                ))}
              </dl>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
