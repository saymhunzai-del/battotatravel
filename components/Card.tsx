import Link from "next/link";

interface CardProps {
  title: string;
  description?: string;
  href?: string;
  ctaLabel?: string;
  children?: React.ReactNode;
  className?: string;
}

export function Card({
  title,
  description,
  href,
  ctaLabel = "Learn more",
  children,
  className = ""
}: CardProps) {
  const content = (
    <>
      <h3 className="card-title">{title}</h3>
      {description && <p className="card-desc">{description}</p>}
      {children}
      {href && (
        <span className="card-cta">
          {ctaLabel}
          <span className="card-cta-arrow" aria-hidden> →</span>
        </span>
      )}
    </>
  );

  const classes = `card ${className}`.trim();

  if (href) {
    return (
      <Link href={href} className={classes}>
        {content}
      </Link>
    );
  }

  return <article className={classes}>{content}</article>;
}
