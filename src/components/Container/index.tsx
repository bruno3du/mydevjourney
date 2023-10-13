interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export default function Container({
  children,
  className,
  ...props
}: ContainerProps) {
  return (
    <div
      className={`min-h-[106px] rounded-md ${className ?? ""}`}
      {...props}
    >
      {children}
    </div>
  );
}
