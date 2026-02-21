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
}

export function PageHero({
  eyebrow,
  title,
  subtitle,
  primaryCta,
  secondaryCta
}: PageHeroProps) {
  return (
    <section className="hero">
      <div className="hero-overlay" />
      <div className="container hero-content">
        {eyebrow && <div className="hero-eyebrow">{eyebrow}</div>}
        <h1 className="hero-title">{title}</h1>
        <p className="hero-subtitle">{subtitle}</p>
        {(primaryCta || secondaryCta) && (
          <div className="hero-actions">
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

