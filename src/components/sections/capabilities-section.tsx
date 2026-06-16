import { useTranslations } from "next-intl"
import { SectionContainer } from "@/components/layout/section-container"
import { FadeIn } from "@/components/ui/fade-in"
import type { Profile } from "@/data/profile"

export function CapabilitiesSection({ profile }: { profile: Profile }) {
  const t = useTranslations("Sections")

  return (
    <SectionContainer id="capabilities" variant="teal">
      <div className="relative z-10 mb-12 md:mb-16">
        <h2 className="font-heading text-3xl font-semibold tracking-tight md:text-4xl">
          {t("Capabilities")}
        </h2>
        <p className="text-muted-foreground mt-4 max-w-[65ch] text-lg">
          {t("CapabilitiesDesc")}
        </p>
      </div>

      <div className="relative z-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8">
        {profile.capabilities.map((item, index) => (
          <FadeIn
            key={item.title}
            delay={index * 100}
            className="group py-6 md:py-8"
          >
            <div className="flex items-start gap-4">
              <span
                className="text-primary/40 font-mono text-xl font-medium tracking-tight select-none"
                aria-hidden="true"
              >
                {String(index + 1).padStart(2, "0")}
              </span>
              <div className="space-y-3 pt-0.5">
                <h3 className="text-foreground text-xl font-medium tracking-tight">
                  {item.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>

      {/* Subtle bottom divider like Image 1 */}
      <div className="mt-8 w-full border-b border-white/[0.06]" />
    </SectionContainer>
  )
}
