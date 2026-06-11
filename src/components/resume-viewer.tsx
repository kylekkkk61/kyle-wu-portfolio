"use client"

import { useState, useEffect } from "react"
import { Document, Page, pdfjs } from "react-pdf"
import "react-pdf/dist/Page/AnnotationLayer.css"
import "react-pdf/dist/Page/TextLayer.css"
import { Loader2 } from "lucide-react"

// Set up PDF.js worker
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`

interface ResumeViewerProps {
  fileUrl: string
}

export function ResumeViewer({ fileUrl }: ResumeViewerProps) {
  const [numPages, setNumPages] = useState<number>()
  const [containerWidth, setContainerWidth] = useState<number>(0)

  // Handle responsive width
  useEffect(() => {
    const updateWidth = () => {
      // Get the width of the container, max out at 800px for readability
      const width = Math.min(window.innerWidth - 40, 800)
      setContainerWidth(width)
    }

    updateWidth()
    window.addEventListener("resize", updateWidth)
    return () => window.removeEventListener("resize", updateWidth)
  }, [])

  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    setNumPages(numPages)
  }

  return (
    <div className="flex w-full flex-col items-center justify-center">
      <div className="bg-card text-card-foreground relative min-h-[600px] w-full max-w-[800px] overflow-hidden rounded-xl border shadow-xl">
        <Document
          file={fileUrl}
          onLoadSuccess={onDocumentLoadSuccess}
          loading={
            <div className="text-muted-foreground flex min-h-[600px] w-full flex-col items-center justify-center">
              <Loader2 className="text-primary mb-4 h-8 w-8 animate-spin" />
              <p>Loading resume...</p>
            </div>
          }
          error={
            <div className="text-muted-foreground flex min-h-[600px] w-full flex-col items-center justify-center p-8 text-center">
              <p className="text-destructive mb-2 font-medium">
                Failed to load PDF.
              </p>
              <p className="text-sm">
                Please check if CORS is correctly configured on your Cloudflare
                R2 bucket.
              </p>
            </div>
          }
          className="flex flex-col items-center gap-4"
        >
          {containerWidth > 0 &&
            Array.from(new Array(numPages), (el, index) => (
              <div key={`page_${index + 1}`} className="flex w-full flex-col">
                <Page
                  pageNumber={index + 1}
                  width={containerWidth}
                  renderTextLayer={true}
                  renderAnnotationLayer={true}
                  className="overflow-hidden bg-white shadow-sm [&_canvas]:!block"
                />
              </div>
            ))}
        </Document>
      </div>
    </div>
  )
}
