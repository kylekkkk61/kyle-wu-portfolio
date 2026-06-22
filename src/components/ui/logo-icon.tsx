import type * as React from "react"
import { cn } from "@/lib/utils"

export function LogoIcon({ className, ...props }: React.ComponentProps<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="225 262.5 750 750"
      className={cn("fill-current", className)}
      {...props}
    >
      <title>Kyle Wu Logo</title>
      <path d="M975.19,600.32l-112.4-.17L600.44,862.46,337.36,600.32,637.92,300.09l-112.5.62L226.26,599.93l-.8,375.16,75-75,0-225,56.16,56.21L600.35,975Z" />
      <path d="M300.46,300.4h-75V525.09l75-75Z" />
      <path d="M487.3,599.77,600.66,712.26l112-112H600.44" />
      <path d="M450.66,900.09l-75.35-75,0,75.08" />
    </svg>
  )
}
