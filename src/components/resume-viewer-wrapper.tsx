"use client"

import dynamic from "next/dynamic"
import { Loader2 } from "lucide-react"

const ResumeViewer = dynamic(
  () => import("@/components/resume-viewer").then((mod) => mod.ResumeViewer),
  {
    ssr: false,
    loading: () => (
      <div className="text-muted-foreground bg-card mx-auto flex min-h-[600px] w-full max-w-[800px] flex-col items-center justify-center rounded-xl border">
        <Loader2 className="text-primary mb-4 h-8 w-8 animate-spin" />
        <p>Loading resume viewer...</p>
      </div>
    ),
  },
)

export function ResumeViewerWrapper({ fileUrl }: { fileUrl: string }) {
  return <ResumeViewer fileUrl={fileUrl} />
}
