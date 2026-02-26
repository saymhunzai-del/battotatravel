"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";

const EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!;
const EMAILJS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!;

const COMPANY_EMAIL = "batoota@batoota.ae"; // Must match {{email}} in template

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          email: COMPANY_EMAIL, // REQUIRED for {{email}}
          from_name: formData.get("name") as string,
          from_email: formData.get("email") as string,
          phone: formData.get("phone") as string,
          subject: formData.get("subject") as string,
          message: formData.get("message") as string,
        },
        EMAILJS_PUBLIC_KEY
      );

      setStatus("sent");
      form.reset();
    } catch (error) {
      console.error("EmailJS Error:", error);
      setStatus("error");
    }
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-row">
        <label htmlFor="contact-name">Full name</label>
        <input
          id="contact-name"
          name="name"
          type="text"
          required
          placeholder="Your name"
        />
      </div>

      <div className="form-row">
        <label htmlFor="contact-email">Email</label>
        <input
          id="contact-email"
          name="email"
          type="email"
          required
          placeholder="you@company.com"
        />
      </div>

      <div className="form-row">
        <label htmlFor="contact-phone">Phone</label>
        <input
          id="contact-phone"
          name="phone"
          type="tel"
          placeholder="+971 50 000 0000"
        />
      </div>

      <div className="form-row">
        <label htmlFor="contact-subject">Subject</label>
        <select id="contact-subject" name="subject">
          <option value="General Enquiry">General Enquiry</option>
          <option value="Corporate Travel">Corporate Travel</option>
          <option value="Holiday Package">Holiday Package</option>
          <option value="Visa & Insurance">Visa & Insurance</option>
          <option value="Attractions & Tours">Attractions & Tours</option>
        </select>
      </div>

      <div className="form-row">
        <label htmlFor="contact-message">Message</label>
        <textarea
          id="contact-message"
          name="message"
          required
          rows={5}
          placeholder="How can we help?"
        />
      </div>

      {status === "sent" && (
        <p className="form-message success">
          Inquiry Received. We will get back to you shortly.
        </p>
      )}

      {status === "error" && (
        <p className="form-message error">
          Something went wrong. Please try again or call us.
        </p>
      )}

      <button
        type="submit"
        className="btn primary"
        disabled={status === "sending"}
      >
        {status === "sending" ? "Sending…" : "Send message"}
      </button>
    </form>
  );
}