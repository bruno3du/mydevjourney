import { cn } from "@/lib/utils";
import { VariantProps, cva } from "class-variance-authority";
import { ComponentProps } from "react";
import { Typography } from "../typography";

const logoVariants = cva("text-red font-bold leading-none", {
  variants: {
    size: {
      default: "text-lg",
      sm: "text-sm",
      lg: "text-lg",
      xl: "text-xl",
      "2xl": "text-2xl",
    },
  },
  defaultVariants: {
    size: "default",
  },
});

interface ITypography
  extends ComponentProps<"p">,
    VariantProps<typeof logoVariants> {}

export default function Logo({ className, size, ...props }: ITypography) {
  return (
    <Typography.p className={cn(logoVariants({ size, className }))} {...props}>
      Bruno Eduardo<span className="text-orange-500">.</span>
    </Typography.p>
  );
}
