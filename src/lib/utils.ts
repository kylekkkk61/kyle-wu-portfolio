import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const surfaceClass =
  "rounded-2xl md:rounded-3xl border border-white/10 bg-white/[0.02] backdrop-blur-md shadow-[inset_0_1px_0_rgba(255,255,255,0.06),0_20px_25px_-5px_rgba(0,0,0,0.4)] transition-all hover:border-primary/30 hover:bg-white/[0.04]"
