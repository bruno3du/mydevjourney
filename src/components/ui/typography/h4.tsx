import { cn } from "@/lib/utils";
import { ComponentProps } from "react";

interface ITypography extends ComponentProps<"h4"> {}

export const h4: React.FC<ITypography> = ({
  children,
  className,
  ...props
}) => {
  return (
    <h4
      className={cn(
        "scroll-m-20 text-xl font-semibold tracking-tight",
        className,
      )}
      {...props}
    >
      {children}
    </h4>
  );
};
