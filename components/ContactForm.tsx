"use client";

import { useState } from "react";
import { COMPANY } from "@/data/site";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const subject = encodeURIComponent(`Contactaanvraag via website — ${company || name}`);
  const body = encodeURIComponent(
    `Naam: ${name}\nBedrijf: ${company}\nE-mail: ${email}\n\n${message}`
  );
  const mailtoHref = `mailto:${COMPANY.email}?subject=${subject}&body=${body}`;

  return (
    <form
      className="contact-form"
      action={mailtoHref}
      method="get"
      onSubmit={() => {
        window.location.href = mailtoHref;
      }}
    >
      <div className="field-row">
        <label>
          Naam
          <input
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            name="name"
          />
        </label>
        <label>
          Bedrijf
          <input
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            type="text"
            name="company"
          />
        </label>
      </div>
      <label>
        E-mail
        <input
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          name="email"
        />
      </label>
      <label>
        Bericht
        <textarea
          required
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          name="message"
          rows={5}
        />
      </label>
      <button type="submit" className="btn btn-solid">
        Verstuur aanvraag
      </button>

      <style jsx>{`
        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
        .field-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }
        label {
          display: flex;
          flex-direction: column;
          gap: 8px;
          font-size: 12px;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--stone);
          font-weight: 700;
        }
        input,
        textarea {
          background: var(--ink-2);
          border: 1px solid var(--line-strong);
          color: var(--cream);
          padding: 13px 14px;
          font-family: var(--font-body), sans-serif;
          font-size: 15px;
          font-weight: 400;
          text-transform: none;
          letter-spacing: normal;
          resize: vertical;
        }
        input:focus,
        textarea:focus {
          outline: none;
          border-color: var(--brass);
        }
        button {
          align-self: flex-start;
          margin-top: 6px;
        }
        @media (max-width: 560px) {
          .field-row {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </form>
  );
}
