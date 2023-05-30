import { type SVGProps } from "react";

export default function ButtonHamburger(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="40"
      height="19"
      viewBox="0 0 40 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <line y1="1.5" x2="40" y2="1.5" stroke="white" strokeWidth="3" />
      <line y1="9.5" x2="40" y2="9.5" stroke="white" strokeWidth="3" />
      <path d="M14.5 17.5H40" stroke="white" strokeWidth="3" />
    </svg>
  );
}
