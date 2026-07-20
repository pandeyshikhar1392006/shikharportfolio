"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { longFormVideos, VideoProject } from "@/data/content";
import Lightbox from "@/components/Lightbox";

function FilmCard({ project, index }: { project: VideoProject; index: number }) {
  const [open, setOpen] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const previewVideoRef = useRef<HTMLVideoElement>(null);
  const [shouldLoadVideo, setShouldLoadVideo] = useState(false);

  useEffect(() => {
    if (!open) return;
    previewVideoRef.current?.play().catch(() => {});
  }, [open]);

  useEffect(() => {
    if (shouldLoadVideo || !videoRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoadVideo(true);
          observer.disconnect();
        }
      },
      { rootMargin: "220px 0px" }
    );

    observer.observe(videoRef.current);
    return () => observer.disconnect();
  }, [shouldLoadVideo]);

  return (
    <>
      <motion.button
        onClick={() => setOpen(true)}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        whileHover={{ y: -5, scale: 1.01 }}
        whileTap={{ scale: 0.99 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.35, delay: index * 0.1 }}
        className="group text-left flex h-full min-h-[360px] flex-col"
      >
        <div className="relative aspect-video overflow-hidden rounded-2xl bg-navy">
          <video
            ref={videoRef}
            src={shouldLoadVideo ? project.src : undefined}
            poster={project.poster}
            muted
            loop
            playsInline
            autoPlay={shouldLoadVideo}
            preload="metadata"
            className="h-full w-full object-contain bg-navy transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-navy/25 group-hover:bg-navy/40 transition-colors" />
          <span className="absolute top-4 left-4 font-utility text-[10px] uppercase tracking-widest text-cream bg-royal/90 rounded-full px-3 py-1">
            Long Form
          </span>
        </div>
        <div className="mt-3 flex flex-col justify-between gap-2">
          <div>
            <h3 className="font-display font-bold uppercase text-lg md:text-xl">
              {project.title}
            </h3>
            <p className="text-ink/65 text-sm mt-2 max-w-md leading-relaxed">
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
    <section id="long-form" className="px-6 md:px-12 py-12 md:py-16 bg-cream-deep/50">
      <div className="mx-auto max-w-6xl">
        <div className="mb-6 md:mb-8">
          <p className="font-utility uppercase tracking-[0.3em] text-royal text-xs mb-3">
            Video archive &middot; 02
          </p>
          <h2 className="font-display font-black uppercase leading-[0.95] text-[clamp(2rem,5vw,3.25rem)]">
            Long-form films
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-8 md:gap-x-8 md:gap-y-10">
          {longFormVideos.map((project, i) => (
            <FilmCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
