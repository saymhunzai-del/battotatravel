import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { ContentBlock } from "@/components/ContentBlock";
import { CtaStrip } from "@/components/CtaStrip";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Corporate Travel | BIN BATOOTA TRAVEL & TOURISM",
  description:
    "Dedicated corporate travel management: negotiated fares, worldwide ticketing, policy support, and 24/7 service for enterprises and government entities."
};

export default function CorporateTravelPage() {
  return (
    <>
      <PageHero
        title="Corporate Travel Management"
        subtitle="Corporate rates, discounts, and dedicated support."
        primaryCta={{ href: "/contact", label: "Request a proposal" }}
        secondaryCta={{ href: "/about-us", label: "Why BIN BATOOTA" }}
        compact
      />

      <Section
        id="overview"
        title="Why enterprises choose us"
        subtitle="A one-stop shop with personalized service and confidentiality."
      >
        <div className="content">
          <p>
            BIN BATOOTA provides competitive fares to all destinations and a
            one-stop shop with personalized service for all travel arrangements,
            maintaining strict confidentiality. We negotiate with various airlines
            on behalf of your company and keep you informed of the latest
            developments in special fares and promotions.
          </p>
          <p>
            Our strong working relationship with trade partners and the latest
            computer reservations technology enable us to access the most
            up-to-date information to obtain you the best value.
          </p>
        </div>
      </Section>

      <Section id="services" tone="muted" title="Scope of corporate services">
        <ul className="list-check">
          <li>Worldwide air ticketing and reservation as per your company requirements</li>
          <li>Expert advice on air travel, discounts, and business travel arrangements</li>
          <li>Enrollment of employees in frequent flyer programs with various airlines</li>
          <li>Dedicated corporate staff for corporate rates, discounts, promotional offers, and destination weather and currency information</li>
          <li>Confirmation of seats in seemingly impossible circumstances, thanks to our staff’s efficiency and healthy relationships with all airlines</li>
          <li>Timely refund of partly utilized or fully unutilized air tickets issued by us, upon your company’s request</li>
          <li>Electronic delivery of air tickets, hotel vouchers, and information, with itineraries that are clear, concise, and relevant to travelers</li>
          <li>We literally go the extra mile to assist our valued corporate clients</li>
        </ul>
      </Section>

      <Section id="clientele" tone="muted" title="Trusted by leading institutions">
        <div className="content highlight-card">
          <p className="muted" style={{ marginBottom: 0 }}>
            Our key clientele includes Abu Dhabi National Oil Company (ADNOC), Abu
            Dhabi Investment Authority (ADIA), Abu Dhabi Grammar School, Daman
            Health Insurance, Department of Transport (DOT), Fibrex Construction,
            Ministry of Education, Ministry of Culture, Ministry of Finance,
            TEKFEN Construction, TAKREER, ABB, Abu Dhabi Petroleum Ports Operating
            (IRSHAD), Millennium and Copthorne Middle East, Municipality of Abu
            Dhabi, Emirates French Hospital, National Food Products (MILCO), and
            many others.
          </p>
          <p style={{ marginTop: "1rem", marginBottom: 0 }}>
            <Link href="/contact" className="link">Discuss your corporate travel needs →</Link>
          </p>
        </div>
      </Section>

      <CtaStrip
        title="Request a corporate proposal"
        subtitle="Dedicated account management, negotiated fares, and 24/7 support for your organization."
        href="/contact"
        label="Request a proposal"
      />
    </>
  );
}
