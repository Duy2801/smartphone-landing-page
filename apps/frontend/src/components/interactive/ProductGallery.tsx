"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const productImages = [
  { src: "/images/products/image1.png", alt: "iPhone 17 màu Tím Oải Hương, mặt trước và mặt sau" },
  { src: "/images/products/image2.png", alt: "Mặt trước iPhone 17 màu Tím Oải Hương" },
  { src: "/images/products/image3.png", alt: "Màn hình iPhone 17 với ProMotion 120Hz" },
  { src: "/images/products/image4.png", alt: "iPhone 17 và phụ kiện trong hộp" },
  { src: "/images/products/image5.png", alt: "Cụm camera và thiết kế iPhone 17" },
  { src: "/images/products/image6.png", alt: "Chi tiết nổi bật của iPhone 17" },
];

export function ProductGallery() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % productImages.length);
    }, 6500);

    return () => window.clearInterval(timer);
  }, [isPaused]);

  function showPrevious() {
    setActiveIndex((current) =>
      current === 0 ? productImages.length - 1 : current - 1,
    );
  }

  function showNext() {
    setActiveIndex((current) => (current + 1) % productImages.length);
  }

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="relative rounded-[2.5rem] border border-border bg-white p-4 shadow-2xl shadow-violet-950/20 sm:p-6">
        <div className="relative aspect-square overflow-hidden rounded-[1.75rem] bg-white">
          {productImages.map((image, index) => (
            <Image
              key={image.src}
              src={image.src}
              alt={index === activeIndex ? image.alt : ""}
              fill
              className={`object-contain transition-[opacity,transform] duration-[1100ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
                index === activeIndex
                  ? "scale-100 opacity-100"
                  : "pointer-events-none scale-[1.025] opacity-0"
              }`}
              sizes="(min-width: 1024px) 48vw, 90vw"
              priority={index === 0}
              aria-hidden={index !== activeIndex}
            />
          ))}

          <button
            type="button"
            onClick={showPrevious}
            className="absolute left-3 top-1/2 z-20 grid size-10 -translate-y-1/2 place-items-center rounded-full border border-white/60 bg-black/35 text-xl text-white shadow-lg backdrop-blur transition hover:scale-105 hover:bg-black/55"
            aria-label="Xem ảnh trước"
          >
            ‹
          </button>
          <button
            type="button"
            onClick={showNext}
            className="absolute right-3 top-1/2 z-20 grid size-10 -translate-y-1/2 place-items-center rounded-full border border-white/60 bg-black/35 text-xl text-white shadow-lg backdrop-blur transition hover:scale-105 hover:bg-black/55"
            aria-label="Xem ảnh tiếp theo"
          >
            ›
          </button>
        </div>
      </div>

      <div className="mt-4 grid grid-cols-6 gap-2 px-2 sm:mt-5 sm:gap-3 sm:px-5" aria-label="Chọn ảnh sản phẩm">
        {productImages.map((image, index) => (
          <button
            key={image.src}
            type="button"
            onClick={() => setActiveIndex(index)}
            className={`relative aspect-square overflow-hidden rounded-2xl border-2 bg-white p-1 shadow-sm transition duration-300 hover:-translate-y-1 ${
              activeIndex === index
                ? "border-accent shadow-md shadow-blue-500/25"
                : "border-transparent opacity-60 hover:opacity-100"
            }`}
            aria-label={`Xem ảnh sản phẩm ${index + 1}`}
            aria-current={activeIndex === index ? "true" : undefined}
          >
            <Image
              src={image.src}
              alt=""
              fill
              className="object-cover"
              sizes="96px"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
