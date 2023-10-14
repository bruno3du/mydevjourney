import { cn } from "@/lib/utils";
import { ComponentProps } from "react";

interface ITypography extends ComponentProps<"code"> {}

export const inlineCode: React.FC<ITypography> = ({
  children,
  className,
  ...props
}) => {
  return (
    <code
      className={cn(
        "relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold",
        className,
      )}
      {...props}
    >
      {children}
    </code>
  );
};
