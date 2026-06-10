import * as React from "react"

interface ResumeViewerProps {
  imageUrl: string
}

export function ResumeViewer({ imageUrl }: ResumeViewerProps) {
  return (
    <div className="flex w-full flex-col items-center justify-center">
      <div className="bg-card text-card-foreground relative min-h-[600px] w-full max-w-[800px] overflow-hidden rounded-xl border shadow-xl">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={imageUrl}
          alt="Kyle Wu Resume"
          className="h-auto w-full object-contain"
          loading="eager"
        />
      </div>
    </div>
  )
}
