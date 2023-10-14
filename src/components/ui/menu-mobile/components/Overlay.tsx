import { type HtmlHTMLAttributes } from "react";

export default function Overlay({
  className,
  ...props
}: HtmlHTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={`absolute left-0 top-0 z-50 h-screen w-full bg-black opacity-60 transition-all md:hidden ${
        className ?? ""
      }`}
      {...props}
    />
  );
}
