import {
  SiDocker,
  SiGithubactions,
  SiNextdotjs,
  SiNumpy,
  SiPandas,
  SiPostgresql,
  SiPython,
  SiReact,
  SiSqlalchemy,
  SiStreamlit,
  SiTailwindcss,
  SiTelegram,
  SiTypescript,
  SiVercel,
} from "@icons-pack/react-simple-icons"
import type * as React from "react"

export const techIconMap: Record<string, React.ReactNode> = {
  python: <SiPython className="h-5 w-5" />,
  docker: <SiDocker className="h-5 w-5" />,
  postgresql: <SiPostgresql className="h-5 w-5" />,
  telegram: <SiTelegram className="h-5 w-5" />,
  streamlit: <SiStreamlit className="h-5 w-5" />,
  "github actions": <SiGithubactions className="h-5 w-5" />,
  react: <SiReact className="h-5 w-5" />,
  "next.js": <SiNextdotjs className="h-5 w-5" />,
  tailwindcss: <SiTailwindcss className="h-5 w-5" />,
  vercel: <SiVercel className="h-5 w-5" />,
  typescript: <SiTypescript className="h-5 w-5" />,
  pandas: <SiPandas className="h-5 w-5" />,
  numpy: <SiNumpy className="h-5 w-5" />,
  sqlalchemy: <SiSqlalchemy className="h-5 w-5" />,
}

export function ProjectTechStack({ techStack }: { techStack: string[] }) {
  const icons = techStack
    .map((tech) => {
      const key = tech.toLowerCase()
      if (key.includes("postgres"))
        return { name: tech, icon: techIconMap.postgresql }
      if (key.includes("python"))
        return { name: tech, icon: techIconMap.python }
      if (key.includes("docker"))
        return { name: tech, icon: techIconMap.docker }
      if (key.includes("telegram"))
        return { name: tech, icon: techIconMap.telegram }
      if (key.includes("streamlit"))
        return { name: tech, icon: techIconMap.streamlit }
      if (key.includes("ci/cd") || key.includes("github actions"))
        return { name: tech, icon: techIconMap["github actions"] }
      if (key.includes("pandas"))
        return { name: tech, icon: techIconMap.pandas }
      if (key.includes("numpy")) return { name: tech, icon: techIconMap.numpy }
      if (key.includes("sqlalchemy"))
        return { name: tech, icon: techIconMap.sqlalchemy }

      return { name: tech, icon: techIconMap[key] }
    })
    .filter((item) => item.icon !== undefined)

  if (icons.length === 0) return null

  return (
    <div className="flex items-center gap-2 overflow-hidden">
      {icons.slice(0, 8).map((item) => (
        <div
          key={item.name}
          className="text-muted-foreground/70 hover:text-foreground relative flex h-10 w-10 shrink-0 cursor-default items-center justify-center rounded-xl border border-black/10 bg-black/[0.02] shadow-[inset_0_1px_0_rgba(0,0,0,0.02)] transition-all duration-300 hover:bg-black/[0.05] active:scale-95 dark:border-white/10 dark:bg-white/[0.02] dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] dark:hover:bg-white/[0.08] dark:hover:shadow-[0_0_15px_rgba(255,255,255,0.05)]"
          title={item.name}
        >
          {item.icon}
        </div>
      ))}
    </div>
  )
}
