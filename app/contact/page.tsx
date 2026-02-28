import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact | BIN BATOOTA TRAVEL & TOURISM",
  description:
    "Get in touch with BIN BATOOTA in Abu Dhabi. Main office on Khalifa Street. Sunday–Thursday 08:00–19:30, Saturday 08:00–13:00 & 16:30–19:00."
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Contact Us"
        subtitle="Get in touch with us for all your travel needs."
        compact
        subtitleClassName="subtitle-shift-right"
      />

      <Section id="locations" title="Our Locations" subtitle="Visit us or get in touch—we’re here to help.">
        <div className="page-content-grid">
          <div className="content">
            <div className="content-block">
              <h3 className="content-block-title">Main Office</h3>
              <div className="content-block-body">
                <p>
                  Khalifa Street,
                  <br />
                  Adjacent to National Bank of Abu Dhabi Tower,
                  <br />
                  Abu Dhabi, United Arab Emirates
                </p>
                <p style={{ marginBottom: 0, fontSize: "0.9rem", color: "var(--text-muted)" }}>
                  Within city limits • Easy to reach
                </p>
              </div>
            </div>
          </div>
          <aside className="sidebar-card">
            <h3>Working hours</h3>
            <p><strong>Sunday – Thursday</strong><br /><span style={{whiteSpace: "nowrap"}}>08:00 AM – 07:30 PM</span></p>
            <p style={{ marginTop: "0.6rem" }}>
              <strong>Saturday</strong><br />
              <span style={{whiteSpace: "nowrap"}}>08:00 AM – 01:00 PM</span><br />
              <span style={{whiteSpace: "nowrap"}}>04:30 PM – 07:00 PM</span>
            </p>
          </aside>
        </div>
      </Section>

      <Section id="enquiry" tone="muted" title="Send us a message">
        <p className="muted" style={{ marginBottom: "0.5rem" }}>
          Use the form below for general enquiries, corporate travel proposals, or to get a quote for holidays, visas, or attractions.
        </p>
        <p className="muted" style={{ marginBottom: "1.25rem", fontSize: "0.9rem" }}>
          We typically respond within 24 hours during business days.
        </p>
        <ContactForm />
      </Section>
    </>
  );
}
