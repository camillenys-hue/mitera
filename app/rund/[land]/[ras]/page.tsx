import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { COUNTRIES, getAllBreeds, getBreed } from "@/data/rund";
import "./page.css";

export function generateStaticParams() {
  return getAllBreeds().map(({ country, breed }) => ({
    land: country.slug,
    ras: breed.slug,
  }));
}

export function generateMetadata({
  params,
}: {
  params: { land: string; ras: string };
}): Metadata {
  const found = getBreed(params.land, params.ras);
  if (!found) return {};
  const { country, breed } = found;
  return {
    title: `${breed.name} — ${country.name}`,
    description: breed.tagline,
  };
}

export default function BreedPage({
  params,
}: {
  params: { land: string; ras: string };
}) {
  const found = getBreed(params.land, params.ras);
  if (!found) notFound();
  const { country, breed } = found;

  const siblings = country.breeds.filter((b) => b.slug !== breed.slug);
  const idx = country.breeds.findIndex((b) => b.slug === breed.slug);
  const next = country.breeds[(idx + 1) % country.breeds.length];

  return (
    <div className="section breed-page">
      <div className="wrap">
        <nav className="breadcrumb">
          <Link href="/rund">Rund</Link>
          <span>/</span>
          <Link href={`/rund#${country.slug}`}>{country.name}</Link>
          <span>/</span>
          <span>{breed.name}</span>
        </nav>

        <div className="breed-layout">
          <div className="breed-main">
            {breed.featured && <span className="tag">Bestseller</span>}
            <span className="eyebrow">{country.name}</span>
            <h1>{breed.name}</h1>
            <p className="breed-tagline">{breed.tagline}</p>

            {breed.description.map((paragraph, i) => (
              <p key={i} className="breed-paragraph">
                {paragraph}
              </p>
            ))}

            <div className="cta-inline">
              <p>
                Geïnteresseerd in {breed.name}? Ons verkoopteam informeert u
                graag over beschikbaarheid en mogelijkheden.
              </p>
              <Link href="/contact" className="btn btn-solid">
                Neem contact op
              </Link>
            </div>
          </div>

          <aside className="breed-aside">
            <div className="info-box">
              <span className="info-box__label">Herkomst</span>
              <span className="info-box__value">{breed.origin}</span>
            </div>
            <div className="info-box">
              <span className="info-box__label">Kenmerken</span>
              <ul className="trait-list">
                {breed.traits.map((trait) => (
                  <li key={trait}>{trait}</li>
                ))}
              </ul>
            </div>
            <div className="info-box">
              <span className="info-box__label">Ook uit {country.name}</span>
              <ul className="sibling-list">
                {siblings.slice(0, 5).map((s) => (
                  <li key={s.slug}>
                    <Link href={`/rund/${country.slug}/${s.slug}`}>{s.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>

        <hr className="divider" />

        <div className="breed-nav">
          <Link href="/rund" className="breed-nav__all">
            ← Alle rassen
          </Link>
          {next.slug !== breed.slug && (
            <Link
              href={`/rund/${country.slug}/${next.slug}`}
              className="breed-nav__next"
            >
              Volgend ras: {next.name} →
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
