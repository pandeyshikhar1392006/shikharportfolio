"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { profile } from "@/data/content";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-navy text-cream pt-16 pb-20">
      <div className="pointer-events-none absolute left-[-6rem] top-0 h-72 w-72 rounded-full bg-royal/10 blur-3xl" />
      <div className="pointer-events-none absolute right-[-5rem] bottom-0 h-64 w-64 rounded-full bg-sky/10 blur-3xl" />

      <div className="relative z-10">
        <div className="mx-auto max-w-6xl px-6 md:px-12 mt-16 grid gap-10 md:grid-cols-3 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="space-y-3"
          >
            <p className="font-display font-bold text-lg">{profile.name}</p>
            <p className="text-cream/50 text-sm mt-1">{profile.title}</p>
            <p className="max-w-sm text-cream/60 text-sm leading-relaxed">
              A video editor and designer building campaign visuals, motion, and digital content with a bold, modern edge.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col gap-3"
          >
            {[
              { label: "About", href: "#about" },
              { label: "Work", href: "#work" },
              { label: "Resume", href: "#resume" },
              { label: "Contact", href: "#contact" },
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="inline-flex items-center gap-2 text-sm text-cream/70 uppercase tracking-[0.25em] hover:text-cream transition-colors"
              >
                <span className="h-2 w-2 rounded-full bg-royal" />
                {link.label}
              </a>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col gap-3"
          >
            <a
              href={profile.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-2xl border border-cream/10 bg-cream/5 px-5 py-3 text-sm text-cream transition-all duration-300 hover:-translate-y-1 hover:bg-cream/10"
            >
              <span className="relative h-5 w-5">
                <Image
                  src="/logos/vecteezy_instagram-logo-png-instagram-icon-transparent_18930415.png"
                  alt="Instagram"
                  fill
                  className="object-contain"
                />
              </span>
              Instagram
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-2xl border border-cream/10 bg-cream/5 px-5 py-3 text-sm text-cream transition-all duration-300 hover:-translate-y-1 hover:bg-cream/10"
            >
              <span className="relative h-5 w-5">
                <Image
                  src="/logos/vecteezy_linkedin-logo-png-linkedin-icon-transparent-png_18930587.png"
                  alt="LinkedIn"
                  fill
                  className="object-contain"
                />
              </span>
              LinkedIn
            </a>
            <a
              href={profile.resumeFile}
              download
              className="rounded-2xl border border-royal bg-royal px-5 py-3 text-sm font-semibold text-navy transition-all duration-300 hover:-translate-y-1 hover:bg-royal-deep"
            >
              Download CV
            </a>
          </motion.div>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center text-cream/30 text-xs mt-12 font-utility"
        >
          Designed by {profile.name}.
        </motion.p>
      </div>
    </footer>
  );
}
