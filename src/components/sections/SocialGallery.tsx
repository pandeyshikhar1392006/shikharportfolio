"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { socialProjects, SocialProject } from "@/data/content";
import Lightbox from "@/components/Lightbox";

function SocialCard({ project, index }: { project: SocialProject; index: number }) {
  const [open, setOpen] = useState(false);
  const tall = index % 3 === 1;

  return (
    <>
      <motion.button
        onClick={() => setOpen(true)}
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        whileHover={{ y: -6, scale: 1.01 }}
        whileTap={{ scale: 0.99 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.35, delay: (index % 6) * 0.06 }}
        className={`group relative block w-full overflow-hidden rounded-2xl border border-line bg-paper mb-6 break-inside-avoid text-left ${
          tall ? "" : ""
        }`}
      >
        <div className={`relative w-full ${tall ? "aspect-[3/4]" : "aspect-[4/5]"}`}>
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-[1.06]"
            sizes="(max-width: 768px) 90vw, 30vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/0 to-navy/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
            <p className="font-display font-bold text-cream text-sm uppercase leading-tight">
              {project.title}
            </p>
          </div>
        </div>
      </motion.button>

      <Lightbox open={open} onClose={() => setOpen(false)}>
        <div className="max-w-[90vw] max-h-[85vh] flex flex-col items-center">
          <div className="relative max-h-[75vh] w-auto">
            <Image
              src={project.image}
              alt={project.title}
              width={900}
              height={1200}
              className="max-h-[75vh] w-auto rounded-xl object-contain"
            />
          </div>
          <p className="mt-4 text-cream font-display uppercase text-sm text-center max-w-md">
            {project.title}
          </p>
          <p className="text-cream/60 text-xs mt-1">{project.description}</p>
        </div>
      </Lightbox>
    </>
  );
}

export default function SocialGallery() {
  return (
    <section id="social-lab" className="px-6 md:px-12 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10">
          <p className="font-utility uppercase tracking-[0.3em] text-royal text-xs mb-3">
            Creative gallery
          </p>
          <h2 className="font-display font-black uppercase leading-[0.95] text-[clamp(2rem,5vw,3.25rem)]">
            Social media lab
          </h2>
          <p className="mt-4 max-w-lg text-ink/65 text-sm md:text-base">
            Posters, campaigns, and social-first design work made in
            Photoshop and Canva.
          </p>
        </div>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6">
          {socialProjects.map((project, i) => (
            <SocialCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
