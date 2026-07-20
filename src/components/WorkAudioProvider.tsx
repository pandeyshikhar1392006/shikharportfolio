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
  const [audioSrcReady, setAudioSrcReady] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    if (workOpen || !backgroundEnabled) {
      audio.pause();
      return;
    }

    if (!userInteracted) return;

    audio.loop = true;
    audio.currentTime = 0;
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

    const startPlayback = () => {
      setAudioSrcReady(true);
      setBackgroundEnabled(true);
      setUserInteracted(true);
      audio.src = "/audio/background.mp3";
      audio.load();
      audio.currentTime = 0;
      audio.play().catch(() => {});
    };

    startPlayback();
  }, []);

  useEffect(() => {
    const onInteract = () => {
      setAudioSrcReady(true);
      setUserInteracted(true);
    };

    window.addEventListener("pointerdown", onInteract, { once: true });
    window.addEventListener("keydown", onInteract, { once: true });

    return () => {
      window.removeEventListener("pointerdown", onInteract);
      window.removeEventListener("keydown", onInteract);
    };
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
    setUserInteracted(true);
    setBackgroundEnabled((current) => {
      const next = !current;
      const audio = audioRef.current;

      if (!audio) return next;

      if (next) {
        audio.src = "/audio/background.mp3";
        audio.load();
        audio.currentTime = 0;
        audio.play().catch(() => {});
      } else {
        audio.pause();
      }

      return next;
    });
  };

  const value = useMemo(
    () => ({ workOpen, setWorkOpen, backgroundEnabled, toggleBackgroundAudio }),
    [workOpen, backgroundEnabled]
  );

  return (
    <WorkAudioContext.Provider value={value}>
      <audio ref={audioRef} src={audioSrcReady ? "/audio/background.mp3" : undefined} />
      {children}
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
