"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { longFormVideos, VideoProject } from "@/data/content";
import Lightbox from "@/components/Lightbox";

function FilmCard({ project, index }: { project: VideoProject; index: number }) {
  const [open, setOpen] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const previewVideoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (!open) return;
    previewVideoRef.current?.play().catch(() => {});
  }, [open]);

  return (
    <>
      <motion.button
        onClick={() => setOpen(true)}
        onMouseEnter={() => videoRef.current?.play().catch(() => {})}
        onMouseLeave={() => {
          if (videoRef.current) {
            videoRef.current.pause();
            videoRef.current.currentTime = 0;
          }
        }}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        whileHover={{ y: -5, scale: 1.01 }}
        whileTap={{ scale: 0.99 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.35, delay: index * 0.1 }}
        className="group text-left flex h-full min-h-[520px] flex-col"
      >
        <div className="relative aspect-video overflow-hidden rounded-2xl bg-navy">
          <video
            ref={videoRef}
            src={project.src}
            poster={project.poster}
            muted
            loop
            playsInline
            preload="metadata"
            className="h-full w-full object-contain bg-navy transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-navy/25 group-hover:bg-navy/40 transition-colors" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-cream/90 transition-transform duration-300 group-hover:scale-110">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M8 5v14l11-7z" fill="var(--navy)" />
              </svg>
            </div>
          </div>
          <span className="absolute top-4 left-4 font-utility text-[10px] uppercase tracking-widest text-cream bg-royal/90 rounded-full px-3 py-1">
            Long Form
          </span>
        </div>
        <div className="mt-4 flex flex-col justify-between gap-4">
          <div>
            <h3 className="font-display font-bold uppercase text-lg md:text-xl">
              {project.title}
            </h3>
            <p className="text-ink/65 text-sm mt-3 max-w-md leading-relaxed">
              {project.description}
            </p>
          </div>
        </div>
      </motion.button>

      <Lightbox open={open} onClose={() => setOpen(false)}>
        <video
          ref={previewVideoRef}
          src={project.src}
          poster={project.poster}
          controls
          muted
          autoPlay
          playsInline
          className="max-h-[85vh] w-full rounded-2xl border-4 border-cream/20"
          style={{ maxWidth: "min(96vw, 1100px)" }}
        />
      </Lightbox>
    </>
  );
}

export default function LongFormFilms() {
  return (
    <section id="long-form" className="px-6 md:px-12 py-20 md:py-28 bg-cream-deep/50">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10">
          <p className="font-utility uppercase tracking-[0.3em] text-royal text-xs mb-3">
            Video archive &middot; 02
          </p>
          <h2 className="font-display font-black uppercase leading-[0.95] text-[clamp(2rem,5vw,3.25rem)]">
            Long-form films
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-14">
          {longFormVideos.map((project, i) => (
            <FilmCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
