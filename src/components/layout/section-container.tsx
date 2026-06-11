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
    variant === "teal" ? "bg-[#202b2e] border border-white/[0.06] shadow-2xl" : "",
    variant === "plum" ? "bg-[#251723] border border-white/[0.06] shadow-2xl" : "",
    className
  )

  const sectionStyle = {
    ...style,
  } as React.CSSProperties & Record<string, string>

  // Scope CSS variables locally so text-primary and bg-primary match the block's vibe
  if (variant === "teal") {
    sectionStyle["--primary"] = "#10b981" // Emerald
  } else if (variant === "plum") {
    sectionStyle["--primary"] = "#f43f5e" // Rose
  }

  return (
    <section className={outerClasses} style={sectionStyle} {...props}>
      {variant === "transparent" && (
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
      )}
      <div
        className={cn(
          "mx-auto w-full max-w-7xl",
          "px-6 md:px-8",
          // The Rail Spacing: Force content to the right to leave space for the track
          "pl-12 md:pl-24 lg:pl-32",
          containerClassName,
        )}
      >
        {children}
      </div>
    </section>
  )
}
