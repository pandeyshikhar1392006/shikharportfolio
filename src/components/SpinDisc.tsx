type SpinDiscProps = {
  label?: string;
  size?: number;
  className?: string;
};

export default function SpinDisc({
  label = "CREATIVE EDITOR · DESIGNER · ",
  size = 160,
  className = "",
}: SpinDiscProps) {
  const id = "circlePath";
  return (
    <div
      className={`relative flex items-center justify-center ${className}`}
      style={{ width: size, height: size }}
    >
      <svg
        viewBox="0 0 200 200"
        width={size}
        height={size}
        className="spin-slow"
      >
        <defs>
          <path
            id={id}
            d="M 100,100 m -75,0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0"
          />
        </defs>
        <circle cx="100" cy="100" r="98" fill="var(--navy)" />
        <text fill="var(--cream)" fontSize="12.5" letterSpacing="2">
          <textPath href={`#${id}`} startOffset="0%">
            {label.repeat(2)}
          </textPath>
        </text>
      </svg>
      <div className="absolute inset-0 m-auto flex h-14 w-14 items-center justify-center rounded-full bg-royal">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
          <path d="M8 5v14l11-7z" fill="var(--cream)" />
        </svg>
      </div>
    </div>
  );
}
