import Link from "next/link";

export default function NotFound() {
  return (
    <div className="section not-found">
      <div className="wrap">
        <span className="eyebrow">Pagina niet gevonden</span>
        <h1>Dit stuk is niet op de kaart.</h1>
        <p>
          De pagina die u zoekt bestaat niet (meer). Ontdek ons volledige
          assortiment, of ga terug naar de startpagina.
        </p>
        <div className="not-found__cta">
          <Link href="/rund" className="btn btn-solid">
            Bekijk ons aanbod
          </Link>
          <Link href="/" className="btn">
            Naar de homepage
          </Link>
        </div>
      </div>

      <style>{`
        .not-found {
          padding: 180px 0;
          text-align: left;
        }
        .not-found h1 {
          font-size: clamp(32px, 5vw, 48px);
          margin: 16px 0 18px;
          max-width: 560px;
        }
        .not-found p {
          max-width: 480px;
        }
        .not-found__cta {
          display: flex;
          gap: 16px;
          margin-top: 28px;
          flex-wrap: wrap;
        }
      `}</style>
    </div>
  );
}
