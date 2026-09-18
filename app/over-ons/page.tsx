import type { Metadata } from "next";
import Link from "next/link";
import { TEAM } from "@/data/site";
import "./page.css";

export const metadata: Metadata = {
  title: "Over ons",
  description:
    "Mitera importeert en verdeelt premium buitenlandse vleesrassen, rechtstreeks van kleine familiale kwekers, voor slagers, horeca en groothandel.",
};

export default function OverOnsPage() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <span className="eyebrow">Over ons</span>
          <h1 className="page-hero__title">
            Een correct product, voor de juiste afnemer.
          </h1>
          <p className="page-hero__lead">
            Mitera is gespecialiseerd in de invoer en distributie van
            buitenlandse vleesrassen van de hoogste kwaliteit — voor slagers,
            horeca en groothandel.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="content-block">
            <span className="eyebrow">Ons verhaal</span>
            <h2>Terroir is geen trend. Het is ons vertrekpunt.</h2>
            <p>
              Wij kopen het vlees van bijna veertig rassen rechtstreeks aan in
              de streek waar elk specifiek ras vandaan komt, en werken enkel
              met kleine, familiale ondernemingen — waar traditie, zorg voor
              kwaliteit en trots op het geleverde product vooropstaan.
            </p>
            <p>
              Het klimaat, de bodem, het seizoen en de kweekwijze hebben
              stuk voor stuk invloed op het vlees. Het is de lokale setting
              die het specifieke karakter van elk ras bepaalt — u proeft het
              stukje land waar het dier het levenslicht zag. Dat staat in
              scherp contrast met grootschalige productie, die eenvormigheid
              en smaakvervlakking met zich meebrengt. Terroir gaat net volop
              voor smaak.
            </p>
            <p>
              We zoeken voortdurend naar de allerbeste kwaliteit in elk
              Europees land, en bouwen partnerships met lokale producenten om
              een product te garanderen dat uitblinkt in versheid, kwaliteit
              en smaak.
            </p>
          </div>
        </div>
      </section>

      <hr className="divider" />

      <section className="section">
        <div className="wrap">
          <div className="two-col">
            <div className="content-card">
              <h3>Kwaliteit, geen prijsslag</h3>
              <p>
                Wij willen de referentie zijn voor premium buitenlands
                Europees vlees voor horeca, slagers en groothandel — bekend
                voor service en kwaliteit. We doen niet mee aan prijsslagen:
                minder vlees, maar van betere kwaliteit. Geen massaproduct,
                maar een niche die we met evenveel zorg leveren als we ze
                inkopen.
              </p>
            </div>
            <div className="content-card">
              <h3>Zelf aan de deur</h3>
              <p>
                We houden onze band met de klant persoonlijk: onze eigen
                mensen doen de leveringen, en onderhouden zo het contact met
                zowel onze klanten als onze leveranciers. Diezelfde
                persoonlijke aanpak hanteren we in onze samenwerking met de
                kleine, familiale kwekers waar we al jarenlang mee
                samenwerken.
              </p>
            </div>
          </div>
        </div>
      </section>

      <hr className="divider" />

      <section className="section">
        <div className="wrap">
          <div className="content-block">
            <span className="eyebrow">De kunst van het rijpen</span>
            <h2>Waarom wij op rijping inzetten</h2>
            <p>
              Rijpen kan enkel perfect lukken wanneer je met kwaliteitsvlees
              werkt. Door te rijpen wordt het vlees op een natuurlijke manier
              malser en wint het aan smaakintensiteit — hoe langer dit duurt,
              hoe groter dat effect. Mager vlees bevat ongeveer 78% vocht;
              door het indrogen worden zowel het vlees als de smaak
              geconcentreerd, en ook de smaak van de vetten wordt intenser.
            </p>
            <p>
              Ons meest gegeerde product is dan ook de volledige rug met
              been, die door vele slagers zelf verder wordt afgerijpt. Voor
              wie geen eigen rijpingskast heeft, bieden we een aantal rassen
              ook voorgerijpt aan.
            </p>
          </div>
        </div>
      </section>

      <hr className="divider" />

      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow">Ons team</span>
            <h2>De mensen achter Mitera</h2>
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

      <section className="cta-band grain">
        <div className="wrap cta-band__inner">
          <h2>Klaar om samen te werken?</h2>
          <p>
            Wij informeren u graag over ons volledige assortiment en de
            mogelijkheden voor uw zaak.
          </p>
          <Link href="/contact" className="btn btn-solid">
            Neem contact op
          </Link>
        </div>
      </section>
    </>
  );
}
