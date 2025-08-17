import type React from "react";
interface AstroButtonProps extends React.ComponentProps<"button"> {
    children: React.ReactNode;
    variant?: "primary" | "secondary" | "outline" | "ghost";
    size?: "sm" | "default" | "lg";
    loading?: boolean;
    loadingText?: string;
    startIcon?: React.ReactNode;
    endIcon?: React.ReactNode;
    fullWidth?: boolean;
    ripple?: boolean;
}
declare const AstroButton: React.ForwardRefExoticComponent<Omit<AstroButtonProps, "ref"> & React.RefAttributes<HTMLButtonElement>>;
export { AstroButton };
export type { AstroButtonProps };
