"use client";
import {
  FieldErrors,
  FieldValues,
  Path,
  UseFormRegister,
} from "react-hook-form";
import TextField from "@mui/material/TextField";
import React from "react";

type RHFTextFieldProps<T extends FieldValues> = {
  label: string;
  name: Path<T>;
  dir?: "rtl" | "ltr";
  register: UseFormRegister<T>;
  errors?: FieldErrors<T>;
  isRequired?: boolean;
  className?: string;
  type?: string;
  size?: "small" | "medium";
  placeholder?: string;
  autoFocus?: boolean;
  disabled?: boolean;
  inputMode?: React.HTMLAttributes<HTMLInputElement>["inputMode"];
  autoComplete?: string;
};

export default function RHFTextField<T extends FieldValues>({
  label,
  name,
  register,
  errors,
  isRequired = false,
  type = "text",
  className,
  size = "medium",
  // dir = "rtl",
  placeholder,
  autoFocus,
  disabled,
  inputMode,
  autoComplete,
}: RHFTextFieldProps<T>) {
  return (
    <TextField
      label={label}
      type={type}
      fullWidth
      variant="outlined"
      margin="normal"
      size={size}
      error={!!errors?.[name]}
      helperText={errors?.[name]?.message as string}
      required={isRequired}
      className={className}
      // inputProps={{ dir }}
      placeholder={placeholder}
      autoFocus={autoFocus}
      disabled={disabled}
      inputMode={inputMode}
      autoComplete={autoComplete}
      {...register(name)}
    />
  );
}
