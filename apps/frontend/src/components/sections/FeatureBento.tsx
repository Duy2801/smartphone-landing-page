import Image from "next/image";
import { features } from "@/config/features";

const cardStyles = [
  "min-h-[34rem] bg-[#111115] text-white lg:col-span-7 lg:row-span-2",
  "min-h-64 bg-gradient-to-br from-[#e9e4ff] via-[#f7f4ff] to-white text-slate-950 lg:col-span-5",
  "min-h-64 bg-gradient-to-br from-[#dff5ff] via-[#eefaff] to-white text-slate-950 lg:col-span-5",
  "min-h-72 bg-gradient-to-br from-[#dcfce7] via-[#f0fdf4] to-white text-slate-950 lg:col-span-4",
  "min-h-72 bg-gradient-to-br from-[#fff1db] via-[#fff8ed] to-white text-slate-950 lg:col-span-4",
  "min-h-72 bg-gradient-to-br from-[#eeeaf8] via-[#f8f7fb] to-white text-slate-950 lg:col-span-4",
] as const;

export function FeatureBento() {
  return (
    <section
      id="features"
      className="mx-auto w-full max-w-7xl scroll-mt-28 px-5 py-20 sm:px-8 lg:px-10 lg:py-32"
      aria-labelledby="features-title"
    >
      <div className="grid items-end gap-6 lg:grid-cols-[1fr_0.72fr]">
        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-accent">
            Tính năng nổi bật
          </p>
          <h2
            id="features-title"
            className="max-w-4xl text-balance text-4xl font-semibold tracking-[-0.055em] text-foreground sm:text-6xl lg:text-7xl"
          >
            Nhiều thứ để yêu. Trong một chiếc iPhone.
          </h2>
        </div>
        <p className="max-w-xl text-pretty text-base leading-8 text-muted sm:text-lg lg:pb-2">
          Từ màn hình ProMotion đến camera Dual Fusion, mỗi nâng cấp trên
          iPhone 17 đều tạo ra khác biệt bạn có thể cảm nhận ngay.
        </p>
      </div>

      <div className="mt-14 grid auto-rows-auto gap-4 lg:grid-cols-12">
        {features.map((feature, index) => (
          <article
            key={feature.title}
            className={`group relative isolate overflow-hidden rounded-[2.25rem] border border-black/5 p-7 shadow-[0_24px_80px_rgba(15,23,42,0.08)] transition duration-500 hover:-translate-y-1.5 hover:shadow-[0_32px_100px_rgba(15,23,42,0.14)] sm:p-9 ${cardStyles[index]}`}
          >
            {index === 0 ? (
              <>
                <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_75%_75%,rgba(167,139,250,0.34),transparent_34%),radial-gradient(circle_at_30%_10%,rgba(255,255,255,0.12),transparent_28%)]" />
                <Image
                  src="/images/products/image2.png"
                  alt="Mặt trước iPhone 17 với màn hình Super Retina XDR"
                  width={1200}
                  height={1200}
                  className="absolute -bottom-48 right-[-8%] -z-10 w-[74%] rotate-[8deg] rounded-[3rem] opacity-95 transition duration-700 group-hover:-translate-y-3 group-hover:rotate-[5deg] sm:-bottom-52 sm:w-[68%]"
                  sizes="(min-width: 1024px) 42vw, 70vw"
                />
              </>
            ) : (
              <div className={`absolute inset-0 -z-10 bg-gradient-to-br ${feature.accent} opacity-70`} />
            )}

            <div className="flex h-full flex-col">
              <div className="flex items-center justify-between gap-4">
                <p className={`text-xs font-bold uppercase tracking-[0.22em] ${index === 0 ? "text-white/55" : "text-slate-500"}`}>
                  {feature.eyebrow}
                </p>
                <span className={`grid size-10 place-items-center rounded-full border text-lg transition duration-500 group-hover:rotate-45 ${index === 0 ? "border-white/20 bg-white/10 text-white" : "border-black/10 bg-white/60 text-slate-700"}`}>
                  ↗
                </span>
              </div>

              <div className={index === 0 ? "max-w-sm" : "mt-auto"}>
                <p className={`mt-8 font-semibold tracking-[-0.07em] ${index === 0 ? "text-7xl sm:text-8xl" : "text-5xl sm:text-6xl"}`}>
                  {feature.metric}
                </p>
                <h3 className={`mt-5 font-semibold tracking-[-0.04em] ${index === 0 ? "text-3xl" : "text-2xl"}`}>
                  {feature.title}
                </h3>
                <p className={`mt-3 max-w-md text-sm leading-7 ${index === 0 ? "text-white/65" : "text-slate-600"}`}>
                  {feature.description}
                </p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
