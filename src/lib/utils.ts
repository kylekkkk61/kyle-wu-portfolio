import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const surfaceClass =
  "rounded-2xl md:rounded-3xl border border-black/[0.06] bg-[#f5f2eb] transition-all hover:border-black/10 hover:bg-[#f8f6f0] dark:border-white/[0.06] dark:bg-[#161616] dark:hover:border-white/10 dark:hover:bg-[#1a1a1a]"
