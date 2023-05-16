interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: string;
  iconRight?: React.ReactNode;
  iconLeft?: React.ReactNode;
  iconLeftClassName?: string;
  iconRightClassName?: string;
}

export default function Button({
  children,
  iconRight,
  iconLeft,
  iconLeftClassName,
  iconRightClassName,
  color = "orange",
  ...props
}: ButtonProps) {
  return (
    <button
      type="button"
      className={`bg-${color} flex w-max items-center px-6 py-2 gap-2 rounded-md ${props.className ?? ""}`}
      {...props}
    >
      {iconLeft && <div className={iconLeftClassName}>{iconLeft}</div>}
      {children}
      {iconRight && <div className={iconRightClassName}>{iconRight}</div>}
    </button>
  );
}
