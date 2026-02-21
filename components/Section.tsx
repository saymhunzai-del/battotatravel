interface SectionProps {
  id?: string;
  title: string;
  subtitle?: string;
  tone?: "default" | "muted";
  children: React.ReactNode;
}

export function Section({
  id,
  title,
  subtitle,
  tone = "default",
  children
}: SectionProps) {
  return (
    <section id={id} className={`section section-${tone}`}>
      <div className="container">
        <header className="section-header">
          <h2>{title}</h2>
          {subtitle && <p className="section-subtitle">{subtitle}</p>}
        </header>
        <div className="section-body">{children}</div>
      </div>
    </section>
  );
}

