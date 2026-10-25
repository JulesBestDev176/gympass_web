"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Phone } from "./app-previews";

const SPRING = { type: "spring", stiffness: 260, damping: 22, mass: 1 } as const;

// État front : scale 1, légèrement vers l'avant (y -6px), z-index 3
// État back  : scale .91, y 0, z-index 1
const FRONT = { scale: 1,    y: -6, zIndex: 3 };
const BACK  = { scale: 0.91, y:  0, zIndex: 1 };

export function HeroPhones() {
  const [swapped, setSwapped] = useState(false);

  useEffect(() => {
    const id = setInterval(() => setSwapped((s) => !s), 3800);
    return () => clearInterval(id);
  }, []);

  // phone 1 = dashboard  (base CSS : hero-phone-back)
  // phone 2 = scan       (base CSS : hero-phone-front)
  const p1 = swapped ? FRONT : BACK;
  const p2 = swapped ? BACK  : FRONT;

  return (
    <>
      <motion.div
        className="hero-phone-back"
        animate={{ scale: p1.scale, y: p1.y, zIndex: p1.zIndex }}
        transition={SPRING}
        style={{ position: "absolute", left: 0, top: 52, originX: 0.5, originY: 0.5 }}
      >
        <Phone
          screen="dashboard"
          label="Tableau de bord propriétaire actuel : adhérents, entrées bracelet, encaissements et opérations"
        />
      </motion.div>

      <motion.div
        className="hero-phone-front"
        animate={{ scale: p2.scale, y: p2.y, zIndex: p2.zIndex }}
        transition={SPRING}
        style={{ position: "absolute", right: -5, top: 5, originX: 0.5, originY: 0.5 }}
      >
        <Phone
          screen="scan"
          label="Interface du résultat du scan : photo, identité, formule et statut du porteur"
        />
      </motion.div>
    </>
  );
}
