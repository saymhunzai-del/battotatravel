import Link from "next/link";
import Image from "next/image";

export interface PackageCardProps {
  href: string;
  title: string;
  description: string;
  rate: string;
  rateNote?: string;
  imageSrc: string;
  imageAlt: string;
  badge?: string;
}

export function PackageCard({
  href,
  title,
  description,
  rate,
  rateNote = "per person",
  imageSrc,
  imageAlt,
  badge
}: PackageCardProps) {
  return (
    <Link href={href} className="package-card">
      <div className="package-card-image">
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={400}
          height={300}
          sizes="(max-width: 640px) 100vw, (max-width: 900px) 50vw, 33vw"
        />
        {badge && <span className="package-card-badge">{badge}</span>}
      </div>
      <div className="package-card-body">
        <h3 className="package-card-title">{title}</h3>
        <p className="package-card-desc">{description}</p>
        <div className="package-card-footer">
          <span>
            <span className="package-card-rate">{rate}</span>
            <span className="package-card-rate-note"> {rateNote}</span>
          </span>
          <span className="package-card-cta">View details →</span>
        </div>
      </div>
    </Link>
  );
}
