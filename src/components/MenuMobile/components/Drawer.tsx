interface DrawerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export default function Drawer({ children, className, ...props }: DrawerProps) {
  return (
    <div
      className={`bg-gray-750 absolute top-0 z-[100] h-screen w-screen transition-all md:hidden  ${
        className ?? ""
      }`}
      {...props}
    >
      {children}
    </div>
  );
}
