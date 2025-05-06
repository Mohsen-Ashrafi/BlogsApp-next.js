import { ChangeEvent } from "react";

interface TextFieldProps {
  type?: string;
  label: string;
  name: string;
  value: string;
  dir: "ltr" | "rtl";
  isRequired: boolean;
  className?: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

function TextField({
  type = "text",
  label,
  name,
  value,
  dir = "ltr",
  onChange,
  isRequired,
  className,
}: TextFieldProps) {
  return (
    <div className="textField">
      <label htmlFor={name} className="text-secondary-600 text-sm">
        {label}
        {isRequired && <span className="text-error">*</span>}
      </label>
      <input
        type={type}
        name={name}
        id={name}
        dir={dir}
        className={`textField__input ${
          dir === "ltr" ? "text-left" : "text-right"
        } ${className}`}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}
export default TextField;
