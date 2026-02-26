import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { ContentBlock } from "@/components/ContentBlock";
import { CtaStrip } from "@/components/CtaStrip";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Visa & Insurance | BIN BATOOTA TRAVEL & TOURISM",
  description:
    "UAE tourist visa services and travel insurance for individuals and groups. Processed in line with UAE rules and regulations."
};

export default function VisaInsurancePage() {
  return (
    <>
      <PageHero
        title="Visa Services & Travel"
        subtitle="UAE visas processed in accordance with UAE law."
        primaryCta={{ href: "/contact", label: "Enquire now" }}
        secondaryCta={{ href: "/holiday-package", label: "Holiday Packages" }}
        compact
      />

      <Section
        id="visa"
        title="UAE Tourist Visas"
        subtitle="Processed and obtained as per the rules and regulations governed by UAE law."
      >
        <div className="content">
          <p>
            BIN BATOOTA provides tourist visas to the UAE upon request, at a nominal
            fee. All applications are processed and obtained in line with the rules
            and regulations governed by UAE law. Whether you are traveling for
            leisure, business, or to visit family, we can guide you through the
            requirements and timelines.
          </p>
          <p>
            <Link href="/contact" className="link">Request a visa enquiry →</Link>
          </p>
        </div>
      </Section>

      <Section
        id="insurance"
        tone="muted"
        title="Travel Insurance"
        subtitle="Authorized to vend travel insurance for groups and individuals."
      >
        <div className="content">
          <p>
            BIN BATOOTA Travels is authorized to sell travel insurance and to cater
            to groups and individuals as per their requirements. Travel insurance
            helps protect you against trip cancellation, medical emergencies,
            baggage loss, and other unforeseen events. Our team can recommend
            coverage suited to your destination and trip type.
          </p>
          <p>
            <Link href="/contact" className="link">Get an insurance quote →</Link>
          </p>
        </div>
      </Section>

      <Section id="combine" tone="muted" title="Visa, Insurance & Travel Together">
        <ContentBlock title="One Point Of Contact">
          <p>
            When you book your holiday or corporate trip with us, we can arrange
            your UAE tourist visa and travel insurance in one place—reducing
            paperwork and ensuring your documents are in order before you travel.
          </p>
        </ContentBlock>
      </Section>

      <CtaStrip
        title="Need A Visa Or Travel Insurance?"
        subtitle="We’ll guide you through requirements and get you covered."
        href="/contact"
        label="Enquire now"
      />
    </>
  );
}
