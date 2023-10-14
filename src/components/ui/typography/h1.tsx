import { cn } from "@/lib/utils";
import { ComponentProps } from "react";

interface ITypography extends ComponentProps<"h1"> {}

export const h1 = ({ children, className, ...props }: ITypography) => {
  return (
    <h1
      className={cn(
        "scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl",
        className,
      )}
      {...props}
    >
      {children}
    </h1>
  );
};
