export type AnalyticsEvent =
  | "hero_cta_click"
  | "newsletter_submit"
  | "scroll_50"
  | "spec_view";

type EventProperties = Record<string, string | number | boolean>;

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>;
  }
}

export function trackEvent(
  event: AnalyticsEvent,
  properties: EventProperties = {},
) {
  if (typeof window === "undefined") return;

  const detail = { event, ...properties };
  window.dataLayer?.push(detail);
  window.dispatchEvent(new CustomEvent("astra:analytics", { detail }));
}
