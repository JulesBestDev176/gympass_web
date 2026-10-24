"use client";

import { useState } from "react";
import { Phone, type Screen } from "@/components/app-previews";

const steps: { screen: Screen; title: string; label: string }[] = [
  { screen: "shop", title: "Catalogue", label: "Catalogue de démonstration : photos, prix et stock des produits" },
  { screen: "shopCart", title: "Panier", label: "Panier de démonstration : deux eaux, total 1 000 FCFA" },
  { screen: "shopStock", title: "Stock", label: "Suivi du stock : 20 eaux avant la vente, 18 après" },
  { screen: "shopOffline", title: "Hors ligne", label: "Vente conservée sur le téléphone, en attente de confirmation du serveur" },
];

export function ShopTour() {
  const [active, setActive] = useState(0);
  const step = steps[active];
  return <div className="shop-tour"><div className="product-phone-stage shop-phone-stage"><div className="shop-phone-halo" /><Phone screen={step.screen} label={step.label} /></div><div className="shop-tour-controls" aria-label="Écrans de la boutique">{steps.map((item, i) => <button key={item.screen} type="button" aria-pressed={i === active} onClick={() => setActive(i)}>{item.title}</button>)}</div><p className="shop-tour-description" aria-live="polite">{step.label}</p></div>;
}
