import Link from "next/link";
import Image from "next/image";

interface DestinationCardProps {
  href: string;
  name: string;
  imageSrc: string;
  imageAlt: string;
}

export function DestinationCard({ href, name, imageSrc, imageAlt }: DestinationCardProps) {
  return (
    <Link href={href} className="destination-card">
      <Image
        src={imageSrc}
        alt={imageAlt}
        width={280}
        height={373}
        sizes="(max-width: 640px) 50vw, 25vw"
      />
      <span className="destination-card-label">{name}</span>
    </Link>
  );
}
