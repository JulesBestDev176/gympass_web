import type { Metadata } from "next";
import Image from "next/image";
import { DemoVideo } from "./demo-video";
import styles from "./page.module.css";

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

        <DemoVideo />
      </div>
    </main>
  );
}
