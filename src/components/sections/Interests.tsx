"use client";

import { motion } from "framer-motion";
import { interests } from "@/data/content";

const icons: Record<string, React.ReactNode> = {
  Editing: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
      <path d="M4 4h16v4H4z" stroke="currentColor" strokeWidth="1.6" />
      <path d="M4 12h10v8H4z" stroke="currentColor" strokeWidth="1.6" />
      <path d="M17 12h3v8h-3z" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  ),
  Designing: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.6" />
      <path d="M12 4v16M4 12h16" stroke="currentColor" strokeWidth="1.2" />
    </svg>
  ),
  Cooking: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
      <path
        d="M4 12a8 8 0 0 0 16 0z"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <path d="M12 4v3M8 5v3M16 5v3" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  ),
  Painting: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
      <path
        d="M4 15c2-6 8-11 15-11-1 7-6 13-12 15Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <circle cx="7" cy="17" r="2" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  ),
};

export default function Interests() {
  return (
    <section id="interests" className="px-6 md:px-12 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="mb-14">
          <p className="font-utility uppercase tracking-[0.3em] text-royal text-xs mb-3">
            Outside the timeline
          </p>
          <h2 className="font-display font-black uppercase leading-[0.95] text-[clamp(2rem,5vw,3.25rem)]">
            Interests
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {interests.map((it, i) => (
            <motion.div
              key={it.name}
              initial={{ opacity: 0, y: 24, rotate: i % 2 === 0 ? -2 : 2 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              whileHover={{ y: -6 }}
              className="rounded-3xl border border-line bg-paper p-6 flex flex-col gap-4"
            >
              <div className="text-royal">{icons[it.name]}</div>
              <div>
                <h3 className="font-display font-bold uppercase text-lg">
                  {it.name}
                </h3>
                <p className="text-ink/60 text-sm mt-2 leading-snug">
                  {it.blurb}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
