"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";
import { useWorkAudio } from "@/components/WorkAudioProvider";

type LightboxProps = {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

export default function Lightbox({ open, onClose, children }: LightboxProps) {
  const { setWorkOpen } = useWorkAudio();

  useEffect(() => {
    setWorkOpen(open);
  }, [open, setWorkOpen]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[80] flex items-center justify-center bg-navy/95 backdrop-blur-sm p-4 md:p-10"
          onClick={onClose}
        >
          <button
            onClick={onClose}
            aria-label="Close preview"
            className="absolute top-6 right-6 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-cream/30 text-cream hover:bg-cream/10 transition-colors"
          >
            &times;
          </button>
          <motion.div
            initial={{ scale: 0.94, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.96, opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={(e) => e.stopPropagation()}
            className="relative max-h-full max-w-full"
          >
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
