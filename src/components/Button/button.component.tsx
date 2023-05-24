import { HTMLAttributes } from "react";

interface IProps extends HTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  disabled?: boolean;
}
export default function Button({ children, disabled, ...rest }: IProps) {
  console.log(disabled);
  return (
    <button
      {...rest}
      disabled={disabled}
      className={`bg-yellow-300 w-[100px] h-[50px] ${
        disabled ? "bg-yellow-100" : ""
      }`}
    >
      {children}
    </button>
  );
}
