import type { Metadata } from "next";
import Link from "next/link";
import "./page.css";

export const metadata: Metadata = {
  title: "Kalf",
  description:
    "Klassiek Italiaans kalfsvlees en de zeldzame Rubia Ternera uit Spanje — mals, verfijnd en met karakter.",
};

export default function KalfPage() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <span className="eyebrow">Kalf</span>
          <h1 className="page-hero__title">
            Verfijning in zijn puurste vorm.
          </h1>
          <p className="page-hero__lead">
            Kalfsvlees vraagt om geduld en vakmanschap. Wij selecteren twee
            uitzonderlijke herkomsten: de klassieke Italiaanse traditie, en de
            zeldzame Rubia Ternera uit Spanje.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="two-col">
            <div className="content-card">
              <span className="tag-outline">Italië</span>
              <h3>Italiaans kalfsvlees</h3>
              <p>
                Ons klassieke kalfsvlees komt uit Italië, waar het kalf op
                traditionele wijze en met de grootste zorg wordt opgefokt.
                Deze manier van opgroeien geeft het vlees zijn kenmerkende,
                lichtroze kleur en een fijne, delicate structuur.
              </p>
              <p>
                Het is mals, subtiel van smaak en bijzonder veelzijdig — van
                een klassieke ossobuco tot de meest verfijnde vitello
                tonnato. Wij bieden zowel de klassieke grote delen als een
                ruime selectie deelstukken aan, inclusief specialiteiten zoals
                kalfszwezeriken en kalfswangen.
              </p>
            </div>
            <div className="content-card">
              <span className="tag-outline">Spanje</span>
              <h3>Rubia Ternera</h3>
              <p>
                Rubia Ternera is het kalfsvlees van het Rubia Gallega-ras.
                Deze kalveren worden pas rond de leeftijd van 10 maanden
                geslacht, waardoor het vlees al een lichtrode kleur heeft in
                plaats van de typische bleke kleur van jonge kalveren.
              </p>
              <p>
                Het voordeel is dat dit vlees ook al wat vetaanzet heeft,
                waardoor het niet enkel zeer mals, maar ook heel smaakvol is.
                Wij kozen bewust voor de top binnen dit ras: de Ternera
                Suprema.
              </p>
            </div>
          </div>

          <div className="cta-inline-wrap">
            <div className="cta-inline">
              <p>
                Interesse in ons kalfsvlees? Ons verkoopteam informeert u
                graag over de mogelijkheden.
              </p>
              <Link href="/contact" className="btn btn-solid">
                Neem contact op
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
