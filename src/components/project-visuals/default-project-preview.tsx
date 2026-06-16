import { Code2 } from "lucide-react"

export function DefaultProjectPreview() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center p-6 text-sm">
      <div className="bg-muted/50 text-muted-foreground flex h-16 w-16 items-center justify-center rounded-full">
        <Code2 className="h-8 w-8 opacity-50" />
      </div>
      <div className="mt-4 text-center">
        <span className="text-muted-foreground font-mono text-xs tracking-widest uppercase">
          Project Overview
        </span>
      </div>
    </div>
  )
}
