import { HTMLAttributes } from "react";

interface IProps extends HTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  disabled?: boolean;
  classNames?: string;
}

export default function Button({
  children,
  disabled,
  classNames = "",
  ...rest
}: IProps) {
  return (
    <button
      {...rest}
      disabled={disabled}
      className={`bg-yellow-300 py-2 px-4 ${
        disabled ? "bg-yellow-100" : ""
      } ${classNames}`}
    >
      {children}
    </button>
  );
}
