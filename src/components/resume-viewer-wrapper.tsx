"use client"

import dynamic from "next/dynamic"
import { Loader2 } from "lucide-react"

const ResumeViewer = dynamic(
  () => import("@/components/resume-viewer").then((mod) => mod.ResumeViewer),
  {
    ssr: false,
    loading: () => (
      <div className="flex min-h-[600px] w-full max-w-[800px] mx-auto flex-col items-center justify-center text-muted-foreground border rounded-xl bg-card">
        <Loader2 className="mb-4 h-8 w-8 animate-spin text-primary" />
        <p>Loading resume viewer...</p>
      </div>
    ),
  }
)

export function ResumeViewerWrapper({ fileUrl }: { fileUrl: string }) {
  return <ResumeViewer fileUrl={fileUrl} />
}
