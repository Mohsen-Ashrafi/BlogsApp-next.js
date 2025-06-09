import {
  FieldErrors,
  FieldValues,
  Path,
  UseFormRegister,
} from "react-hook-form";
import React from "react";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";

interface Option {
  label: string;
  value: string | number;
}

type RHFSelectProps<T extends FieldValues> = {
  label: string;
  name: Path<T>;
  register: UseFormRegister<T>;
  options: Option[];
  isRequired?: boolean;
  errors?: FieldErrors<T>;
};

const RHFSelect = <T extends FieldValues>({
  label,
  name,
  register,
  options,
  isRequired = false,
  errors,
}: RHFSelectProps<T>) => {
  const hasError = !!errors?.[name];

  return (
    <TextField
      select
      label={label}
      fullWidth
      margin="normal"
      variant="outlined"
      size="medium"
      error={hasError}
      helperText={errors?.[name]?.message as string}
      required={isRequired}
      {...register(name)}
    >
      {options.map((option) => (
        <MenuItem key={option.value} value={option.value}>
          {option.label}
        </MenuItem>
      ))}
    </TextField>
  );
};

export default RHFSelect;


