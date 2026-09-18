export const NAV = [
  { href: "/", label: "Home" },
  { href: "/rund", label: "Rund" },
  { href: "/kalf", label: "Kalf" },
  { href: "/varken", label: "Varken" },
  { href: "/lam", label: "Lam" },
  { href: "/charcuterie", label: "Charcuterie" },
  { href: "/over-ons", label: "Over ons" },
  { href: "/contact", label: "Contact" },
] as const;

export const COMPANY = {
  name: "Mitera",
  legalName: "Mitera bvba",
  addressLine1: "Nederweg 23",
  addressLine2: "9521 Letterhoutem, België",
  vat: "BE 0837.019.928",
  email: "info@mitera.be",
  phone: "+32 477 07 63 34",
  phoneDisplay: "0477 07 63 34",
  instagram: "https://www.instagram.com/mitera_bvba/",
  facebook: "https://www.facebook.com/tom.mitera.5",
};

export const TEAM = [
  {
    name: "Tom De Smet",
    role: "Zaakvoerder",
    phone: "0480 61 05 46",
    email: "tom.de.smet@mitera.be",
  },
  {
    name: "Alex",
    role: "Aankoop & logistiek",
    phone: "0477 07 63 34",
    email: "alex@mitera.be",
  },
  {
    name: "Frederik De Brauwer",
    role: "Commercieel — Horeca & Slagers",
    phone: "0468 32 01 54",
    email: "frederik.de.brauwer@mitera.be",
  },
  {
    name: "Pieter-Jan Serlet",
    role: "Commercieel — Horeca & Slagers",
    phone: "0494 11 28 33",
    email: "pieterjan.serlet@mitera.be",
  },
  {
    name: "Maxime Schelfaut",
    role: "Commercieel — Horeca & Slagers",
    phone: "0475 74 93 84",
    email: "maxime.schelfaut@mitera.be",
  },
] as const;
