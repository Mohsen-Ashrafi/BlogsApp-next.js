import { ButtonHTMLAttributes, ReactNode } from "react";

type VariantType = "primary" | "secondary" | "outline" | "danger";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variantType?: VariantType;
  className?: string;
}

const btnType: Record<VariantType, string> = {
  primary: "btn--primary",
  secondary: "btn--secondary",
  outline: "btn--outline",
  danger: "btn--danger",
};

function CustomButton({
  children,
  onClick,
  variantType = "primary",
  className,
  ...rest
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`btn ${btnType[variantType]} ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
}

export default CustomButton;
