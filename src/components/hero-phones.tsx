"use client";
import { useEffect, useState } from "react";
import { Phone } from "./app-previews";

export function HeroPhones() {
  const [swapped, setSwapped] = useState(false);

  useEffect(() => {
    const id = setInterval(() => setSwapped((s) => !s), 3800);
    return () => clearInterval(id);
  }, []);

  return (
    <>
      <Phone
        screen="dashboard"
        className={`hero-phone-back${swapped ? " phone-to-front" : ""}`}
        label="Tableau de bord propriétaire actuel : adhérents, entrées bracelet, encaissements et opérations"
      />
      <Phone
        screen="scan"
        className={`hero-phone-front${swapped ? " phone-to-back" : ""}`}
        label="Interface du résultat du scan : photo, identité, formule et statut du porteur"
      />
    </>
  );
}
