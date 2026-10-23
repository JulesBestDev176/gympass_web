"use client";

import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";
import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";

type Slide = { id: string; title: string; content: ReactNode };

function offsetFromCurrent(index: number, current: number, count: number) {
  const offset = (index - current + count) % count;
  return offset >= count / 2 ? offset - count : offset;
}

export function ScreenCarousel({ slides }: { slides: Slide[] }) {
  const root = useRef<HTMLDivElement>(null);
  const [current, setCurrent] = useState(0);
  const [playing, setPlaying] = useState(true);
  const [hovered, setHovered] = useState(false);
  // Lecture resumes rotation explicitly without moving keyboard focus.
  const [focusPaused, setFocusPaused] = useState(false);
  const [motionAllowed, setMotionAllowed] = useState(false);
  const [visible, setVisible] = useState(false);
  const [documentVisible, setDocumentVisible] = useState(true);

  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updateMotion = () => setMotionAllowed(!preference.matches);
    const updateVisibility = () => setDocumentVisible(!document.hidden);
    updateMotion();
    updateVisibility();
    preference.addEventListener("change", updateMotion);
    document.addEventListener("visibilitychange", updateVisibility);
    const observer = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting), { threshold: 0.15 });
    if (root.current) observer.observe(root.current);
    return () => {
      preference.removeEventListener("change", updateMotion);
      document.removeEventListener("visibilitychange", updateVisibility);
      observer.disconnect();
    };
  }, []);

  const advancing = playing && motionAllowed && visible && documentVisible && !hovered && !focusPaused;
  useEffect(() => {
    if (!advancing || slides.length < 2) return;
    const timer = window.setInterval(() => setCurrent(value => (value + 1) % slides.length), 5000);
    return () => window.clearInterval(timer);
  }, [advancing, slides.length]);

  function select(index: number) {
    setCurrent((index + slides.length) % slides.length);
    setPlaying(false);
  }

  return <div
    ref={root}
    className="screen-carousel"
    role="region"
    aria-roledescription="carrousel"
    aria-label="Les écrans de GymPass SN"
    onMouseEnter={() => setHovered(true)}
    onMouseLeave={() => setHovered(false)}
    onFocusCapture={() => setFocusPaused(true)}
    onBlurCapture={event => { if (!event.currentTarget.contains(event.relatedTarget as Node | null)) setFocusPaused(false); }}
    onKeyDown={event => {
      if (event.key === "ArrowLeft") { event.preventDefault(); select(current - 1); }
      if (event.key === "ArrowRight") { event.preventDefault(); select(current + 1); }
    }}
  >
    <div className="carousel-toolbar"><span>{String(current + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}</span>{motionAllowed && <button type="button" onClick={() => { setPlaying(value => !value); setFocusPaused(false); }} aria-label={playing ? "Mettre le carrousel en pause" : "Reprendre le défilement automatique"}>{playing ? <Pause size={14} /> : <Play size={14} />}{playing ? "Pause" : "Lecture"}</button>}</div>
    <div id="screen-carousel-stage" className="carousel-stage" aria-live={playing && motionAllowed ? "off" : "polite"} aria-atomic="false">
      {slides.map((slide, index) => {
        const offset = offsetFromCurrent(index, current, slides.length);
        const active = index === current;
        return <div
          key={slide.id}
          className={`carousel-slide${active ? " is-current" : ""}${Math.abs(offset) === 1 ? " is-neighbor" : ""}`}
          style={{ "--slide-offset": offset, zIndex: slides.length - Math.abs(offset) } as CSSProperties}
          role="group"
          aria-roledescription="diapositive"
          aria-label={`${index + 1} sur ${slides.length} : ${slide.title}`}
          aria-hidden={!active}
        >{slide.content}</div>;
      })}
    </div>
    <div className="carousel-navigation"><button type="button" className="carousel-arrow" onClick={() => select(current - 1)} aria-label="Écran précédent" aria-controls="screen-carousel-stage"><ChevronLeft size={20} /></button><div className="carousel-dots" aria-label="Choisir un écran">{slides.map((slide, index) => <button type="button" key={slide.id} onClick={() => select(index)} aria-label={`Afficher ${slide.title}`} aria-current={index === current ? "true" : undefined} aria-controls="screen-carousel-stage"><span /></button>)}</div><button type="button" className="carousel-arrow" onClick={() => select(current + 1)} aria-label="Écran suivant" aria-controls="screen-carousel-stage"><ChevronRight size={20} /></button></div>
  </div>;
}
