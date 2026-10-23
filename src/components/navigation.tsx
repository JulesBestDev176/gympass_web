"use client";

import { Menu, X, ArrowUpRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export function Navigation() {
  const [open, setOpen] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        menuButton.current?.focus();
      }
    };
    const desktop = window.matchMedia("(min-width: 1024px)");
    const onResize = () => { if (desktop.matches) setOpen(false); };
    document.addEventListener("keydown", onKeyDown);
    desktop.addEventListener("change", onResize);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      desktop.removeEventListener("change", onResize);
    };
  }, [open]);
  return <header className="site-nav"><nav className="container flex h-20 items-center gap-4 xl:gap-7" aria-label="Navigation principale"><a href="#top" className="brand" onClick={() => setOpen(false)}><img src="/logo.png" width={36} height={36} alt="" /><span>GymPass <b>SN</b></span></a><div className="ml-auto hidden items-center gap-5 xl:gap-8 lg:flex"><a href="#fonctions">Fonctions</a><a href="#ecrans">Écrans</a><a href="#etapes">Démarrer</a><a href="#tarifs">Tarifs</a><a href="#faq">FAQ</a></div><a href="#contact" className="button button-outline nav-demo ml-auto lg:ml-2">Demander une démo <ArrowUpRight size={16} /></a><button ref={menuButton} type="button" className="ml-auto p-2 text-white lg:hidden sm:ml-0" onClick={() => setOpen(!open)} aria-label={open ? "Fermer le menu" : "Ouvrir le menu"} aria-expanded={open} aria-controls="mobile-menu">{open ? <X /> : <Menu />}</button></nav>{open && <div id="mobile-menu" className="mobile-menu lg:hidden">{[["Fonctions", "fonctions"], ["Écrans", "ecrans"], ["Démarrer", "etapes"], ["Finances", "finances"], ["Bracelets", "bracelets"], ["Équipe", "equipe"], ["WhatsApp", "whatsapp"], ["Sécurité et assistance", "confiance"], ["Tarifs", "tarifs"], ["FAQ", "faq"], ["Demander une démo", "contact"]].map(([label, id]) => <a href={`#${id}`} key={id} onClick={() => setOpen(false)}>{label}<ArrowUpRight size={16} /></a>)}</div>}</header>;
}
