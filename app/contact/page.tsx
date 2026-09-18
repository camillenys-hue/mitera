import type { Metadata } from "next";
import { COMPANY, TEAM } from "@/data/site";
import ContactForm from "@/components/ContactForm";
import "./page.css";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Neem contact op met Mitera — Nederweg 23, 9521 Letterhoutem. Bel, mail of vul het contactformulier in.",
};

export default function ContactPage() {
  const mapQuery = encodeURIComponent(
    `${COMPANY.legalName}, ${COMPANY.addressLine1}, ${COMPANY.addressLine2}`
  );

  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <span className="eyebrow">Contact</span>
          <h1 className="page-hero__title">Laten we kennismaken.</h1>
          <p className="page-hero__lead">
            Slager, horecazaak of groothandel? Neem vrijblijvend contact op —
            we informeren u graag over ons assortiment en de mogelijkheden.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="wrap contact-layout">
          <div className="contact-form-col">
            <h2>Stuur ons een bericht</h2>
            <ContactForm />
          </div>

          <div className="contact-info-col">
            <div className="info-block">
              <span className="footer-heading">Adres</span>
              <p className="tight">
                {COMPANY.legalName}
                <br />
                {COMPANY.addressLine1}
                <br />
                {COMPANY.addressLine2}
                <br />
                BTW {COMPANY.vat}
              </p>
            </div>
            <div className="info-block">
              <span className="footer-heading">Rechtstreeks</span>
              <p className="tight">
                <a href={`tel:${COMPANY.phone}`}>{COMPANY.phoneDisplay}</a>
                <br />
                <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>
              </p>
            </div>
            <div className="info-block">
              <span className="footer-heading">Social</span>
              <p className="tight">
                <a href={COMPANY.instagram} target="_blank" rel="noopener noreferrer">
                  Instagram
                </a>
                <br />
                <a href={COMPANY.facebook} target="_blank" rel="noopener noreferrer">
                  Facebook
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      <hr className="divider" />

      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow">Ons verkoopteam</span>
            <h2>Persoonlijk contact, van dag één.</h2>
          </div>
          <div className="team-grid">
            {TEAM.map((member) => (
              <div className="team-card" key={member.email}>
                <h3>{member.name}</h3>
                <span className="team-card__role">{member.role}</span>
                <a href={`tel:${member.phone.replace(/\s/g, "")}`}>{member.phone}</a>
                <a href={`mailto:${member.email}`}>{member.email}</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-tight">
        <div className="wrap">
          <div className="map-frame">
            <iframe
              title="Mitera op de kaart"
              src={`https://www.google.com/maps?q=${mapQuery}&output=embed`}
              width="100%"
              height="380"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </>
  );
}
