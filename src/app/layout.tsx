import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const urbanist = localFont({ src: "../../public/fonts/Urbanist.ttf", variable: "--font-urbanist", display: "swap" });

export const metadata: Metadata = {
  title: "GymPass SN — Votre salle, dans un téléphone",
  description: "Gérez votre salle de sport au Sénégal : adhérents, cartes QR, contrôle d’accès et encaissements en FCFA. Découvrez GymPass SN.",
  icons: { icon: "/logo.png", apple: "/logo.png" },
  openGraph: { title: "GymPass SN — La réception de votre salle, dans un téléphone.", description: "Inscrivez, encaissez et scannez. La gestion de salle pensée pour le Sénégal.", locale: "fr_SN", type: "website" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="fr" className={urbanist.variable}><body>{children}</body></html>;
}
