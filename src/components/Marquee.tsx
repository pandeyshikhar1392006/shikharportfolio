type MarqueeProps = {
  text: string | string[];
  reverse?: boolean;
  outline?: boolean;
  className?: string;
};

export default function Marquee({
  text,
  reverse = false,
  outline = false,
  className = "",
}: MarqueeProps) {
  const sequence = Array.isArray(text) ? text : [text];
  const items = Array.from({ length: 8 }, (_, index) => sequence[index % sequence.length]);

  return (
    <div className={`w-full overflow-hidden no-scrollbar ${className}`}>
      <div className={reverse ? "marquee-track-reverse" : "marquee-track"}>
        {[...items, ...items].map((t, i) => (
          <span
            key={i}
            className={`font-display font-black uppercase whitespace-nowrap px-6 text-[clamp(2rem,7vw,5rem)] leading-none ${
              outline ? "text-outline" : ""
            }`}
          >
            {t}
            <span className="inline-block mx-6 align-middle">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
