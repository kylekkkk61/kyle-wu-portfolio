import * as React from "react"

export function SiteBackground() {
  return (
    <div
      aria-hidden="true"
      className="bg-background pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      {/* Dot grid texture */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.04)_1px,transparent_0)] bg-[length:32px_32px]" />

      {/* Subtle top border gradient */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
    </div>
  )
}
