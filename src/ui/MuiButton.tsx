import cn from "clsx";
import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
  className?: string;
}

export default function Button({
  variant = "primary",
  className,
  ...props
}: ButtonProps) {
  const base = "px-6 py-3 rounded-xl font-medium transition duration-300";
  const variants = {
    primary: "bg-indigo-600 text-white hover:bg-indigo-700 shadow",
    secondary: "bg-gray-100 text-gray-800 hover:bg-gray-200",
    outline:
      "text-white bg-secondary-0/30 hover:bg-white hover:text-black shadow",
  };

  return (
    <button {...props} className={cn(base, variants[variant], className)} />
  );
}


// "use client";

// import { Button as MuiButton, ButtonProps as MuiButtonProps } from "@mui/material";
// import { ReactNode } from "react";
// import cn from "clsx";

// type VariantType = "primary" | "secondary" | "outline" | "danger";

// interface CustomMuiButtonProps extends MuiButtonProps {
//   children: ReactNode;
//   variantType?: VariantType;
//   className?: string;
// }

// const btnType: Record<VariantType, string> = {
//   primary: "bg-indigo-600 text-white hover:bg-indigo-700 shadow",
//   secondary: "bg-gray-100 text-gray-800 hover:bg-gray-200",
//   outline: "border border-white text-white hover:bg-white hover:text-black shadow",
//   danger: "bg-red-600 text-white hover:bg-red-700 shadow",
// };

// export default function MuiButton({
//   children,
//   variantType = "primary",
//   className,
//   ...rest
// }: CustomMuiButtonProps) {
//   return (
//     <MuiButton
//       {...rest}
//       className={cn("px-6 py-3 rounded-xl font-medium transition duration-300", btnType[variantType], className)}
//     >
//       {children}
//     </MuiButton>
//   );
// }
