import { HTMLAttributes } from "react";

export default function Button({
  children,
  ...rest
}: HTMLAttributes<HTMLButtonElement>) {
  return <button {...rest}>{children}</button>;
}
