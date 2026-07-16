"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import { enactusCaseStudy } from "@/data/content";
import Lightbox from "@/components/Lightbox";

export default function EnactusCaseStudy() {
  const [openId, setOpenId] = useState<string | null>(null);
  const activeImage = enactusCaseStudy.images.find((img) => img.id === openId);

  return (
    <section
      id="case-study"
      className="px-6 md:px-12 py-20 md:py-28 bg-navy text-cream"
    >
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-16"
        >
          <p className="font-utility uppercase tracking-[0.3em] text-sky text-xs mb-3">
            Case study
          </p>
          <h2 className="font-display font-black uppercase leading-[0.95] text-[clamp(2rem,5vw,3.25rem)] mb-6">
            Enactus council
            <br />
            announcement campaign
          </h2>
          <p className="text-cream/70 text-sm md:text-base">
            {enactusCaseStudy.role}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {[
            { label: "The brief", text: enactusCaseStudy.challenge },
            { label: "The approach", text: enactusCaseStudy.approach },
            { label: "The reflection", text: enactusCaseStudy.reflection },
          ].map((block, i) => (
            <motion.div
              key={block.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-2xl border border-cream/15 bg-cream/5 p-6"
            >
              <p className="font-utility text-[11px] uppercase tracking-widest text-sky mb-3">
                {String(i + 1).padStart(2, "0")}. {block.label}
              </p>
              <p className="text-cream/75 text-sm leading-relaxed">
                {block.text}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {enactusCaseStudy.images.map((img, i) => (
            <motion.button
              key={img.id}
              type="button"
              onClick={() => setOpenId(img.id)}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative aspect-[3/4] rounded-2xl overflow-hidden border border-cream/10"
            >
              <Image
                src={img.image}
                alt={img.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 90vw, 30vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute inset-x-0 bottom-0 bg-navy/80 backdrop-blur-sm px-4 py-3">
                <p className="font-utility text-xs text-cream/90">
                  {img.title}
                </p>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      <Lightbox open={Boolean(openId)} onClose={() => setOpenId(null)}>
        {activeImage ? (
          <div className="relative h-[80vh] w-[min(90vw,960px)] sm:w-[760px]">
            <Image
              src={activeImage.image}
              alt={activeImage.title}
              fill
              className="rounded-3xl object-contain"
            />
          </div>
        ) : null}
      </Lightbox>
    </section>
  );
}
