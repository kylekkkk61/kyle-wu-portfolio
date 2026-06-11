import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const surfaceClass =
  "rounded-2xl md:rounded-3xl border border-white/[0.06] bg-white/[0.03] transition-all hover:border-white/10 hover:bg-white/[0.05]"
