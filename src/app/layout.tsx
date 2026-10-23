import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const urbanist = localFont({ src: "../../public/fonts/Urbanist.ttf", variable: "--font-urbanist", weight: "100 900", display: "swap" });

export const metadata: Metadata = {
  title: "GymPass SN — Votre salle, dans un téléphone",
  description: "GymPass SN : adhérents, cartes QR, vérification des abonnements et suivi de l’argent reçu par votre salle de sport au Sénégal.",
  icons: { icon: "/logo.png", apple: "/logo.png" },
  openGraph: { title: "GymPass SN — La réception de votre salle, dans un téléphone.", description: "Inscrivez vos adhérents, enregistrez l’argent reçu et vérifiez les cartes. La gestion de salle pensée pour le Sénégal.", locale: "fr_SN", type: "website" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="fr" className={urbanist.variable}><body>{children}</body></html>;
}
