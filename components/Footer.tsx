import Link from "next/link";
import Image from "next/image";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/about-us", label: "About Us" },
  { href: "/corporate-travel", label: "Corporate Travel" },
  { href: "/holiday-package", label: "Holiday Package" },
  { href: "/visa-insurance", label: "Visa & Insurance" },
  { href: "/contact", label: "Contact" },
];

const services = [
  { href: "/corporate-travel", label: "Corporate Travel Management" },
  { href: "/holiday-package", label: "Holiday Packages" },
  { href: "/visa-insurance", label: "Visa & Travel Insurance" },
];

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div className="footer-col footer-brand-col">
          <Link href="/" className="footer-logo">
            <Image
              src="/images/logo.png"
              alt="BIN BATOOTA TRAVEL & TOURISM"
              width={160}
              height={44}
              className="footer-logo-img"
            />
          </Link>
          <p className="footer-tagline">
            Your trusted travel partner since 1976. Corporate and leisure travel from Abu Dhabi.
          </p>
          <div className="footer-address">
            <p className="footer-address-title">Main Office</p>
            <p className="footer-text">
              Al Manara Pharmacy Building, Khalifa Street,
              <br />
              Adjacent to National Bank of Abu Dhabi Tower,
              <br />
              Abu Dhabi, United Arab Emirates
            </p>
            <p className="footer-text">
              Office: 02 6262100 | Fax: 02 6260226 | PO Box: 7223
            </p>
          </div>
        </div>

        <div className="footer-col">
          <h4 className="footer-heading">Quick Links</h4>
          <ul className="footer-links">
            {quickLinks.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="footer-link">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-col">
          <h4 className="footer-heading">Services</h4>
          <ul className="footer-links">
            {services.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="footer-link">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-col">
          <h4 className="footer-heading">Working Hours</h4>
          <ul className="footer-hours">
            <li>
              <span className="footer-hours-days">Sunday – Thursday</span>
              <span className="footer-hours-time">08:00 a.m – 07:30 p.m</span>
            </li>
            <li>
              <span className="footer-hours-days">Saturday</span>
              <span className="footer-hours-time">08:00 a.m – 01:00 p.m &amp; 04:30 p.m – 07:00 p.m</span>
            </li>
          </ul>
          <p className="footer-badge">IATA Accredited</p>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <span className="footer-copy">
            © {new Date().getFullYear()} BIN BATOOTA TRAVEL &amp; TOURISM. All rights reserved.
          </span>
          <span className="footer-bottom-note">
            Corporate &amp; leisure travel specialists • UAE
          </span>
        </div>
      </div>
    </footer>
  );
}
