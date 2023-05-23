import { InputHTMLAttributes } from "react";

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name: string;
}

export default function Input({ label, name, ...rest }: IProps) {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <input id={name} {...rest} />
    </div>
  );
}
