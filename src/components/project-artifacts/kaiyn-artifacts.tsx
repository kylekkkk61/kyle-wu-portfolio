import * as React from "react"
import {
  Terminal,
  MessageCircle,
  Database,
  CheckCircle2,
  ShieldAlert,
} from "lucide-react"

export function KaiynSignalArtifact() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center p-6">
      <div className="w-full max-w-sm space-y-4">
        <div className="flex items-center gap-2 text-[#8da3b5]">
          <Terminal className="h-5 w-5" />
          <span className="font-mono text-sm font-semibold">
            Signal Webhook Payload
          </span>
        </div>
        <div className="bg-muted/30 text-muted-foreground border-border/50 rounded-lg border p-4 font-mono text-xs shadow-inner">
          <div className="text-[#8da3b5]">{"{"}</div>
          <div className="pl-4">
            <span className="text-[#c2a3bc]">&quot;asset&quot;</span>:{" "}
            <span className="text-[#c4a56c]">&quot;BTC-USDT&quot;</span>,
            <br />
            <span className="text-[#c2a3bc]">&quot;action&quot;</span>:{" "}
            <span className="text-[#c4a56c]">&quot;LONG&quot;</span>,
            <br />
            <span className="text-[#c2a3bc]">&quot;risk_level&quot;</span>:{" "}
            <span className="text-[#c4a56c]">&quot;1R&quot;</span>,
            <br />
            <span className="text-[#c2a3bc]">&quot;timestamp&quot;</span>:{" "}
            <span className="text-[#9fb396]">1709283741</span>
          </div>
          <div className="text-[#8da3b5]">{"}"}</div>
        </div>
        <div className="text-muted-foreground flex items-center gap-2 text-xs">
          <ShieldAlert className="h-3 w-3 text-[#c4a56c]" />
          <span>Strict JSON validation enforced</span>
        </div>
      </div>
    </div>
  )
}

export function KaiynConfirmationArtifact() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center p-6">
      <div className="w-full max-w-xs space-y-3">
        <div className="flex items-center gap-2 text-[#c4a56c]">
          <MessageCircle className="h-5 w-5" />
          <span className="font-mono text-sm font-semibold">
            Interactive Auth
          </span>
        </div>
        <div className="bg-card border-border/50 space-y-4 rounded-xl border p-4 shadow-lg">
          <div className="space-y-2">
            <h4 className="text-sm font-medium">Execute Trade?</h4>
            <div className="bg-muted/50 text-muted-foreground rounded p-2 font-mono text-xs">
              BTC-USDT LONG @ 1R
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <button className="rounded-md bg-[#b88e8e]/10 py-2 text-xs font-medium text-[#b88e8e] transition-colors hover:bg-[#b88e8e]/20">
              REJECT
            </button>
            <button className="flex items-center justify-center gap-1 rounded-md bg-[#9fb396]/10 py-2 text-xs font-medium text-[#9fb396] transition-colors hover:bg-[#9fb396]/20">
              <CheckCircle2 className="h-3 w-3" />
              CONFIRM
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export function KaiynAuditArtifact() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center overflow-hidden p-6">
      <div className="w-full max-w-md space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-[#9fb396]">
            <Database className="h-5 w-5" />
            <span className="font-mono text-sm font-semibold">
              Immutable Audit Trail
            </span>
          </div>
          <div className="h-2 w-2 animate-pulse rounded-full bg-[#9fb396]" />
        </div>
        <div className="space-y-2 font-mono text-[10px] sm:text-xs">
          {[
            { time: "14:02:01", msg: "Signal received", status: "ok" },
            { time: "14:02:02", msg: "Risk validated (1R)", status: "ok" },
            { time: "14:02:05", msg: "User confirmed", status: "ok" },
            { time: "14:02:06", msg: "Order executed", status: "ok" },
            { time: "14:02:06", msg: "State committed to DB", status: "ok" },
          ].map((log, i) => (
            <div
              key={i}
              className="border-border/30 flex items-center gap-3 border-b py-1 last:border-0"
            >
              <span className="text-muted-foreground">{log.time}</span>
              <span className="text-foreground/80 flex-1">{log.msg}</span>
              <span className="text-[#9fb396]">[{log.status}]</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
