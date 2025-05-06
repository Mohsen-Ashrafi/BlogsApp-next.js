import {
  FieldErrors,
  FieldValues,
  Path,
  UseFormRegister,
} from "react-hook-form";
import React from "react";

type RHFTextFieldProps<T extends FieldValues> = {
  label: string;
  name: Path<T>;
  type?: string;
  dir?: "rtl" | "ltr";
  register: UseFormRegister<T>;
  errors?: FieldErrors<T>;
  validationSchema?: Record<string, unknown>;
  className?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

export default function RHFTextField<T extends FieldValues>({
  type = "text",
  label,
  name,
  dir = "rtl",
  register,
  errors,
  validationSchema = {},
  ...rest
}: RHFTextFieldProps<T>) {
  const errorMessages = errors?.[name];
  const hasError = !!(errors && errorMessages);
  return (
    <div
      className={`textField relative ${hasError ? "textField--invalid" : ""}`}
    >
      <label htmlFor={name as string} className="mb-2 block text-secondary-700">
        {label}
      </label>
      <input
        autoComplete="off"
        type={type}
        id={name}
        dir={dir}
        className={`textField__input  ${
          dir === "ltr" ? "text-left" : "text-right"
        }`}
        {...register(name, validationSchema)}
        {...rest}
      />
      {errors && errors[name] && (
        <span className="text-red-600 block text-xs mt-2">
          {String(errors[name]?.message)}
        </span>
      )}
    </div>
  );
}
