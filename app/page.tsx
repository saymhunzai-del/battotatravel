import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { FeatureGrid } from "@/components/FeatureGrid";
import { PackageCard } from "@/components/PackageCard";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { DestinationCard } from "@/components/DestinationCard";
import { getPackages } from "@/lib/packages";
import { CtaStrip } from "@/components/CtaStrip";

const destinations = [
  {
    href: "/holiday-package",
    name: "Dubai",
    imageSrc: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=600&q=80",
    imageAlt: "Dubai"
  },
  {
    href: "/holiday-package",
    name: "Abu Dhabi",
    imageSrc: "https://images.unsplash.com/photo-1512632578888-169bbbc64f33?w=600&q=80",
    imageAlt: "Abu Dhabi"
  },
  {
    href: "/holiday-package",
    name: "Oman",
    imageSrc: "https://images.unsplash.com/photo-1578894381163-e72c17f2d45f?w=600&q=80",
    imageAlt: "Oman"
  },
  {
    href: "/holiday-package",
    name: "Maldives",
    imageSrc: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=600&q=80",
    imageAlt: "Maldives"
  }
];

export default async function HomePage() {
  const featuredPackages = await getPackages();
  return (
    <>
      <PageHero
        eyebrow="Trusted Travel Partner Since 1976"
        title="Your trusted partner for every journey."
        subtitle="BIN BATOOTA TRAVEL & TOURISM specializes in thoughtfully crafted corporate and leisure travel across the globe, with dedicated advisors who understand the way you travel."
        primaryCta={{ href: "/corporate-travel", label: "Corporate Travel Solutions" }}
      />

      <Section
        id="packages"
        title="Featured holiday packages"
        subtitle="Handpicked getaways with competitive rates. Contact us for dates and customisation."
      >
        <div className="package-grid">
          {featuredPackages.map((pkg) => (
            <PackageCard
              key={pkg.title}
              href={pkg.href}
              title={pkg.title}
              description={pkg.description}
              rate={pkg.rate}
              rateNote={pkg.rateNote}
              imageSrc={pkg.imageSrc}
              imageAlt={pkg.imageAlt}
              badge={pkg.badge || undefined}
            />
          ))}
        </div>
        <p style={{ marginTop: "1.25rem", textAlign: "left" }}>
          <Link href="/holiday-package" className="btn primary">
            Plan Your Holiday
          </Link>
        </p>
      </Section>

      <Section id="why-choose-us" tone="muted" title="Why choose BIN BATOOTA">
        <WhyChooseUs />
      </Section>

      <Section id="overview" title="A heritage of service, a passion for travel.">
        <div className="grid two-columns">
          <div className="content">
            <p>
              Established in 1976 in Abu Dhabi, BIN BATOOTA TRAVEL & TOURISM has grown
              into a trusted travel partner for leading corporations, government
              entities, and discerning leisure travelers across the region.
            </p>
            <p>
              From complex corporate itineraries and incentive travel to bespoke
              holiday experiences, our dedicated teams provide proactive advice,
              transparent pricing, and seamless execution for every journey.
            </p>
            <div className="cta-inline">
              <Link href="/about-us" className="link">
                Learn more about us
              </Link>
              <span className="divider">•</span>
              <Link href="/contact" className="link subtle">
                Speak with a travel consultant
              </Link>
            </div>
          </div>
          <div className="content highlight-card">
            <h3>Why organizations choose BIN BATOOTA</h3>
            <ul>
              <li>Proven track record with major Abu Dhabi institutions</li>
              <li>Strong airline and hotel partnerships for better value</li>
              <li>Dedicated corporate desk and after-hours support</li>
              <li>Technology-driven reservations with a human touch</li>
            </ul>
          </div>
        </div>
      </Section>

      <Section id="destinations" tone="muted" title="Popular destinations">
        <div className="destinations-grid">
          {destinations.map((d) => (
            <DestinationCard
              key={d.name}
              href={d.href}
              name={d.name}
              imageSrc={d.imageSrc}
              imageAlt={d.imageAlt}
            />
          ))}
        </div>
        <p style={{ marginTop: "1.25rem", textAlign: "left" }}>
          <Link href="/holiday-package" className="link">
            Explore more destinations →
          </Link>
        </p>
      </Section>

      <FeatureGrid
        id="key-offerings"
        title="Our service"
        subtitle="Comprehensive travel solutions for enterprises, governments, and individuals."
        items={[
          {
            title: "Airline Tickets",
            description:
              "Book flights to destinations worldwide with competitive rates and flexible options.",
            href: "/contact"
          },
          {
            title: "Hotel Booking",
            description:
              "Reserve accommodations ranging from budget hotels to luxury resorts tailored to your needs.",
            href: "/contact"
          },
          {
            title: "UAE Tourist Visa",
            description:
              "Assistance with UAE tourist visa applications for individuals, families, and groups.",
            href: "/visa-insurance"
          },
          {
            title: "Travel Insurance",
            description:
              "Comprehensive travel insurance coverage for peace of mind during your journeys.",
            href: "/visa-insurance"
          },
          {
            title: "Transportation",
            description:
              "Arranged ground transportation including transfers, car rentals, and more.",
            href: "/contact"
          },
          {
            title: "Airport Meet and Assist Services",
            description:
              "Personalized meet and greet services at airports for a smooth travel experience.",
            href: "/contact"
          }
        ]}
      />

      <Section
        id="corporate-trust"
        tone="muted"
        title="Trusted by leading institutions."
        subtitle="Long-standing relationships across energy, government, healthcare, education, and construction."
      >
        <p className="muted">
          Our clientele includes prominent organizations such as ADNOC, ADIA, major
          ministries, health institutions, construction leaders, and educational
          entities in the UAE. We understand the pace, compliance needs, and service
          expectations of high-performing organizations.
        </p>
        <p style={{ marginTop: "1rem" }}>
          <Link href="/contact" className="link">Get in touch →</Link>
        </p>
      </Section>

      <CtaStrip
        title="Ready to plan your next trip?"
        subtitle="Our team is here to help with corporate travel, holidays, visas, and more."
        href="/contact"
        label="Contact us today"
      />
    </>
  );
}
