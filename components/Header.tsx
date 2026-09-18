"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { NAV } from "@/data/site";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
      <div className="wrap site-header__row">
        <Link href="/" className="brand" aria-label="Mitera — home">
          <span className="brand__mark">MITERA</span>
        </Link>

        <nav className="main-nav" aria-label="Hoofdmenu">
          <ul>
            {NAV.map((item) => {
              const active =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);
              return (
                <li key={item.href}>
                  <Link href={item.href} className={active ? "is-active" : ""}>
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <a href="tel:+32477076334" className="btn header-cta">
          Bestel bij ons
        </a>

        <button
          className="burger"
          aria-label={open ? "Sluit menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <div className={`mobile-nav ${open ? "is-open" : ""}`}>
        <ul>
          {NAV.map((item) => (
            <li key={item.href}>
              <Link href={item.href} onClick={() => setOpen(false)}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <style jsx>{`
        .site-header {
          position: sticky;
          top: 0;
          z-index: 50;
          background: rgba(13, 12, 10, 0.72);
          backdrop-filter: blur(10px);
          border-bottom: 1px solid var(--line);
          transition: background 0.3s ease;
        }
        .site-header.is-scrolled {
          background: rgba(13, 12, 10, 0.94);
        }
        .site-header__row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 84px;
          gap: 24px;
        }
        .brand__mark {
          font-family: var(--font-display), serif;
          font-size: 24px;
          letter-spacing: 0.14em;
          color: var(--cream);
        }
        .main-nav {
          flex: 1;
          display: flex;
          justify-content: center;
        }
        .main-nav ul {
          display: flex;
          gap: 34px;
        }
        .main-nav a {
          font-size: 13px;
          letter-spacing: 0.09em;
          text-transform: uppercase;
          color: var(--cream-dim);
          font-weight: 600;
          position: relative;
          padding: 6px 0;
          transition: color 0.2s ease;
        }
        .main-nav a:hover {
          color: var(--cream);
        }
        .main-nav a.is-active {
          color: var(--brass-bright);
        }
        .main-nav a.is-active::after {
          content: "";
          position: absolute;
          left: 0;
          right: 0;
          bottom: -3px;
          height: 1px;
          background: var(--brass-bright);
        }
        .header-cta {
          padding: 11px 22px;
          font-size: 12px;
          white-space: nowrap;
        }
        .burger {
          display: none;
          flex-direction: column;
          gap: 5px;
          background: none;
          border: none;
          padding: 8px;
          cursor: pointer;
        }
        .burger span {
          width: 22px;
          height: 1px;
          background: var(--cream);
        }
        .mobile-nav {
          display: none;
        }
        @media (max-width: 900px) {
          .main-nav {
            display: none;
          }
          .header-cta {
            display: none;
          }
          .burger {
            display: flex;
          }
          .mobile-nav {
            max-height: 0;
            overflow: hidden;
            border-top: 1px solid var(--line);
            transition: max-height 0.3s ease;
          }
          .mobile-nav.is-open {
            max-height: 480px;
          }
          .mobile-nav ul {
            padding: 18px 20px 26px;
            display: flex;
            flex-direction: column;
            gap: 18px;
          }
          .mobile-nav a {
            font-size: 15px;
            letter-spacing: 0.06em;
            text-transform: uppercase;
            color: var(--cream-dim);
            font-weight: 600;
          }
        }
      `}</style>
    </header>
  );
}
