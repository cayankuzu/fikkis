"use client";

import { useSyncExternalStore } from "react";

const querySubscribers = new Map<string, (onChange: () => void) => () => void>();

// Aynı sorgu için sabit bir abone fonksiyonu döndürür; böylece her render'da
// yeniden abone olunmaz.
function subscribeToQuery(query: string) {
  let subscribe = querySubscribers.get(query);

  if (!subscribe) {
    subscribe = (onChange) => {
      const list = window.matchMedia(query);
      list.addEventListener("change", onChange);
      return () => list.removeEventListener("change", onChange);
    };
    querySubscribers.set(query, subscribe);
  }

  return subscribe;
}

function useMediaQuery(query: string, serverValue: boolean) {
  return useSyncExternalStore(
    subscribeToQuery(query),
    () => window.matchMedia(query).matches,
    () => serverValue,
  );
}

export function usePrefersReducedMotion() {
  return useMediaQuery("(prefers-reduced-motion: reduce)", false);
}

/** Fare/trackpad gibi gerçek hover destekleyen bir işaretçi var mı? */
export function useCanHover() {
  return useMediaQuery("(hover: hover) and (pointer: fine)", true);
}

/** Masaüstü deneyimleri için yetersiz cihaz: dar ekran ya da yalnızca dokunmatik. */
export function useIsLimitedDevice() {
  const hasFinePointer = useMediaQuery(
    "(any-pointer: fine) and (any-hover: hover)",
    true,
  );
  const isNarrow = useMediaQuery("(max-width: 959px)", false);
  return isNarrow || !hasFinePointer;
}

const HASH_EVENT = "fikkis:hashchange";

function subscribeToHash(onChange: () => void) {
  window.addEventListener("hashchange", onChange);
  window.addEventListener("popstate", onChange);
  window.addEventListener(HASH_EVENT, onChange);
  return () => {
    window.removeEventListener("hashchange", onChange);
    window.removeEventListener("popstate", onChange);
    window.removeEventListener(HASH_EVENT, onChange);
  };
}

export function useLocationHash() {
  return useSyncExternalStore(
    subscribeToHash,
    () => window.location.hash,
    () => "",
  );
}

/** Geçmişe yeni kayıt eklemeden hash'i değiştirir (kaydırma yapmaz). */
export function replaceHash(hash: string) {
  const url = `${window.location.pathname}${window.location.search}${hash}`;
  window.history.replaceState(window.history.state, "", url);
  window.dispatchEvent(new Event(HASH_EVENT));
}

export async function copyText(text: string) {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    return false;
  }
}
