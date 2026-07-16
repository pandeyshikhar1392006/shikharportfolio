"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { profile, education, achievements } from "@/data/content";
import Lightbox from "@/components/Lightbox";

export default function Resume() {
  const [open, setOpen] = useState(false);

  return (
    <section id="resume" className="px-6 md:px-12 py-20 md:py-28">
      <div className="mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-12 gap-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="md:col-span-5"
        >
          <p className="font-utility uppercase tracking-[0.3em] text-royal text-xs mb-3">
            Resume
          </p>
          <h2 className="font-display font-black uppercase leading-[0.95] text-[clamp(2rem,5vw,3.25rem)] mb-6">
            Education &amp; achievements
          </h2>

          <div className="space-y-6 mb-8">
            {education.map((ed) => (
              <div key={ed.title} className="border-b border-line pb-4">
                <p className="font-utility text-xs uppercase tracking-widest text-ink/50">
                  {ed.period}
                </p>
                <h3 className="font-display font-bold text-lg">{ed.title}</h3>
                <p className="text-ink/60 text-sm">{ed.place}</p>
                <p className="text-royal text-sm font-medium mt-1">
                  {ed.detail}
                </p>
              </div>
            ))}
          </div>

          <ul className="space-y-3">
            {achievements.map((a) => (
              <li key={a} className="flex gap-3 text-sm text-ink/70">
                <span className="text-royal mt-1">&#9679;</span>
                <span>{a}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="md:col-span-7"
        >
          <div className="relative rounded-3xl border border-line bg-paper p-6 md:p-10 h-full min-h-[620px] flex flex-col items-center justify-between text-center gap-6">
            <div className="w-full max-w-lg overflow-hidden rounded-[2rem] border border-line bg-cream shadow-lg shadow-navy/10">
              <div className="relative h-[80vh] w-full">
                <Image
                  src="/images/resume/resume-preview.png"
                  alt="Resume preview"
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 90vw, 520px"
                />
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-3">
              <motion.button
                onClick={() => setOpen(true)}
                whileHover={{ y: -3, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2 }}
                className="rounded-full bg-royal px-6 py-3 font-utility text-sm font-medium text-cream hover:bg-royal-deep transition-colors"
              >
                View Full Screen
              </motion.button>
              <a
                href={profile.resumeFile}
                download
                className="rounded-full border border-ink/20 px-6 py-3 font-utility text-sm font-medium hover:bg-ink/5 transition-colors"
              >
                Download Resume
              </a>
            </div>
          </div>
        </motion.div>
      </div>

      <Lightbox open={open} onClose={() => setOpen(false)}>
        <div className="relative h-[90vh] w-[85vw] md:w-[60vw] rounded-3xl overflow-hidden bg-navy/10 p-4">
          <Image
            src="/images/resume/resume-preview.png"
            alt="Resume preview"
            fill
            className="object-contain"
          />
        </div>
      </Lightbox>
    </section>
  );
}
