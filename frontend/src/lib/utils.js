import { clsx } from "clsx";
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}
export function trackMetaLead(contentName) {
  if (typeof window !== "undefined" && window.fbq) {
    window.fbq("track", "Lead", {
      content_name: contentName,
    });

    window.fbq("track", "StartTrial", {
      content_name: contentName,
      value: 0,
      currency: "ARS",
    });
  }
}
