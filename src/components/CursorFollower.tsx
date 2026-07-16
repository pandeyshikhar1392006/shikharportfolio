"use client";

import { useEffect, useRef, useState } from "react";

export default function CursorFollower() {
  const dotRef = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const isFinePointer = window.matchMedia("(pointer: fine)").matches;
    setEnabled(isFinePointer);
    if (!isFinePointer) return;

    let x = 0;
    let y = 0;
    let curX = 0;
    let curY = 0;

    const onMove = (e: MouseEvent) => {
      x = e.clientX;
      y = e.clientY;
    };

    let raf = 0;
    const animate = () => {
      curX += (x - curX) * 0.15;
      curY += (y - curY) * 0.15;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${curX - 12}px, ${curY - 12}px, 0)`;
      }
      raf = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", onMove);
    raf = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  if (!enabled) return null;

  return (
    <div
      ref={dotRef}
      className="pointer-events-none fixed left-0 top-0 z-[70] h-6 w-6 rounded-full border border-royal/60 mix-blend-multiply hidden md:block"
      aria-hidden="true"
    />
  );
}
