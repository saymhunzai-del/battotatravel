import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { ContentBlock } from "@/components/ContentBlock";
import { CtaStrip } from "@/components/CtaStrip";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us | BIN BATOOTA TRAVEL & TOURISM",
  description:
    "Established in 1976, BIN BATOOTA is a UAE National–owned travel and tourism company specializing in adventure, corporate, and leisure travel from Abu Dhabi."
};

export default function AboutUsPage() {
  return (
    <>
      <PageHero
        title="About Bin Batoota Travel"
        subtitle="Trusted Travel Partner Since 1976."
        primaryCta={{ href: "/contact", label: "Get in touch" }}
        secondaryCta={{ href: "/corporate-travel", label: "Corporate solutions" }}
        compact
      />

      <Section
        id="who-we-are"
        title="Who We Are"
        subtitle="Sole proprietorship owned by a UAE National, operating from the heart of Abu Dhabi."
      >
        <div className="content">
          <p>
            BIN BATOOTA TRAVEL & TOURISM was established in 1976. Our remarkable
            performance over the years has earned a reputation for exemplary travel
            and tourism services. We specialize in adventure travel and, with a team
            of dedicated, professional personnel, provide recreational and business
            travelers with proficient service and consultation.
          </p>
        </div>
      </Section>

      <Section id="location" tone="muted" title="Our Locations">
        <div className="grid two-columns">
          <ContentBlock title="Main Office">
            <p>
              Our office is within the city limits of <strong>Al Manara Pharmacy
              Building, Khalifa Street</strong>, adjacent to the National Bank of
              Abu Dhabi Tower, Abu Dhabi, United Arab Emirates.
            </p>
          </ContentBlock>
          <ContentBlock title="Implant Office">
            <p>
              An implant office is situated at the <strong>Department of Transport
              (D.O.T.)</strong>, facilitating their travel requirements with
              on-site support.
            </p>
          </ContentBlock>
        </div>
      </Section>

      <Section
        id="hours"
        title="Working Hours"
        subtitle="We are here when you need us."
      >
        <ul className="list-check">
          <li><strong>Sunday – Thursday:</strong> 08:00 a.m – 07:30 p.m</li>
          <li><strong>Saturday:</strong> 08:00 a.m – 01:00 p.m and 04:30 p.m – 07:00 p.m</li>
        </ul>
      </Section>

      <Section
        id="mission"
        tone="muted"
        title="Our Mission"
        subtitle="Internally we intend to create and nurture a healthy, respectful, and enjoyable environment."
      >
        <div className="content">
          <p>
            Our employees are fairly compensated and encouraged to respect the
            customer and the quality of service we provide. Follow-up is mandatory
            to ensure customer satisfaction and to implement improvements as
            recommended by our customers. We seek fair and responsible profit—enough
            to keep the company financially healthy for the short and long term and
            to fairly remunerate employees for their work and effort.
          </p>
        </div>
      </Section>

      <Section
        id="associates"
        title="Our Team"
        subtitle="Highly trained personnel, ready to cater to your needs with integrity and prompt attention."
      >
        <div className="content">
          <p>
            At BIN BATOOTA we have highly trained personnel to manage your business,
            available and ready to cater to clients’ needs. Arrangements are
            tailored to suit business and vacation objectives, personal interests,
            and budget concerns. Our proficient personnel extend services with
            integrity and prompt attention to their clientele—whether a group or an
            individual. They are masters of their trade, each bringing a unique set
            of experience that adds value to the traveler’s overall experience. We
            encourage our personnel to constantly attend training programs to
            further enhance their expertise.
          </p>
          <p>
            <Link href="/contact" className="link">Speak with a consultant →</Link>
          </p>
        </div>
      </Section>

      <Section
        id="technology"
        title="Technology & Alliances"
        subtitle="Strategic partnerships for your benefit."
      >
        <div className="grid two-columns">
          <ContentBlock title="Strategic Alliances">
            <p>
              BIN BATOOTA is an <strong>accredited IATA member</strong>. Alliances
              with over 100 airlines and numerous hotels have been established
              through years of excellent affinity and good communication, enabling
              us to secure the best value and availability for you.
            </p>
          </ContentBlock>
        </div>
      </Section>

      <CtaStrip
        title="Let’s Work Together"
        subtitle="Whether you need corporate travel solutions or a bespoke holiday, we’re here to help."
        href="/contact"
        label="Get in touch"
      />
    </>
  );
}
