"use client";

import { useCallback, useEffect, useState } from "react";
import { readStorage, writeStorage } from "@/lib/storage";

export function useLocalStorage<T>(key: string, initialValue: T) {
  const [value, setValue] = useState(initialValue);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      setValue(readStorage(key, initialValue));
      setIsReady(true);
    });

    return () => window.cancelAnimationFrame(frame);
  }, [initialValue, key]);

  const updateValue = useCallback(
    (nextValue: T | ((current: T) => T)) => {
      setValue((current) => {
        const resolved =
          typeof nextValue === "function"
            ? (nextValue as (current: T) => T)(current)
            : nextValue;
        writeStorage(key, resolved);
        return resolved;
      });
    },
    [key],
  );

  return [value, updateValue, isReady] as const;
}
