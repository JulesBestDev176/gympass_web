"use client";

import { useRef, useState } from "react";
import { ExternalLink, Maximize } from "lucide-react";
import styles from "./page.module.css";

const mediaBase = "https://minio-sxbdug7ttppdp9shvft8idjz.185.182.9.36.sslip.io/gympass-marketing/demo/gympass-presentation-v3-40f4a8e81723";

export function DemoVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [message, setMessage] = useState("");

  async function openFullscreen() {
    const video = videoRef.current as (HTMLVideoElement & { webkitEnterFullscreen?: () => void }) | null;
    if (!video) return;
    setMessage("");
    try {
      if (video.requestFullscreen) await video.requestFullscreen();
      else if (video.webkitEnterFullscreen) video.webkitEnterFullscreen();
      else setMessage("Utilisez la commande plein écran du lecteur ou ouvrez la vidéo directement.");
    } catch {
      setMessage("Utilisez la commande plein écran du lecteur ou ouvrez la vidéo directement.");
    }
  }

  return (
    <>
      <div className={styles.player}>
        <video
          ref={videoRef}
          controls
          playsInline
          preload="metadata"
          poster={`${mediaBase}.jpg`}
          aria-label="Vidéo de démonstration de GymPass"
          onError={() => setMessage("La vidéo ne se charge pas. Réessayez ou ouvrez-la directement.")}
        >
          <source src={`${mediaBase}.mp4`} type="video/mp4" />
          Votre navigateur ne prend pas en charge la lecture vidéo.
        </video>
      </div>
      <div className={styles.controls}>
        <span className={styles.quality}>Full HD · 1080p</span>
        <button type="button" onClick={openFullscreen} className={styles.fullscreen}>
          <Maximize size={16} aria-hidden="true" /> Plein écran
        </button>
      </div>
      <p className={styles.status} role="status">{message}</p>
      <p className={styles.fallback}>
        <a href={`${mediaBase}.mp4`} target="_blank" rel="noopener noreferrer">
          Ouvrir la vidéo <ExternalLink size={14} aria-hidden="true" />
        </a>
      </p>
    </>
  );
}
