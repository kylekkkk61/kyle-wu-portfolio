import * as React from "react"

export function SiteBackground() {
  return (
    <div
      aria-hidden="true"
      className="bg-background pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      {/* Subtle top border gradient */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
    </div>
  )
}
