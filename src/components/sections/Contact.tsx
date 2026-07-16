"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { profile } from "@/data/content";
import SpinDisc from "@/components/SpinDisc";

export default function Contact() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = (form.elements.namedItem("name") as HTMLInputElement)?.value;
    const message = (form.elements.namedItem("message") as HTMLTextAreaElement)
      ?.value;
    const subject = encodeURIComponent(`Portfolio inquiry from ${name}`);
    const body = encodeURIComponent(message);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <section id="contact" className="relative px-6 md:px-12 py-24 md:py-32">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14"
        >
          <div>
            <p className="font-utility uppercase tracking-[0.3em] text-royal text-xs mb-3">
              Get in touch
            </p>
            <h2 className="font-display font-black uppercase leading-[0.9] text-[clamp(2.2rem,6vw,4rem)]">
              Let&apos;s create
              <br />
              something amazing
            </h2>
          </div>
          <SpinDisc size={110} />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-4"
          >
            <input
              name="name"
              type="text"
              required
              placeholder="Your name"
              className="w-full rounded-xl border border-line bg-paper px-5 py-3.5 text-sm outline-none focus:border-royal transition-colors"
            />
            <input
              name="email"
              type="email"
              required
              placeholder="Your email"
              className="w-full rounded-xl border border-line bg-paper px-5 py-3.5 text-sm outline-none focus:border-royal transition-colors"
            />
            <textarea
              name="message"
              required
              rows={4}
              placeholder="Tell me about your project"
              className="w-full rounded-xl border border-line bg-paper px-5 py-3.5 text-sm outline-none focus:border-royal transition-colors resize-none"
            />
            <button
              type="submit"
              className="rounded-full bg-royal px-7 py-3.5 font-utility text-sm font-medium text-cream hover:bg-royal-deep transition-colors"
            >
              {sent ? "Opening your mail app..." : "Send message"}
            </button>
          </motion.form>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col justify-between gap-8"
          >
            <div>
              <p className="font-utility text-xs uppercase tracking-widest text-ink/50 mb-2">
                Email
              </p>
              <a
                href={`mailto:${profile.email}`}
                className="font-display font-bold text-xl md:text-2xl hover:text-royal transition-colors break-all"
              >
                {profile.email}
              </a>
            </div>

            <div>
              <p className="font-utility text-xs uppercase tracking-widest text-ink/50 mb-2">
                Location
              </p>
              <p className="font-display font-bold text-lg">
                {profile.location}
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row">
              <a
                href={profile.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-ink/20 px-5 py-2.5 font-utility text-sm hover:bg-ink/5 transition-colors"
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
                className="inline-flex items-center gap-2 rounded-full border border-ink/20 px-5 py-2.5 font-utility text-sm hover:bg-ink/5 transition-colors"
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
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
