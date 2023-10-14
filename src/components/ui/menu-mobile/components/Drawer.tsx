import { cn } from "@/lib/utils";

interface DrawerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export default function Drawer({ children, className, ...props }: DrawerProps) {
  return (
    <div
      className={cn(
        "absolute top-0 z-[100] h-screen w-screen bg-background transition-all md:hidden",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
