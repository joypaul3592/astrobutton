import type React from "react";
export interface ButtonProps extends React.ComponentProps<"button"> {
    children: React.ReactNode;
    variant?: "primary" | "secondary";
    size?: "small" | "medium" | "large";
}
export declare const Button: React.FC<ButtonProps>;
