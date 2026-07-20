"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { about, photos } from "@/data/content";
import SpinDisc from "@/components/SpinDisc";

export default function About() {
  return (
    <section id="about" className="relative px-6 md:px-12 py-24 md:py-32">
      <div className="mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="md:col-span-5 relative"
        >
          <div className="relative mx-auto aspect-[3/4] max-w-sm rounded-[2.5rem] bg-royal/10 border border-line overflow-hidden">
            <Image
              src={photos.secondary}
              alt="Shikhar Pandey"
              fill
              className="object-cover object-[50%_45%]"
              sizes="(max-width: 768px) 90vw, 400px"
            />
          </div>
          <div className="absolute -right-2 -bottom-8 md:-right-8 hidden sm:block">
            <SpinDisc size={130} />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="md:col-span-7"
        >
          <p className="font-utility uppercase tracking-[0.3em] text-royal text-xs mb-4">
            About me
          </p>
          <h2 className="font-display font-black uppercase leading-[0.95] text-[clamp(2rem,5vw,3.5rem)] mb-6">
            Philosophy student.
            <br />
            Working editor.
          </h2>
          <p className="text-ink/80 text-base md:text-lg leading-relaxed mb-4">
            {about.intro}
          </p>
          <p className="text-ink/70 text-base leading-relaxed mb-4">
            {about.extended}
          </p>
          <p className="text-ink/70 text-base leading-relaxed italic border-l-2 border-royal pl-4">
            {about.philosophy}
          </p>

          <div className="mt-10 grid grid-cols-3 gap-3 sm:gap-6 max-w-md w-full">
            {about.stats.map((s) => (
              <div key={s.label}>
                <div className="font-display font-black text-3xl md:text-4xl text-navy">
                  {s.value}
                </div>
                <div className="font-utility text-xs uppercase tracking-wide text-ink/60 mt-1">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
