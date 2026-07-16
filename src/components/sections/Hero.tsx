"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { profile, introVideo } from "@/data/content";
import Lightbox from "@/components/Lightbox";

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    v.play().catch(() => {});
  }, []);

  const toggleMute = () => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = !v.muted;
    setMuted(v.muted);
  };

  return (
    <section
      id="home"
      className="relative h-[100svh] w-full overflow-hidden bg-navy"
    >
      {/* Full-bleed landscape intro video */}
      <video
        ref={videoRef}
        className="absolute inset-0 h-full w-full object-cover"
        src={introVideo.src}
        poster={introVideo.poster}
        autoPlay
        muted={muted}
        loop
        playsInline
      />

      {/* readability wash */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy/70 via-navy/25 to-navy/80" />
      <div className="absolute inset-0 bg-gradient-to-t from-cream/0 via-transparent to-transparent" />

      {/* Top bar */}
      <div className="absolute top-0 left-0 right-0 z-20 flex items-center justify-between px-6 md:px-12 py-6">
        <span className="font-display font-extrabold text-cream text-lg tracking-tight">
          SHIKHAR PANDEY
        </span>
        <button
          onClick={toggleMute}
          className="font-utility text-xs uppercase tracking-widest text-cream/80 border border-cream/30 rounded-full px-4 py-2 hover:bg-cream/10 transition-colors"
        >
          {muted ? "Unmute" : "Mute"}
        </button>
      </div>

      {/* Center content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="font-utility uppercase tracking-[0.3em] text-sky text-xs md:text-sm mb-5"
        >
          Creative Video Editor &middot; Designer
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="font-display font-black uppercase text-cream leading-[0.9] text-[clamp(2.6rem,10vw,8rem)]"
        >
          {profile.name}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55 }}
          className="mt-6 max-w-xl text-cream/85 text-base md:text-lg"
        >
          {profile.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-3"
        >
          <motion.button
            type="button"
            onClick={() => setOpen(true)}
            whileHover={{ y: -3, scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="rounded-full bg-cream text-navy px-6 py-3 font-utility text-sm font-medium hover:bg-cream/90 transition-colors"
          >
            Watch full intro
          </motion.button>
          <a
            href={profile.resumeFile}
            download
            className="rounded-full bg-royal px-6 py-3 font-utility text-sm font-medium text-cream hover:bg-royal-deep transition-colors"
          >
            Download Resume
          </a>
          <a
            href="#work"
            className="rounded-full border border-cream/40 px-6 py-3 font-utility text-sm font-medium text-cream hover:bg-cream/10 transition-colors"
          >
            View Work
          </a>
          <a
            href="#contact"
            className="rounded-full border border-cream/40 px-6 py-3 font-utility text-sm font-medium text-cream hover:bg-cream/10 transition-colors"
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
          src={introVideo.src}
          poster={introVideo.poster}
          controls
          autoPlay
          playsInline
          className="max-h-[85vh] w-full rounded-2xl border-4 border-cream/20"
          style={{ maxWidth: "min(96vw, 1100px)" }}
        />
      </Lightbox>
    </section>
  );
}
