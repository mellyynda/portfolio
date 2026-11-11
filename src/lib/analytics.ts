// Thin wrapper around the Umami tracker. A no-op when the script isn't loaded (no website ID, dev, blocked).
// Only send non-personal data: never prompts or free text typed by the visitor.
type EventData = Record<string, string | number | boolean>;

declare global {
  interface Window {
    umami?: { track: (name: string, data?: EventData) => void };
  }
}

export function track(name: string, data?: EventData): void {
  try {
    window.umami?.track(name, data);
  } catch {}
}
