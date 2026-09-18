import Link from "next/link";
import { COUNTRIES, getBreedCount } from "@/data/rund";
import "./page.css";

const CATEGORIES = [
  {
    href: "/rund",
    n: "01",
    title: "Rund",
    text: `${getBreedCount()} rassen uit ${COUNTRIES.length} landen — van Simmental tot Wagyu A5.`,
  },
  {
    href: "/kalf",
    n: "02",
    title: "Kalf",
    text: "Klassiek Italiaans kalfsvlees en de zeldzame Rubia Ternera uit Spanje.",
  },
  {
    href: "/varken",
    n: "03",
    title: "Varken",
    text: "Ibérico varkensvlees, rechtstreeks uit de dehesa's van Zuid-Spanje.",
  },
  {
    href: "/lam",
    n: "04",
    title: "Lam",
    text: "Een seizoensgebonden selectie, enkel beschikbaar op aanvraag.",
  },
  {
    href: "/charcuterie",
    n: "05",
    title: "Charcuterie",
    text: "Iberico-hammen, worst en gedroogd vlees uit Spanje en Baskenland.",
  },
];

export default function HomePage() {
  return (
    <>
      <section className="hero grain">
        <div className="wrap hero__inner">
          <span className="eyebrow">Invoerder & verdeler van premium vleesrassen</span>
          <h1>
            Vlees met een <em>verhaal</em>.
            <br />
            Rechtstreeks van de streek.
          </h1>
          <p className="hero__lead">
            Mitera importeert en verdeelt buitenlandse vleesrassen van de hoogste
            kwaliteit, rechtstreeks bij kleine familiale kwekers in heel Europa.
            Uitsluitend voor slagers, horeca en groothandel.
          </p>
          <div className="hero__cta">
            <Link href="/rund" className="btn btn-solid">
              Ontdek ons aanbod
            </Link>
            <Link href="/contact" className="btn">
              Word klant
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap story">
          <div className="story__label">
            <span className="eyebrow">Ons verhaal</span>
          </div>
          <div className="story__body">
            <h2>
              Terroir is geen trend.
              <br />
              Het is ons vertrekpunt.
            </h2>
            <p>
              Het klimaat, de bodem, het seizoen en de kweekwijze bepalen de
              smaak van een rund. Daarom kopen wij rechtstreeks aan in de
              streek waar elk ras vandaan komt, en werken we uitsluitend samen
              met kleine, familiale kwekers — waar traditie, zorg voor
              kwaliteit en trots op het geleverde product vooropstaan.
            </p>
            <p>
              We zoeken voortdurend naar de beste kwaliteit in elk Europees
              land, en bouwen partnerships met lokale producenten om een
              product te garanderen dat uitblinkt in versheid, karakter en
              smaak. Geen massaproduct, maar een niche die we met evenveel
              zorg leveren als we ze inkopen.
            </p>
            <Link href="/over-ons" className="link-arrow">
              Meer over Mitera →
            </Link>
          </div>
        </div>
      </section>

      <hr className="divider" />

      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow">Ons assortiment</span>
            <h2>Vijf categorieën, één zelfde eis: karakter.</h2>
          </div>
          <div className="cat-grid">
            {CATEGORIES.map((c) => (
              <Link href={c.href} key={c.href} className="cat-card">
                <span className="cat-card__n">{c.n}</span>
                <h3>{c.title}</h3>
                <p>{c.text}</p>
                <span className="cat-card__link">Bekijken →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <hr className="divider" />

      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow">Onze bestsellers</span>
            <h2>Waar het voor ons allemaal begon.</h2>
          </div>
          <div className="feat-grid">
            <Link href="/rund/oostenrijk/simmental" className="feat-card">
              <span className="tag">Oostenrijk</span>
              <h3>Simmental</h3>
              <p>
                Onze meest gevraagde rug — een perfecte balans tussen
                toegankelijkheid en smaak, uit de Oostenrijkse Alpen.
              </p>
            </Link>
            <Link href="/rund/oostenrijk/holstein" className="feat-card">
              <span className="tag">Oostenrijk</span>
              <h3>Holstein</h3>
              <p>
                Diep, romig en boterzacht. Een klassieker in ons gamma, sterk
                dooraderd met vet en ideaal voor rijping.
              </p>
            </Link>
          </div>
        </div>
      </section>

      <section className="cta-band grain">
        <div className="wrap cta-band__inner">
          <h2>Op zoek naar een leverancier die met u meedenkt?</h2>
          <p>
            Wij leveren zelf, kennen onze klanten persoonlijk en staan voor
            een correct product aan een correcte prijs — geen prijsslagen,
            wel een langetermijnrelatie.
          </p>
          <Link href="/contact" className="btn btn-solid">
            Neem contact op
          </Link>
        </div>
      </section>
    </>
  );
}
