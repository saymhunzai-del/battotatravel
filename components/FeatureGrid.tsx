import Link from "next/link";

interface FeatureItem {
  title: string;
  description: string;
  href?: string;
}

interface FeatureGridProps {
  id?: string;
  title: string;
  subtitle?: string;
  items: FeatureItem[];
}

export function FeatureGrid({ id, title, subtitle, items }: FeatureGridProps) {
  return (
    <section id={id} className="section">
      <div className="container">
        <header className="section-header">
          <h2>{title}</h2>
          {subtitle && <p className="section-subtitle">{subtitle}</p>}
        </header>
        <div className="feature-grid">
          {items.map((item) => (
            <article key={item.title} className="feature-card">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              {item.href && (
                <Link href={item.href} className="link">
                  Learn more
                </Link>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

