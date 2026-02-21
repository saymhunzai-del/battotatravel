"use client";

import { useState } from "react";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    // Simulate submit; replace with your API or form service
    await new Promise((r) => setTimeout(r, 800));
    setStatus("sent");
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
          autoComplete="name"
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
          autoComplete="email"
        />
      </div>
      <div className="form-row">
        <label htmlFor="contact-phone">Phone</label>
        <input
          id="contact-phone"
          name="phone"
          type="tel"
          placeholder="+971 50 000 0000"
          autoComplete="tel"
        />
      </div>
      <div className="form-row">
        <label htmlFor="contact-subject">Subject</label>
        <select id="contact-subject" name="subject">
          <option value="general">General enquiry</option>
          <option value="corporate">Corporate travel</option>
          <option value="holiday">Holiday package</option>
          <option value="visa">Visa & insurance</option>
          <option value="attractions">Attractions & tours</option>
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
        <p className="form-message success">Thank you. We will get back to you shortly.</p>
      )}
      {status === "error" && (
        <p className="form-message error">Something went wrong. Please try again or call us.</p>
      )}
      <button type="submit" className="btn primary" disabled={status === "sending"}>
        {status === "sending" ? "Sending…" : "Send message"}
      </button>
    </form>
  );
}
