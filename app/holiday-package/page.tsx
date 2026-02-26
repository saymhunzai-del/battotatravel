import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { ContentBlock } from "@/components/ContentBlock";
import { Card } from "@/components/Card";
import { PackageCard } from "@/components/PackageCard";
import { getPackages } from "@/lib/packages";
import { CtaStrip } from "@/components/CtaStrip";

export const metadata: Metadata = {
  title: "Holiday Package | BIN BATOOTA TRAVEL & TOURISM",
  description:
    "Curated holiday packages and hotel stays worldwide. Quality, excellence, and the best possible rates for individuals and groups."
};

export default async function HolidayPackagePage() {
  const featuredPackages = await getPackages();
  return (
    <>
      <PageHero
        title="Holiday Packages & Getaways"
        subtitle="Quality packages and competitive rates for individuals and groups."
        primaryCta={{ href: "/contact", label: "Plan your holiday" }}
        secondaryCta={{ href: "/visa-insurance", label: "Visa & insurance" }}
        compact
      />

      <Section
        id="overview"
        title="Tailored To You"
        subtitle="Individual or group bookings in any hotel category, with value-added benefits and amenities."
      >
        <div className="content">
          <p>
            Our team negotiates the best possible rates and provides the finest
            hotels in accordance with our clients’ preferences. Owing to our very
            good connections with hotels in almost every part of the globe, we are
            always in a position to offer very lucrative discounted rates. We ensure
            that our prices meet our clients’ budget whilst enhancing the trip with
            value-added benefits and amenities.
          </p>
        </div>
      </Section>

      <Section id="packages" tone="muted" title="Holiday Packages">
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
          <Link href="/contact" className="btn primary">
            Get a Quote
          </Link>
        </p>
      </Section>

      <Section id="offerings" title="What We Offer">
        <div className="feature-grid">
          <Card
            title="Hotel Packages"
            description="Individual or group bookings in any hotel of any category, provided instantly with competitive rates."
          />
          <Card
            title="Flights + Stay"
            description="Combined air and accommodation packages through Etihad Holidays, Emirates Holidays, and GTA."
            href="/contact"
            ctaLabel="Enquire"
          />
          <Card
            title="Adventure & leisure"
            description="BIN BATOOTA specializes in adventure travel alongside classic leisure and beach getaways."
            href="/attractions"
            ctaLabel="Explore experiences"
          />
          <Card
            title="Groups & incentives"
            description="Tailored group itineraries and incentive travel for organizations and events."
            href="/contact"
            ctaLabel="Get a quote"
          />
        </div>
      </Section>

      <Section id="marketing" title="How We Reach You">
        <ContentBlock title="OUR APPROACH">
          <p>
            Our marketing strategy is based mainly on ensuring customers’
            recognition of our existence and the services we fulfill. We make the
            right information available to the right target customers through a
            market penetration strategy that keeps us visible and appreciated in the
            tourism industry. For over a decade we have participated in national-
            level travel trade fairs and exhibitions—effective platforms to interact
            with clients and travel partners and to reiterate our presence and
            prominence.
          </p>
        </ContentBlock>
      </Section>

      <Section tone="muted" title="Ready To Plan?">
        <p className="muted">
          Contact our team for a personalized quote. We’ll match your destination,
          dates, and budget with the right package.
        </p>
        <p style={{ marginTop: "1rem" }}>
          <Link href="/contact" className="btn primary">Get a Quote</Link>
        </p>
      </Section>

      <CtaStrip
        title="Start your holiday with BIN BATOOTA"
        subtitle="Personalized quotes, competitive rates, and seamless booking."
        href="/contact"
        label="Get a Quote"
      />
    </>
  );
}
