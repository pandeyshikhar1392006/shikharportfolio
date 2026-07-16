"use client";

import { motion } from "framer-motion";
import { experience } from "@/data/content";

export default function Experience() {
  return (
    <section id="experience" className="px-6 md:px-12 py-20 md:py-28">
      <div className="mx-auto max-w-4xl">
        <div className="mb-14">
          <p className="font-utility uppercase tracking-[0.3em] text-royal text-xs mb-3">
            Two years, one thread
          </p>
          <h2 className="font-display font-black uppercase leading-[0.95] text-[clamp(2rem,5vw,3.25rem)]">
            Experience
          </h2>
        </div>

        <div className="relative border-l border-line pl-8 md:pl-12 space-y-12">
          {experience.map((item, i) => (
            <motion.div
              key={item.role + item.org}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="relative"
            >
              <span className="absolute -left-[2.55rem] md:-left-[3.15rem] top-1.5 h-3 w-3 rounded-full bg-royal ring-4 ring-cream" />
              <p className="font-utility text-xs uppercase tracking-widest text-ink/50 mb-1">
                {item.period}
              </p>
              <h3 className="font-display font-bold text-xl uppercase">
                {item.role}
                <span className="text-royal"> at {item.org}</span>
              </h3>
              <p className="text-ink/70 mt-2 max-w-xl">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
