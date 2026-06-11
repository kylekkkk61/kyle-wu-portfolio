import * as React from "react"
import { cn } from "@/lib/utils"

interface SectionContainerProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode
  containerClassName?: string
}

export function SectionContainer({
  children,
  className,
  containerClassName,
  ...props
}: SectionContainerProps) {
  return (
    <section className={cn("relative py-16 md:py-24", className)} {...props}>
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
      <div
        className={cn(
          "mx-auto w-full max-w-7xl px-6 md:px-8",
          containerClassName,
        )}
      >
        {children}
      </div>
    </section>
  )
}
