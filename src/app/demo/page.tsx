import type { Metadata } from "next";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import styles from "./page.module.css";

const videoId = "11l7tpbPhoj16v3BHYS0w3EyNJHWapM2M";

export const metadata: Metadata = {
  title: "GymPass — Démonstration",
  description: "Découvrez GymPass en vidéo : la gestion de votre salle depuis votre téléphone.",
  robots: { index: false, follow: false, noarchive: true },
  openGraph: {
    title: "GymPass — Démonstration",
    description: "Découvrez l’application en vidéo.",
    type: "website",
    locale: "fr_SN",
  },
};

export default function DemoPage() {
  return (
    <main className={styles.page}>
      <div className={styles.content}>
        <header className={styles.header}>
          <Image src="/logo.png" alt="GymPass" width={96} height={96} priority className={styles.logo} />
          <p className={styles.eyebrow}>L’application en action</p>
          <h1 className={styles.title}>Découvrez <span>GymPass.</span></h1>
          <p className={styles.description}>La gestion de votre salle, depuis votre téléphone.</p>
        </header>

        <div className={styles.player}>
          <iframe
            src={`https://drive.google.com/file/d/${videoId}/preview`}
            title="Vidéo de démonstration de GymPass"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            referrerPolicy="strict-origin-when-cross-origin"
          />
        </div>

        <p className={styles.fallback}>
          La vidéo ne se lance pas ?{" "}
          <a href={`https://drive.google.com/file/d/${videoId}/view`} target="_blank" rel="noopener noreferrer">
            Ouvrir la vidéo <ExternalLink size={14} aria-hidden="true" />
          </a>
        </p>
      </div>
    </main>
  );
}
