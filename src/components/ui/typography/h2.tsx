import { cn } from "@/lib/utils";
import { ComponentProps } from "react";

interface ITypography extends ComponentProps<"h2"> {}

export const h2: React.FC<ITypography> = ({
  children,
  className,
  ...props
}) => {
  return (
    <h2
      className={cn(
        "scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0",
        className,
      )}
      {...props}
    >
      {children}
    </h2>
  );
};
