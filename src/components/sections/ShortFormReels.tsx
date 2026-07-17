"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { shortFormVideos, VideoProject } from "@/data/content";
import Lightbox from "@/components/Lightbox";

function ReelCard({ project, index }: { project: VideoProject; index: number }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const previewVideoRef = useRef<HTMLVideoElement>(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    previewVideoRef.current?.play().catch(() => {});
  }, [open]);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        whileHover={{ y: -6, scale: 1.02 }}
        whileTap={{ scale: 0.99 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.35, delay: index * 0.08 }}
        className="group flex-shrink-0 snap-start w-[220px] md:w-[250px]"
      >
        <button
          onClick={() => setOpen(true)}
          className="relative block w-full aspect-[9/16] rounded-[1.75rem] border-[6px] border-navy bg-navy overflow-hidden shadow-lg shadow-navy/10 transition-transform duration-300 group-hover:-translate-y-2"
        >
          <video
            src={project.src}
            poster={project.poster}
            muted
            loop
            playsInline
            autoPlay
            preload="auto"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-x-0 top-0 flex justify-center pt-1.5">
            <div className="h-1.5 w-14 rounded-full bg-cream/50" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          <span className="absolute bottom-3 left-3 right-3 text-left font-utility text-xs text-cream opacity-0 group-hover:opacity-100 transition-opacity">
            {project.title}
          </span>
        </button>
        <p className="mt-3 font-display font-bold text-sm uppercase">
          {project.title}
        </p>
      </motion.div>

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

export default function ShortFormReels() {
  return (
    <section id="short-form" className="px-6 md:px-12 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-10 gap-4">
          <div>
            <p className="font-utility uppercase tracking-[0.3em] text-royal text-xs mb-3">
              Video archive &middot; 01
            </p>
            <h2 className="font-display font-black uppercase leading-[0.95] text-[clamp(2rem,5vw,3.25rem)]">
              Short-form reels
            </h2>
          </div>
          <p className="max-w-sm text-ink/65 text-sm md:text-base">
            Fast, vertical, built for the scroll. Hover to preview, tap to
            watch full screen.
          </p>
        </div>

        <div className="flex gap-6 overflow-x-auto no-scrollbar pb-4 -mx-6 px-6 md:mx-0 md:px-0 scroll-smooth snap-x snap-mandatory">
          {shortFormVideos.map((project, i) => (
            <ReelCard key={project.id} project={project} index={i} />
          ))}
        </div>

        <div className="mt-6 rounded-full bg-ink/10 p-2">
          <div className="relative h-2 overflow-hidden rounded-full bg-cream/10">
            <motion.div
              animate={{ x: [0, 160, 0] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute left-0 top-0 h-full w-24 rounded-full bg-royal"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
