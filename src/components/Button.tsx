import type React from "react";

export interface ButtonProps extends React.ComponentProps<"button"> {
  children: React.ReactNode; // বাটনের টেক্সট
  variant?: "primary" | "secondary"; // বাটনের ধরন
  size?: "small" | "medium" | "large"; // বাটনের সাইজ
}

export const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  variant = "primary",
  size = "medium",
  style = {},
  ...props // Spread remaining props to button element
}) => {
  // বেস স্টাইল
  const baseStyles: React.CSSProperties = {
    fontWeight: 500,
    borderRadius: "6px",
    border: "none",
    cursor: "pointer",
    transition: "all 0.2s ease-in-out",
    fontFamily: "inherit",
  };

  // ভ্যারিয়েন্ট অনুযায়ী স্টাইল
  const variantStyles = {
    primary: {
      backgroundColor: "#2563eb",
      color: "white",
    },
    secondary: {
      backgroundColor: "#e5e7eb",
      color: "#111827",
    },
  };

  // সাইজ অনুযায়ী স্টাইল
  const sizeStyles = {
    small: {
      padding: "6px 12px",
      fontSize: "14px",
    },
    medium: {
      padding: "8px 16px",
      fontSize: "16px",
    },
    large: {
      padding: "12px 24px",
      fontSize: "18px",
    },
  };

  // Hover effects
  const handleMouseEnter = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (variant === "primary") {
      e.currentTarget.style.backgroundColor = "#1d4ed8";
    } else {
      e.currentTarget.style.backgroundColor = "#d1d5db";
    }
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (variant === "primary") {
      e.currentTarget.style.backgroundColor = "#2563eb";
    } else {
      e.currentTarget.style.backgroundColor = "#e5e7eb";
    }
  };

  const combinedStyles = {
    ...baseStyles,
    ...variantStyles[variant],
    ...sizeStyles[size],
    ...style,
  };

  return (
    <button
      style={combinedStyles}
      onClick={onClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      {children}
    </button>
  );
};
