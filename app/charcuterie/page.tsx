import type { Metadata } from "next";
import Link from "next/link";
import "./page.css";

export const metadata: Metadata = {
  title: "Charcuterie",
  description:
    "Iberico-hammen, chorizo en salchichón uit Spanje, Txogitxu-charcuterie uit Baskenland en gedroogde specialiteiten van rund en Wagyu.",
};

const CATEGORIES = [
  {
    tag: "Spanje",
    title: "Ibérico charcuterie",
    text: [
      "De kroon op het Ibérico-varken: gedroogde hammen tot 36 maanden gerijpt, van Bellota (100% en 50%) tot Cebo de Campo en Cebo. Elke ham draagt de smaak van de eikels en de dehesa waarin het dier opgroeide.",
      "Daarnaast bieden we een ruime selectie chorizo, salchichón, lomo en sobrasado aan — telkens met dezelfde herkomstgarantie.",
    ],
  },
  {
    tag: "Baskenland",
    title: "Txogitxu charcuterie",
    text: [
      "Van de hand van de gerenommeerde Txogitxu-slagerij: cecina de vaca (gedroogd rundvlees), Baskische txistorra-worst van rund en varken, en gezouten en gedroogde entrecote.",
      "Stuk voor stuk specialiteiten die hun weg vonden naar de beste gastronomische adressen van Europa.",
    ],
  },
  {
    tag: "Mediterraan & Alpien",
    title: "Gedroogde specialiteiten",
    text: [
      "Een selectie bijzondere, gedroogde vleesspecialiteiten: gepekelde en gedroogde Alpenrund-entrecote en -rump, Mediterrane brisket, Presa Duroc, en gedroogde Wagyu-picanha en -bovenbil.",
      "Kleine oplages, grote smaakintensiteit — ideaal voor een verfijnde snijplank of als signatuurgerecht.",
    ],
  },
];

export default function CharcuteriePage() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <span className="eyebrow">Charcuterie</span>
          <h1 className="page-hero__title">
            Traditie, geduld en smaakintensiteit.
          </h1>
          <p className="page-hero__lead">
            Naast vers vlees brengt Mitera een select gamma charcuterie uit
            Spanje en het Baskenland — telkens met dezelfde herkomstgarantie
            als onze verse rassen.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="wrap charcuterie-list">
          {CATEGORIES.map((cat) => (
            <article className="charcuterie-item" key={cat.title}>
              <div className="charcuterie-item__head">
                <span className="tag-outline">{cat.tag}</span>
                <h2>{cat.title}</h2>
              </div>
              <div className="charcuterie-item__body">
                {cat.text.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </article>
          ))}

          <div className="cta-inline">
            <p>
              Interesse in ons charcuterie-aanbod? Ons verkoopteam informeert
              u graag over de mogelijkheden.
            </p>
            <Link href="/contact" className="btn btn-solid">
              Neem contact op
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
