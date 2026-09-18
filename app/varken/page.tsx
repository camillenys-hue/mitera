import type { Metadata } from "next";
import Link from "next/link";
import "./page.css";

export const metadata: Metadata = {
  title: "Varken",
  description:
    "Ibérico varkensvlees uit Zuid-Spanje — vrije uitloop, eikels en een unieke, nootachtige smaak.",
};

export default function VarkenPage() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <span className="eyebrow">Varken — Spanje</span>
          <h1 className="page-hero__title">Het beroemde Ibérico-varken.</h1>
          <p className="page-hero__lead">
            Sappig, smakelijk en met een unieke, nootachtige smaak. Wij voeren
            het vlees van het Ibérico-varken rechtstreeks uit Zuid-Spanje in.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="content-block">
            <span className="eyebrow">Herkomst</span>
            <h2>Van de dehesa naar uw slagerij</h2>
            <p>
              Het Ibérico-varkensvlees is afkomstig uit Spanje, en is het
              vlees van wat we in de volksmond &ldquo;pata negra&rdquo;
              (zwartpoot) noemen. Deze varkens worden voornamelijk gekweekt in
              het zuiden van Spanje, in de uitgestrekte dehesa&rsquo;s — de
              open eikenbossavannes van onder meer de streek rond Salamanca.
            </p>
            <p>
              De voeding en de vrije uitloop geven dit vlees een unieke
              smaak. In de lente krijgen de dieren fris gras te eten, in de
              zomer een mengeling van gerst en tarwe, en in de herfst eikels
              en noten — de topkwaliteit Bellota zelfs zowat uitsluitend
              eikels, tot 10 kg per dag. Hierdoor krijgt het vlees een
              nootachtige smaak, en is het mooi met vet doorweven. Vers
              Ibérico-varkensvlees is een echte delicatesse.
            </p>
          </div>

          <div className="two-col cuts-grid">
            <div className="content-card">
              <h3>Verse deelstukken</h3>
              <p>
                Wij kunnen zowat alle deelstukken van het Ibérico-varken
                aanbieden: kroontjes, haasjes, lende met of zonder been,
                secreto, pluma, presa, wangetjes en meer.
              </p>
            </div>
            <div className="content-card">
              <h3>Gedroogde specialiteiten</h3>
              <p>
                Ook de beroemde Ibérico gedroogde ham, tot 36 maanden
                gerijpt, en een selectie chorizo, lomo en salchichón behoren
                tot ons assortiment. Ontdek deze specialiteiten op onze{" "}
                <Link href="/charcuterie">charcuterie-pagina</Link>.
              </p>
            </div>
          </div>

          <div className="cta-inline-wrap">
            <div className="cta-inline">
              <p>
                Interesse in ons Ibérico-assortiment? Ons verkoopteam
                informeert u graag over de mogelijkheden.
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
