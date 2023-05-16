interface LogoProps {
  size?:
    | "xs"
    | "sm"
    | "md"
    | "lg"
    | "xl"
    | "2xl"
    | "3xl"
    | "4xl"
    | "5xl"
    | "6xl";
}

export default function Logo({ size = "4xl" }: LogoProps) {
  return (
    <div className={`font-heading text-${size} font-bold text-white`}>
      My <span className="text-orange">DevJourney</span>
    </div>
  );
}
