export default function PrimeGradient() {
  return (
    <>
      {/* Gradient line */}
      <span className="absolute top-0 z-20 h-0.5 w-[300%] rounded-full bg-radial from-white to-transparent to-70% opacity-70" />
      {/* Gradient circle */}
      <span className="absolute z-20 size-20 -translate-y-[60%] rounded-full bg-radial from-white to-transparent opacity-70 blur-md" />
    </>
  );
}
