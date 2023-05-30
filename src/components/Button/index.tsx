interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: string;
  iconRight?: React.ReactNode;
  iconLeft?: React.ReactNode;
  iconLeftClassName?: string;
  iconRightClassName?: string;
  bgColor?: "bg-orange" | "bg-gray-700";
}

export default function Button({
  children,
  iconRight,
  iconLeft,
  iconLeftClassName,
  iconRightClassName,
  bgColor = "bg-orange",
  ...props
}: ButtonProps) {
  return (
    <button
      type="button"
      className={`${bgColor} flex w-max items-center gap-2 rounded-md px-6 py-2 ${
        props.className ?? ""
      }`}
      {...props}
    >
      {iconLeft && <div className={iconLeftClassName}>{iconLeft}</div>}
      {children}
      {iconRight && <div className={iconRightClassName}>{iconRight}</div>}
    </button>
  );
}
