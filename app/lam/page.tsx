import type { Metadata } from "next";
import Link from "next/link";
import "./page.css";

export const metadata: Metadata = {
  title: "Lam",
  description:
    "Lamsvlees bij Mitera is een seizoensgebonden aanbod. Neem contact op voor de actuele beschikbaarheid.",
};

export default function LamPage() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <span className="eyebrow">Lam — Seizoensgebonden</span>
          <h1 className="page-hero__title">
            Een selectie die met de seizoenen meegaat.
          </h1>
          <p className="page-hero__lead">
            In tegenstelling tot onze rund-, kalfs- en varkensrassen behoort
            lamsvlees niet tot ons vaste, jaarrond assortiment. We bieden het
            enkel aan wanneer de kwaliteit op zijn best is.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="content-block">
            <span className="eyebrow">Waarom seizoensgebonden</span>
            <h2>Kwaliteit boven beschikbaarheid</h2>
            <p>
              Net zoals bij onze andere vleesrassen staat terroir voor ons
              centraal: het seizoen bepaalt mee de kwaliteit van het vlees.
              Lamsvlees is daarom bij Mitera een tijdelijke, select
              aangeboden specialiteit — voornamelijk rond het voorjaar,
              wanneer de kwaliteit traditioneel op haar hoogtepunt is.
            </p>
            <p>
              Wilt u weten of lam momenteel beschikbaar is, en welke
              herkomst we op dit moment aanbieden? Ons verkoopteam informeert
              u graag over de actuele mogelijkheden.
            </p>
          </div>

          <div className="cta-inline-wrap">
            <div className="cta-inline">
              <p>
                Vraag naar de actuele beschikbaarheid van ons lamsvlees.
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
