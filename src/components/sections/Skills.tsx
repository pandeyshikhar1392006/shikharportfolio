"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { skills } from "@/data/content";

const toolIcons: Record<string, React.ReactNode> = {
  "Adobe Premiere Pro": (
    <Image
      src="/logos/vecteezy_adobe-premiere-pro-cc-icon-app-logo-editable-transparent_66118556.png"
      alt="Premiere Pro"
      width={40}
      height={40}
      className="rounded-2xl bg-navy"
    />
  ),
  "Adobe After Effects": (
    <Image
      src="/logos/vecteezy_adobe-after-effects-cc-icon-app-logo-editable-transparent_66118544.png"
      alt="After Effects"
      width={40}
      height={40}
      className="rounded-2xl bg-navy"
    />
  ),
  "Adobe Photoshop": (
    <Image
      src="/logos/vecteezy_adobe-photoshop-cc-icon-app-logo-editable-transparent_67142661.png"
      alt="Photoshop"
      width={40}
      height={40}
      className="rounded-2xl bg-navy"
    />
  ),
  Canva: (
    <Image
      src="/logos/vecteezy_canva-icon-logo-symbol_32329175.png"
      alt="Canva"
      width={40}
      height={40}
      className="rounded-2xl bg-navy"
    />
  ),
  CapCut: (
    <Image
      src="/logos/vecteezy_capcut-square-icon-logo-symbol_55030400.png"
      alt="CapCut"
      width={40}
      height={40}
      className="rounded-2xl bg-navy"
    />
  ),
  Figma: (
    <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-800 text-[10px] font-bold text-white">
      F
    </div>
  ),
  ChatGPT: (
    <Image
      src="/logos/vecteezy_chatgpt-openai-logo-icon_21495993.png"
      alt="ChatGPT"
      width={40}
      height={40}
      className="rounded-2xl bg-navy"
    />
  ),
  Claude: (
    <Image
      src="/logos/vecteezy_claude-ai-logo-rounded-hd_67941712.png"
      alt="Claude"
      width={40}
      height={40}
      className="rounded-2xl bg-navy"
    />
  ),
  ElevenLabs: (
    <Image
      src="/logos/eleven labs.png"
      alt="ElevenLabs"
      width={40}
      height={40}
      className="rounded-2xl bg-navy"
    />
  ),
};

export default function Skills() {
  return (
    <section id="skills" className="px-6 md:px-12 py-20 md:py-28 bg-navy text-cream overflow-hidden relative">
      <div className="mx-auto max-w-6xl">
        <div className="mb-14">
          <p className="font-utility uppercase tracking-[0.3em] text-sky text-xs mb-3">
            Tools of the trade
          </p>
          <h2 className="font-display font-black uppercase leading-[0.95] text-[clamp(2rem,5vw,3.25rem)]">
            Skills &amp; software
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="font-utility text-xs uppercase tracking-widest text-cream/50 mb-5">
              Editing &amp; design
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {skills.software.map((s, i) => (
                <motion.div
                  key={s.name}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  whileHover={{ y: -4 }}
                  className="flex items-center gap-4 rounded-2xl border border-cream/15 bg-cream/5 px-5 py-4 backdrop-blur-sm"
                >
                  {toolIcons[s.name]}
                  <div>
                    <p className="font-display font-bold text-base">{s.name}</p>
                    <p className="font-utility text-[11px] text-sky/80 uppercase tracking-wide mt-1">
                      {s.tag}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-utility text-xs uppercase tracking-widest text-cream/50 mb-5">
              AI-powered workflow
            </h3>
            <div className="flex flex-wrap gap-3">
              {skills.aiTools.map((s, i) => (
                <motion.div
                  key={s.name}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  whileHover={{ y: -4 }}
                  className="flex items-center gap-4 rounded-2xl border border-royal/30 bg-royal/10 px-5 py-4"
                >
                  {toolIcons[s.name]}
                  <div>
                    <p className="font-display font-bold text-base">{s.name}</p>
                    <p className="font-utility text-[11px] text-sky/80 uppercase tracking-wide mt-1">
                      {s.tag}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <p className="mt-8 text-cream/60 text-sm leading-relaxed max-w-sm">
              AI tools sit alongside the editing suite, not instead of it,
              used for ideation, scripting, and voice, while the craft stays
              hands-on.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
