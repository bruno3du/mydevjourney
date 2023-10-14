import { cn } from "@/lib/utils";
import { ComponentProps } from "react";

interface ITypography extends ComponentProps<"blockquote"> {}

export const blockquote: React.FC<ITypography> = ({
  children,
  className,
  ...props
}) => {
  return (
    <blockquote
      className={cn("mt-6 border-l-2 pl-6 italic", className)}
      {...props}
    >
      {children}
    </blockquote>
  );
};
