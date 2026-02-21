import Link from "next/link";

interface CtaStripProps {
  title: string;
  subtitle?: string;
  href?: string;
  label?: string;
}

const defaultHref = "/contact";
const defaultLabel = "Get in touch";

export function CtaStrip({
  title,
  subtitle,
  href = defaultHref,
  label = defaultLabel,
}: CtaStripProps) {
  return (
    <section className="cta-strip" aria-label="Call to action">
      <div className="container cta-strip-inner">
        <h2 className="cta-strip-title">{title}</h2>
        {subtitle && <p className="cta-strip-subtitle">{subtitle}</p>}
        <Link href={href} className="btn cta-strip-btn">
          {label}
        </Link>
      </div>
    </section>
  );
}
