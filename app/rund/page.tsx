import type { Metadata } from "next";
import { COUNTRIES, getBreedCount } from "@/data/rund";
import RundExplorer from "@/components/RundExplorer";
import "./page.css";

export const metadata: Metadata = {
  title: "Rund — onze rassen per land",
  description:
    "Ontdek het volledige rundvleesassortiment van Mitera: premium rassen uit Oostenrijk, Frankrijk, Schotland, Italië, Portugal, Spanje, Baskenland, Australië en Japan.",
};

export default function RundPage() {
  return (
    <div className="section">
      <div className="wrap">
        <div className="page-head">
          <span className="eyebrow">Rund</span>
          <h1>{getBreedCount()} rassen, {COUNTRIES.length} landen, één filosofie: terroir.</h1>
          <p>
            Wij kopen rechtstreeks aan in de streek waar elk ras vandaan komt,
            en werken enkel met kleine, familiale kwekers. Filter hieronder op
            land, en ontdek per ras waar het vandaan komt, hoe het opgroeit en
            wat het zo bijzonder maakt.
          </p>
        </div>

        <RundExplorer countries={COUNTRIES} />
      </div>
    </div>
  );
}
