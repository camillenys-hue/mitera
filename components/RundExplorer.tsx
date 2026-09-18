"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import type { Country } from "@/data/rund";

export default function RundExplorer({ countries }: { countries: Country[] }) {
  const [active, setActive] = useState<string | null>(null);

  const visible = useMemo(
    () => (active ? countries.filter((c) => c.slug === active) : countries),
    [active, countries]
  );

  return (
    <div className="explorer">
      <aside className="explorer__side">
        <span className="explorer__side-label">Filter op land</span>
        <ul className="country-list">
          <li>
            <button
              className={`country-btn ${active === null ? "is-active" : ""}`}
              onClick={() => setActive(null)}
            >
              Alle landen
            </button>
          </li>
          {countries.map((country) => (
            <li key={country.slug}>
              <button
                className={`country-btn ${active === country.slug ? "is-active" : ""}`}
                onClick={() => setActive(country.slug)}
              >
                {country.name}
                <span className="country-btn__count">{country.breeds.length}</span>
              </button>
              <ul className="breed-list">
                {country.breeds.map((breed) => (
                  <li key={breed.slug}>
                    <Link href={`/rund/${country.slug}/${breed.slug}`}>
                      {breed.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </aside>

      <div className="explorer__main">
        {visible.map((country) => (
          <section key={country.slug} id={country.slug} className="country-section">
            <div className="country-section__head">
              <span className="eyebrow">{country.subtitle}</span>
              <h2>{country.name}</h2>
              <p>{country.intro}</p>
            </div>
            <div className="breed-grid">
              {country.breeds.map((breed) => (
                <Link
                  href={`/rund/${country.slug}/${breed.slug}`}
                  key={breed.slug}
                  className="breed-card"
                >
                  {breed.image ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      className="breed-card__image"
                      src={breed.image}
                      alt={breed.name}
                    />
                  ) : (
                    <div className="breed-card__image breed-card__image--empty" />
                  )}
                  {breed.featured && <span className="tag">Bestseller</span>}
                  <h3>{breed.name}</h3>
                  <span className="breed-card__origin">{breed.origin}</span>
                  <p>{breed.tagline}</p>
                  <span className="breed-card__link">Ontdek dit ras →</span>
                </Link>
              ))}
            </div>
          </section>
        ))}
      </div>

      <style jsx>{`
        .explorer {
          display: grid;
          grid-template-columns: 260px 1fr;
          gap: 56px;
          align-items: start;
        }
        .explorer__side {
          position: sticky;
          top: 108px;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        .explorer__side-label {
          font-size: 12px;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: var(--stone);
          font-weight: 700;
        }
        .country-list {
          display: flex;
          flex-direction: column;
          gap: 4px;
          border-top: 1px solid var(--line);
        }
        .country-list > li {
          border-bottom: 1px solid var(--line);
          padding: 10px 0;
        }
        .country-btn {
          background: none;
          border: none;
          padding: 4px 0;
          width: 100%;
          text-align: left;
          display: flex;
          justify-content: space-between;
          align-items: center;
          color: var(--cream-dim);
          font-family: var(--font-display), serif;
          font-size: 16px;
          cursor: pointer;
          transition: color 0.2s ease;
        }
        .country-btn:hover {
          color: var(--cream);
        }
        .country-btn.is-active {
          color: var(--brass-bright);
        }
        .country-btn__count {
          font-family: var(--font-body), sans-serif;
          font-size: 11px;
          color: var(--stone);
        }
        .breed-list {
          margin-top: 6px;
          padding-left: 4px;
          display: flex;
          flex-direction: column;
          gap: 6px;
        }
        .breed-list a {
          font-size: 13px;
          color: var(--stone);
          transition: color 0.2s ease;
        }
        .breed-list a:hover {
          color: var(--brass-bright);
        }
        .country-section {
          margin-bottom: 68px;
        }
        .country-section__head {
          max-width: 640px;
          margin-bottom: 32px;
        }
        .country-section__head h2 {
          font-size: clamp(26px, 3vw, 36px);
          margin-top: 12px;
        }
        .breed-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1px;
          background: var(--line);
          border: 1px solid var(--line);
        }
        .breed-card {
          background: var(--ink);
          padding: 0 24px 24px;
          display: flex;
          flex-direction: column;
          gap: 8px;
          min-height: 200px;
          transition: background 0.25s ease, border-color 0.25s ease;
        }
        .breed-card:hover {
          background: var(--ink-2);
        }
        .breed-card__image {
          width: calc(100% + 48px);
          margin: 0 -24px 16px;
          aspect-ratio: 4 / 3;
          object-fit: cover;
          filter: saturate(0.92) contrast(1.03);
        }
        .breed-card__image--empty {
          background: linear-gradient(150deg, var(--ink-2), var(--ink-3));
        }
        .breed-card h3 {
          font-size: 20px;
          margin-top: 2px;
        }
        .breed-card__origin {
          font-size: 11px;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--brass);
          font-weight: 700;
        }
        .breed-card p {
          font-size: 13.5px;
          flex: 1;
          margin: 2px 0 0;
        }
        .breed-card__link {
          font-size: 11px;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          font-weight: 700;
          color: var(--brass-bright);
        }
        @media (max-width: 980px) {
          .explorer {
            grid-template-columns: 1fr;
          }
          .explorer__side {
            position: static;
          }
          .breed-list {
            display: none;
          }
          .breed-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 600px) {
          .breed-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
}
