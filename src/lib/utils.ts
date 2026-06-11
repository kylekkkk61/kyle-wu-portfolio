import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const surfaceClass =
  "rounded-2xl md:rounded-3xl border border-white/[0.06] bg-[#161616] transition-all hover:border-white/10 hover:bg-[#1a1a1a]"
