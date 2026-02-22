import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { ContentBlock } from "@/components/ContentBlock";
import { Card } from "@/components/Card";
import { CtaStrip } from "@/components/CtaStrip";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Attractions | Bin Batoota Travel & Tourism",
  description:
    "Attractions, tours, and experiences in the UAE and worldwide. Adventure travel and curated experiences for individuals and groups."
};

export default function AttractionsPage() {
  return (
    <>
      <PageHero
        eyebrow="Experiences & tours"
        title="Attractions & Experiences"
        subtitle="Tours and experiences tailored to your interests."
        primaryCta={{ href: "/contact", label: "Plan an experience" }}
        secondaryCta={{ href: "/holiday-package", label: "Holiday packages" }}
        compact
      />

      <Section
        id="overview"
        title="What we offer"
        subtitle="Adventure travel and curated experiences for individuals and groups."
      >
        <div className="content">
          <p>
            Bin Batoota specializes in adventure travel alongside classic leisure
            offerings. We work with trusted partners to provide access to
            attractions, guided tours, desert safaris, cultural experiences, and
            activities that add value to your trip. Arrangements are tailored to
            suit personal interests, group size, and budget.
          </p>
        </div>
      </Section>

      <Section id="categories" tone="muted" title="Types of experiences">
        <div className="feature-grid">
          <Card
            title="Desert & outdoor"
            description="Desert safaris, dune bashing, camping, and outdoor adventures in the UAE and beyond."
            href="/contact"
            ctaLabel="Enquire"
          />
          <Card
            title="Cultural & heritage"
            description="Museums, heritage sites, and cultural tours for a deeper understanding of your destination."
            href="/contact"
            ctaLabel="Enquire"
          />
          <Card
            title="City & sightseeing"
            description="City tours, landmark visits, and sightseeing packages for individuals and groups."
            href="/contact"
            ctaLabel="Enquire"
          />
          <Card
            title="Group & corporate"
            description="Team-building activities, incentive trips, and group experiences tailored to your objectives."
            href="/corporate-travel"
            ctaLabel="Corporate travel"
          />
        </div>
      </Section>

      <Section id="transport" title="Transportation">
        <ContentBlock title="Getting you there">
          <p>
            We provide transportation at very competitive rates. We arrange and
            provide cars and coaches as per clients’ requests, using quality
            transport and ensuring good value for money. Whether you need a
            transfer, a day vehicle, or a coach for a group, we can organize it as
            part of your attraction or tour package.
          </p>
          <p>
            <Link href="/contact" className="link">Request transportation →</Link>
          </p>
        </ContentBlock>
      </Section>

      <CtaStrip
        title="Plan your next experience"
        subtitle="Desert safaris, cultural tours, and group activities—tailored to you."
        href="/contact"
        label="Get in touch"
      />
    </>
  );
}
