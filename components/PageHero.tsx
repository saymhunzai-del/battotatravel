import Link from "next/link";

type Cta = {
  href: string;
  label: string;
};

interface PageHeroProps {
  eyebrow?: string;
  title: string;
  subtitle: string;
  primaryCta?: Cta;
  secondaryCta?: Cta;
  align?: "left" | "right";
  compact?: boolean;
  /** additional class applied to the subtitle element */
  subtitleClassName?: string;
}

export function PageHero({
  eyebrow,
  title,
  subtitle,
  primaryCta,
  secondaryCta,
  align = "left",
  compact = false,
  subtitleClassName = "",
}: PageHeroProps) {
  return (
    <section className={`hero ${align === "right" ? "hero-right" : ""} ${compact ? "hero-compact" : ""}`}>
      <div className="hero-overlay" />
      <div className="container hero-content">
        {compact ? (
          <>
            <div className="hero-compact-head">
              {eyebrow && <span className="hero-eyebrow hero-eyebrow-inline">{eyebrow}</span>}
              <h1 className="hero-title hero-title-inline">{title}</h1>
            </div>
            <p className={`hero-subtitle hero-subtitle-inline ${subtitleClassName || ""}`}>{subtitle}</p>
          </>
        ) : (
          <>
            {eyebrow && <div className="hero-eyebrow">{eyebrow}</div>}
            <h1 className="hero-title">{title}</h1>
            <p className={`hero-subtitle ${subtitleClassName || ""}`}>{subtitle}</p>
          </>
        )}
        {(primaryCta || secondaryCta) && (
          <div className={`hero-actions ${compact ? "hero-actions-inline" : ""}`}>
            {primaryCta && (
              <Link href={primaryCta.href} className="btn primary">
                {primaryCta.label}
              </Link>
            )}
            {secondaryCta && (
              <Link href={secondaryCta.href} className="btn secondary">
                {secondaryCta.label}
              </Link>
            )}
          </div>
        )}
      </div>
    </section>
  );
}

