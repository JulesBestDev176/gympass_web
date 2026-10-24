"use client";

import { ArrowUpRight } from "lucide-react";
import { useState, type FormEvent } from "react";

const API_URL = process.env.NEXT_PUBLIC_API_URL ?? "https://api.gympass.minifootapp.com";

type SubmitState = "idle" | "loading" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<SubmitState>("idle");

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const gym = String(data.get("gym")).trim();
    const city = String(data.get("city")).trim();
    const phone = String(data.get("phone")).trim();

    setStatus("loading");
    try {
      const res = await fetch(`${API_URL}/api/v1/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ gym, city, phone }),
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  const isLoading = status === "loading";

  return <form onSubmit={submit} onChange={() => status === "error" && setStatus("idle")} className="contact-form"><div className="grid gap-3 sm:grid-cols-2"><label>Nom de la salle<input name="gym" placeholder="Nom de votre salle" autoComplete="organization" required maxLength={100} pattern=".*\S.*" /></label><label>Ville<input name="city" placeholder="Ex. Dakar" autoComplete="address-level2" required maxLength={100} pattern=".*\S.*" /></label></div><label>Votre numéro WhatsApp<input name="phone" type="tel" placeholder="+221 77 000 00 00" autoComplete="tel" required pattern="[+0-9 \(\)\-]{9,20}" maxLength={20} /></label><button className="button button-primary w-full justify-center" type="submit" disabled={isLoading}>{isLoading ? "Envoi en cours…" : <>"Envoyer ma demande" <ArrowUpRight size={18} /></>}</button><p className="text-xs leading-relaxed text-muted">Nous vous contacterons rapidement après réception de votre demande.</p>{status === "success" && <div role="status" className="contact-ready"><p>Demande envoyée ! Nous vous contacterons rapidement.</p></div>}{status === "error" && <p className="text-xs" style={{ color: "red" }}>Erreur d&apos;envoi. Veuillez réessayer.</p>}</form>;
}
