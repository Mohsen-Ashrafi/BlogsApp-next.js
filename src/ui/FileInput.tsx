"use client";
import React from "react";
import { Box, Typography, FormHelperText, FormControl } from "@mui/material";
import { ArrowUpTrayIcon } from "@heroicons/react/24/outline";

interface FileInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name: string;
  value?: string;
  dir?: "ltr" | "rtl";
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  isRequired?: boolean;
  className?: string;
  errors?: Record<string, { message?: string }>;
}

const FileInput: React.FC<FileInputProps> = ({
  label,
  name,
  value,
  onChange,
  errors,
  ...rest
}) => {
  const hasError = !!errors?.[name];

  return (
    <FormControl fullWidth error={hasError}>
      <input
        type="file"
        id={name}
        onChange={onChange}
        style={{ display: "none" }}
        {...rest}
      />
      <label htmlFor={name}>
        <Box
          sx={{
            border: "2px dashed #9c27b0",
            borderRadius: 2,
            p: 4,
            textAlign: "center",
            cursor: "pointer",
            transition: "all 0.3s",
            "&:hover": {
              backgroundColor: "#f3e5f5",
            },
          }}
        >
          <ArrowUpTrayIcon className="w-8 h-8 mx-auto text-purple-700" />
          <Typography variant="body1" mt={2}>
            {label}
          </Typography>
          <Typography variant="caption" color="text.secondary">
            Drag & drop or click to upload
          </Typography>
          {value && (
            <Typography
              variant="subtitle2"
              color="text.primary"
              sx={{ mt: 2, wordBreak: "break-word" }}
            >
              Selected file: <strong>{value}</strong>
            </Typography>
          )}
        </Box>
      </label>

      {hasError && (
        <FormHelperText sx={{ mt: 1 }}>
          {String(errors[name]?.message)}
        </FormHelperText>
      )}
    </FormControl>
  );
};

export default FileInput;
