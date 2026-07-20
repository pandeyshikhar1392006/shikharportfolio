"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { profile, introVideo } from "@/data/content";
import Lightbox from "@/components/Lightbox";
import { useWorkAudio } from "@/components/WorkAudioProvider";

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const previewVideoRef = useRef<HTMLVideoElement>(null);
  const [open, setOpen] = useState(false);
  const { backgroundEnabled, toggleBackgroundAudio } = useWorkAudio();

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    v.play().catch(() => {});
  }, []);

  useEffect(() => {
    if (!open) return;
    const preview = previewVideoRef.current;
    if (!preview) return;
    preview.muted = false;
    preview.volume = 1;
    preview.play().catch(() => {});
  }, [open]);

  return (
    <section
      id="home"
      className="relative h-screen w-full overflow-hidden bg-navy"
    >
      {/* hero background image */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/hemlo.png')" }} />

      {/* Full-bleed landscape intro video */}
      <div className="absolute inset-0 flex items-center justify-center bg-transparent">
        <video
          ref={videoRef}
          className="relative z-0 h-full w-full object-contain"
          style={{ objectPosition: "center center" }}
          src={introVideo.src}
          preload="metadata"
          autoPlay
          muted
          loop
          playsInline
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-navy/70 via-navy/25 to-navy/80" />
      <div className="absolute inset-0 bg-gradient-to-t from-cream/0 via-transparent to-transparent" />

      {/* Top bar */}
      <div className="absolute top-0 left-0 right-0 z-20 flex items-center justify-between px-6 md:px-12 py-6">
        <span className="font-display font-extrabold text-cream text-[1.1rem] sm:text-[1.2rem] md:text-[1.35rem] lg:text-[1.5rem] tracking-[0.02em] whitespace-nowrap leading-none flex-shrink-0 overflow-hidden text-ellipsis block max-w-full">
          SHIKHAR PANDEY
        </span>
      </div>

      {/* Center content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center gap-10 px-4 py-10 text-center md:px-6 md:py-16 max-w-[min(90vw,680px)] mx-auto transform -translate-y-6">
        <div className="pt-6">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="font-utility uppercase tracking-[0.3em] text-sky text-[10px] md:text-sm mb-3 leading-tight"
          >
            Creative Video Editor &middot; Designer
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="font-display font-black uppercase text-cream leading-[0.95] whitespace-nowrap text-[clamp(2rem,8vw,3.5rem)] md:text-[clamp(2.2rem,8vw,6rem)]"
          >
            {profile.name}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.55 }}
            className="mx-auto mt-3 w-full max-w-xl text-center text-cream/85 text-sm md:text-base"
          >
            {profile.tagline}
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="mt-8 grid w-full grid-cols-2 gap-3 sm:grid-cols-4"
        >
          <motion.button
            type="button"
            onClick={() => setOpen(true)}
            whileHover={{ y: -3, scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="w-full rounded-full bg-cream px-4 py-2 text-[0.78rem] font-utility font-medium text-navy hover:bg-cream/90 transition-colors"
          >
            Watch intro
          </motion.button>
          <a
            href={profile.resumeFile}
            download
            className="w-full rounded-full bg-royal px-4 py-2 text-[0.78rem] font-utility font-medium text-cream hover:bg-royal-deep transition-colors"
          >
            Resume
          </a>
          <button
            type="button"
            onClick={toggleBackgroundAudio}
            className="w-full rounded-full border border-cream/40 bg-transparent px-4 py-2 text-[0.78rem] font-utility font-medium text-cream hover:bg-cream/10 transition-colors"
          >
            {backgroundEnabled ? "Pause Music" : "Play Music"}
          </button>
          <a
            href="#contact"
            className="w-full rounded-full border border-cream/40 bg-transparent px-4 py-2 text-[0.78rem] font-utility font-medium text-cream hover:bg-cream/10 transition-colors"
          >
            Contact
          </a>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-cream/70 font-utility text-xs uppercase tracking-[0.3em]"
      >
        Scroll
      </motion.div>

      <Lightbox open={open} onClose={() => setOpen(false)}>
        <video
          ref={previewVideoRef}
          src={introVideo.src}
          poster={introVideo.poster}
          controls
          muted={false}
          autoPlay
          playsInline
          className="max-h-[85vh] w-full rounded-2xl border-4 border-cream/20"
          style={{ maxWidth: "min(96vw, 1100px)" }}
        />
      </Lightbox>
    </section>
  );
}
