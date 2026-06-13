import { links } from "@/data/links"
import { SectionContainer } from "@/components/layout/section-container"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { Link } from "@/i18n/routing"
import { ArrowLeft, Download } from "lucide-react"
import { ResumeViewerWrapper } from "@/components/resume-viewer-wrapper"

export const metadata = {
  title: "Resume",
  description: "Kyle Wu's Professional Resume and Curriculum Vitae",
}

export default function ResumePage() {
  return (
    <div className="bg-background min-h-screen pt-24 pb-20">
      <SectionContainer>
        {/* Navigation / Header */}
        <div className="mb-8 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          <Link
            href="/"
            className={cn(
              buttonVariants({ variant: "ghost", size: "sm" }),
              "group text-muted-foreground hover:text-foreground -ml-4 px-4",
            )}
          >
            <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
            Back to Home
          </Link>

          <a
            href={links.resumePdf}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(buttonVariants({ variant: "default", size: "sm" }))}
          >
            <Download className="mr-2 h-4 w-4" />
            Download PDF
          </a>
        </div>

        {/* PDF Viewer */}
        <ResumeViewerWrapper fileUrl={links.resumePdf} />
      </SectionContainer>
    </div>
  )
}
