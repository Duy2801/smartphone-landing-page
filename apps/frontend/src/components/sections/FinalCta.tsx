import Image from "next/image";
import { product } from "@/config/product";
import { ProductActions } from "@/components/interactive/ProductActions";

export function FinalCta() {
  return (
    <section className="px-5 py-16 sm:px-8 lg:px-10 lg:py-20">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] bg-[#111115] p-6 text-white shadow-[0_28px_90px_rgba(15,23,42,0.18)] sm:p-8 lg:p-10">
        <div className="absolute -right-24 -top-40 size-96 rounded-full bg-violet-500/25 blur-3xl" />
        <div className="absolute -bottom-40 left-1/3 size-80 rounded-full bg-blue-500/15 blur-3xl" />

        <div className="relative grid items-center gap-8 lg:grid-cols-[1fr_25rem]">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-violet-300">
              Sẵn sàng trải nghiệm?
            </p>
            <h2 className="mt-4 max-w-3xl text-balance text-3xl font-semibold tracking-[-0.05em] sm:text-4xl lg:text-5xl">
              Chọn iPhone 17 dành cho bạn.
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-white/60 sm:text-base">
              Hai lựa chọn dung lượng, năm màu sắc và gói bảo vệ phù hợp với
              cách bạn sử dụng mỗi ngày.
            </p>

            <div className="mt-6 flex flex-wrap gap-2 text-sm font-semibold">
              <span className="rounded-full border border-white/15 bg-white/10 px-4 py-2.5">256GB</span>
              <span className="rounded-full border border-white/15 bg-white/10 px-4 py-2.5">512GB</span>
              <span className="rounded-full border border-white/15 bg-white/10 px-4 py-2.5">5 màu</span>
              <span className="rounded-full border border-white/15 bg-white/10 px-4 py-2.5">AppleCare+</span>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/15 bg-white/[0.08] p-4 backdrop-blur-xl sm:p-5">
            <div className="flex items-center gap-4">
              <Image
                src="/images/products/image6.png"
                alt="Thông tin quyền lợi AppleCare+"
                width={1200}
                height={1200}
                className="size-20 shrink-0 rounded-2xl object-cover shadow-lg sm:size-24"
                sizes="96px"
              />
              <div className="min-w-0">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-white/45">Lựa chọn</p>
                <p className="mt-2 text-xl font-semibold tracking-[-0.04em] sm:text-2xl">{product.priceLabel}</p>
                <a href="#newsletter" className="mt-2 inline-flex text-sm font-semibold text-violet-300 transition hover:text-white">
                  Nhận tư vấn ngay →
                </a>
              </div>
            </div>
            <ProductActions />
          </div>
        </div>
      </div>
    </section>
  );
}
