"use client";

import { ArrowUpRight, MessageCircle } from "lucide-react";
import { useState, type FormEvent } from "react";
import { whatsappLink } from "@/lib/contact";

export function ContactForm() {
  const [draft, setDraft] = useState<string | null>(null);
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const message = `Bonjour, je souhaite une démonstration de GymPass.\nSalle : ${String(data.get("gym")).trim()}\nVille : ${String(data.get("city")).trim()}\nMon numéro WhatsApp : ${String(data.get("phone")).trim()}`;
    setDraft(whatsappLink(message));
  }
  return <form onSubmit={submit} onChange={() => setDraft(null)} className="contact-form"><div className="grid gap-3 sm:grid-cols-2"><label>Nom de la salle<input name="gym" placeholder="Nom de votre salle" autoComplete="organization" required maxLength={100} pattern=".*\S.*" /></label><label>Ville<input name="city" placeholder="Ex. Dakar" autoComplete="address-level2" required maxLength={100} pattern=".*\S.*" /></label></div><label>Votre numéro WhatsApp<input name="phone" type="tel" placeholder="+221 77 000 00 00" autoComplete="tel" required pattern="[+0-9 \(\)\-]{9,20}" maxLength={20} /></label><button className="button button-primary w-full justify-center" type="submit">Préparer ma demande <ArrowUpRight size={18} /></button><p className="text-xs leading-relaxed text-muted">Votre demande s’ouvre sur WhatsApp. Vous vérifiez le message avant de l’envoyer.</p>{draft && <div role="status" className="contact-ready"><p>Votre demande est prête.</p><a className="button button-primary mt-3 w-full justify-center" href={draft} target="_blank" rel="noopener noreferrer"><MessageCircle size={18} />Ouvrir WhatsApp</a></div>}</form>;
}
