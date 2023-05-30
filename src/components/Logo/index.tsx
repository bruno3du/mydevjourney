interface LogoProps {
  textSize?:
    | "text-xs"
    | "text-sm"
    | "text-md"
    | "text-lg"
    | "text-xl"
    | "text-2xl"
    | "text-3xl"
    | "text-4xl"
    | "text-5xl"
    | "text-6xl";
  className?: string;
}

export default function Logo({ textSize = "text-4xl", className }: LogoProps) {
  return (
    <p
      className={`font-heading ${textSize} font-bold leading-none text-white ${
        className ?? ""
      }`}
    >
      My <span className="text-orange ">DevJourney</span>
    </p>
  );
}
