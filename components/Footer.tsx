import Link from "next/link";
import { COMPANY, NAV, TEAM } from "@/data/site";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap footer-grid">
        <div className="footer-col footer-brand">
          <span className="brand__mark">MITERA</span>
          <p>
            Invoerder en verdeler van premium buitenlandse vleesrassen voor
            slagers, horeca en groothandel. Terroir, traditie en vakmanschap,
            rechtstreeks van kleine familiale kwekers.
          </p>
          <div className="socials">
            <a href={COMPANY.instagram} target="_blank" rel="noopener noreferrer">
              Instagram
            </a>
            <a href={COMPANY.facebook} target="_blank" rel="noopener noreferrer">
              Facebook
            </a>
          </div>
        </div>

        <div className="footer-col">
          <span className="footer-heading">Assortiment</span>
          <ul>
            {NAV.filter((n) => n.href !== "/").map((item) => (
              <li key={item.href}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-col">
          <span className="footer-heading">Contact</span>
          <ul className="contact-list">
            <li>{COMPANY.legalName}</li>
            <li>{COMPANY.addressLine1}</li>
            <li>{COMPANY.addressLine2}</li>
            <li>BTW {COMPANY.vat}</li>
            <li>
              <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>
            </li>
            <li>
              <a href={`tel:${COMPANY.phone}`}>{COMPANY.phoneDisplay}</a>
            </li>
          </ul>
        </div>

        <div className="footer-col">
          <span className="footer-heading">Ons verkoopteam</span>
          <ul className="contact-list">
            {TEAM.filter((t) => t.role !== "Zaakvoerder" && t.role !== "Aankoop & logistiek").map((t) => (
              <li key={t.email}>
                {t.name} —{" "}
                <a href={`tel:${t.phone.replace(/\s/g, "")}`}>{t.phone}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="wrap footer-bottom">
        <span>© {new Date().getFullYear()} Mitera bvba — Alle rechten voorbehouden.</span>
        <span className="footer-bottom__note">Uitsluitend B2B — slagers, horeca &amp; groothandel</span>
      </div>
    </footer>
  );
}
