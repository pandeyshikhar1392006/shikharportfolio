"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

type WorkAudioContextValue = {
  workOpen: boolean;
  setWorkOpen: (open: boolean) => void;
  backgroundEnabled: boolean;
  toggleBackgroundAudio: () => void;
};

const WorkAudioContext = createContext<WorkAudioContextValue | undefined>(
  undefined
);

export function WorkAudioProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [workOpen, setWorkOpen] = useState(false);
  const [backgroundEnabled, setBackgroundEnabled] = useState(false);
  const [userInteracted, setUserInteracted] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    if (workOpen || !backgroundEnabled) {
      audio.pause();
      return;
    }

    if (!userInteracted) return;

    audio
      .play()
      .catch(() => {
        // autoplay may be blocked until user interacts
      });
  }, [workOpen, backgroundEnabled, userInteracted]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.loop = true;
    audio.preload = "auto";
    audio.volume = 0.18;
    audio.muted = false;
  }, []);

  useEffect(() => {
    const audio = audioRef.current;
    const onScroll = () => {
      setBackgroundEnabled(true);
      setUserInteracted(true);
      if (audio && !workOpen) {
        audio.play().catch(() => {});
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true, once: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [workOpen]);

  const toggleBackgroundAudio = () => {
    setBackgroundEnabled((current) => !current);
  };

  const value = useMemo(
    () => ({ workOpen, setWorkOpen, backgroundEnabled, toggleBackgroundAudio }),
    [workOpen, backgroundEnabled]
  );

  return (
    <WorkAudioContext.Provider value={value}>
      <audio ref={audioRef} src="/audio/background.mp3" />
      {children}
      <div className="fixed right-4 top-1/2 z-50 hidden -translate-y-1/2 flex-col gap-3 md:flex">
        <button
          type="button"
          onClick={toggleBackgroundAudio}
          aria-label={backgroundEnabled ? "Pause background music" : "Play background music"}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-cream/30 bg-navy/90 text-cream shadow-[0_10px_30px_rgba(0,0,0,0.2)] transition-transform duration-200 hover:-translate-y-1"
        >
          {backgroundEnabled ? (
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
              <path d="M5 9v6h4l5 5V4L9 9H5z" />
              <path d="M16.5 12c0-1.77-.77-3.37-2-4.47v8.94c1.23-1.1 2-2.7 2-4.47z" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
              <path d="M16.5 12c0-1.77-.77-3.37-2-4.47v8.94c1.23-1.1 2-2.7 2-4.47z" opacity="0.3" />
              <path d="M5 9v6h4l5 5V4L9 9H5z" />
              <path d="M19 4.27L17.73 3 2 18.73 3.27 20 5 18.27V15h4l5 5v-3.73l4.73 4.73 1.27-1.27L19 4.27z" />
            </svg>
          )}
        </button>
      </div>
    </WorkAudioContext.Provider>
  );
}

export function useWorkAudio() {
  const context = useContext(WorkAudioContext);
  if (!context) {
    throw new Error("useWorkAudio must be used within WorkAudioProvider");
  }
  return context;
}
