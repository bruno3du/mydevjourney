import { cn } from "@/lib/utils";
import { ComponentProps } from "react";

interface ITypography extends ComponentProps<"p"> {}

export const p: React.FC<ITypography> = ({ children, className, ...props }) => {
  return (
    <p
      className={cn("leading-7 [&:not(:first-child)]:mt-6", className)}
      {...props}
    >
      {children}
    </p>
  );
};
