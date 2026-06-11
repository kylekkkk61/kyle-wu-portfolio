import * as React from "react"
import { cn } from "@/lib/utils"

interface SectionContainerProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode
  containerClassName?: string
  variant?: "transparent" | "teal" | "plum"
}

export function SectionContainer({
  children,
  className,
  containerClassName,
  variant = "transparent",
  style,
  ...props
}: SectionContainerProps) {
  const isColorBlock = variant !== "transparent"

  const outerClasses = cn(
    "relative py-16 md:py-24 my-4", // Added my-4 for vertical spacing between blocks
    isColorBlock ? "mx-2 md:mx-4 lg:mx-6 rounded-[2.5rem]" : "",
    variant === "teal"
      ? "bg-[#1e241c] border border-white/[0.06] shadow-2xl"
      : "",
    variant === "plum"
      ? "bg-[#261c24] border border-white/[0.06] shadow-2xl"
      : "",
    className,
  )

  const sectionStyle = {
    ...style,
  } as React.CSSProperties & Record<string, string>

  // Scope CSS variables locally so text-primary and bg-primary match the block's vibe
  if (variant === "teal") {
    sectionStyle["--primary"] = "#9fb396" // Warm Sage Green
  } else if (variant === "plum") {
    sectionStyle["--primary"] = "#c2a3bc" // Warm Muted Purple
  }

  return (
    <section className={outerClasses} style={sectionStyle} {...props}>
      <div
        className={cn(
          "mx-auto w-full max-w-7xl",
          "px-6 md:px-8",
          containerClassName,
        )}
      >
        {children}
      </div>
    </section>
  )
}
