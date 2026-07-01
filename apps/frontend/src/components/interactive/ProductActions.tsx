"use client";

import { useEffect, useState } from "react";
import { product } from "@/config/product";
import { useLocalStorage } from "@/hooks/useLocalStorage";

const EMPTY_ITEMS: string[] = [];

export function ProductActions() {
  const [favorites, setFavorites, favoritesReady] = useLocalStorage<string[]>(
    "astra-favorites",
    EMPTY_ITEMS,
  );
  const [cart, setCart, cartReady] = useLocalStorage<string[]>(
    "astra-cart",
    EMPTY_ITEMS,
  );
  const [viewed, setViewed] = useLocalStorage<string[]>(
    "astra-recently-viewed",
    EMPTY_ITEMS,
  );
  const [message, setMessage] = useState("");

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      setViewed((items) =>
        items.includes(product.id) ? items : [product.id, ...items].slice(0, 5),
      );
    });
    return () => window.cancelAnimationFrame(frame);
  }, [setViewed]);

  const isFavorite = favorites.includes(product.id);
  const isInCart = cart.includes(product.id);

  function toggleFavorite() {
    setFavorites((items) =>
      items.includes(product.id)
        ? items.filter((id) => id !== product.id)
        : [...items, product.id],
    );
    setMessage(isFavorite ? "Đã bỏ khỏi yêu thích." : "Đã lưu vào yêu thích.");
  }

  function toggleCart() {
    setCart((items) =>
      items.includes(product.id)
        ? items.filter((id) => id !== product.id)
        : [...items, product.id],
    );
    setMessage(isInCart ? "Đã bỏ khỏi giỏ hàng." : "Đã thêm vào giỏ hàng demo.");
  }

  const isReady = favoritesReady && cartReady;

  return (
    <div className="mt-6 border-t border-background/15 pt-5">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-background/60">
        Mini commerce
      </p>
      <div className="mt-3 grid gap-2 sm:grid-cols-2">
        <button
          type="button"
          onClick={toggleFavorite}
          disabled={!isReady}
          aria-pressed={isFavorite}
          className="min-h-11 rounded-full border border-background/20 px-4 text-sm font-semibold transition hover:bg-background/10 disabled:opacity-60"
        >
          {isFavorite ? "♥ Đã yêu thích" : "♡ Yêu thích"}
        </button>
        <button
          type="button"
          onClick={toggleCart}
          disabled={!isReady}
          aria-pressed={isInCart}
          className="min-h-11 rounded-full bg-background px-4 text-sm font-semibold text-foreground transition hover:-translate-y-0.5 disabled:opacity-60"
        >
          {isInCart ? "Đã thêm vào giỏ" : "Thêm vào giỏ"}
        </button>
      </div>
      <p className="mt-3 min-h-5 text-xs text-background/65" aria-live="polite">
        {message || `Đã xem ${viewed.length || 1} sản phẩm trên thiết bị này.`}
      </p>
    </div>
  );
}
