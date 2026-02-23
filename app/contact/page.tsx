import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact | BIN BATOOTA TRAVEL & TOURISM",
  description:
    "Get in touch with BIN BATOOTA in Abu Dhabi. Main office at Al Manara Pharmacy Building, Khalifa Street. Sunday–Thursday 08:00–19:30, Saturday 08:00–13:00 & 16:30–19:00."
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Contact us"
        compact
      />

      <Section id="locations" title="Our locations" subtitle="Visit us or get in touch—we’re here to help.">
        <div className="page-content-grid">
          <div className="content">
            <div className="content-block">
              <h3 className="content-block-title">Main office</h3>
              <div className="content-block-body">
                <p>
                  Al Manara Pharmacy Building, Khalifa Street,
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
            <div className="content-block">
              <h3 className="content-block-title">Implant office</h3>
              <div className="content-block-body">
                <p style={{ marginBottom: 0 }}>
                  Department of Transport (D.O.T.)
                  <br />
                  On-site support for DOT travel requirements
                </p>
              </div>
            </div>
          </div>
          <aside className="sidebar-card">
            <h3>Working hours</h3>
            <p><strong>Sunday – Thursday</strong><br />08:00 a.m – 07:30 p.m</p>
            <p style={{ marginTop: "0.6rem" }}>
              <strong>Saturday</strong><br />
              08:00 a.m – 01:00 p.m<br />
              04:30 p.m – 07:00 p.m
            </p>
          </aside>
        </div>
      </Section>

      <Section id="enquiry" tone="muted" title="Send us a message">
        <p className="muted" style={{ marginBottom: "0.5rem" }}>
          Use the form below for general enquiries, corporate travel proposals,
          holiday quotes, visa and insurance requests, or attraction bookings.
        </p>
        <p className="muted" style={{ marginBottom: "1.25rem", fontSize: "0.9rem" }}>
          We typically respond within 24 hours during business days.
        </p>
        <ContactForm />
      </Section>
    </>
  );
}
