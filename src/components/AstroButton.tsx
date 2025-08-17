import type React from "react";
import { forwardRef, useState, useRef } from "react";

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

const AstroButton = forwardRef<HTMLButtonElement, AstroButtonProps>(
  (
    {
      children,
      variant = "primary",
      size = "default",
      loading = false,
      loadingText,
      startIcon,
      endIcon,
      fullWidth = false,
      ripple = true,
      className = "",
      onClick,
      disabled,
      ...props
    },
    ref
  ) => {
    const buttonRef = useRef<HTMLButtonElement>(null);
    const [rippleEffect, setRippleEffect] = useState<
      Array<{
        id: number;
        x: number;
        y: number;
        size: number;
      }>
    >([]);

    // Handle ripple effect
    const handleRipple = (e: React.MouseEvent<HTMLButtonElement>) => {
      if (!ripple || disabled || loading) return;
      const button = buttonRef.current;
      if (!button) return;

      const rect = button.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height) * 2;
      const x = e.clientX - rect.left - size / 2;
      const y = e.clientY - rect.top - size / 2;
      const rippleId = Date.now();

      setRippleEffect((prev) => [...prev, { id: rippleId, x, y, size }]);

      setTimeout(() => {
        setRippleEffect((prev) =>
          prev.filter((ripple) => ripple.id !== rippleId)
        );
      }, 600);
    };

    // Handle click with ripple
    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      handleRipple(e);
      onClick?.(e);
    };

    // Base styles for the astro button
    const baseStyles: React.CSSProperties = {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      backgroundSize: "300% 300%",
      backdropFilter: "blur(1rem)",
      borderRadius: "5rem",
      transition: "0.5s",
      animation: "gradient_301 5s ease infinite",
      border: "solid 1px #f9f9f9",
      position: "relative",
      overflow: "hidden",
      cursor: disabled || loading ? "not-allowed" : "pointer",
      opacity: disabled || loading ? 0.6 : 1,
    };

    // Size styles
    const sizeStyles = {
      sm: { width: "10rem", height: "2.5rem", fontSize: "11px" },
      default: { width: "13rem", height: "3rem", fontSize: "13px" },
      lg: { width: "16rem", height: "3.5rem", fontSize: "15px" },
    };

    // Variant styles
    const variantStyles = {
      primary: {
        background:
          "linear-gradient(-45deg, #6b7280, #4b5563, #374151, #1f2937)",
      },
      secondary: {
        background:
          "linear-gradient(-45deg, #64748b, #475569, #334155, #1e293b)",
      },
      outline: {
        background: "transparent",
        border: "solid 2px #d1d5db",
      },
      ghost: {
        background: "rgba(156, 163, 175, 0.1)",
        border: "solid 1px rgba(156, 163, 175, 0.2)",
      },
    };

    const textStyle: React.CSSProperties = {
      zIndex: 2,
      letterSpacing: "normal",
      color: "#f9fafb",
      textShadow: "0 0 2px rgba(255, 255, 255, 0.3)",
      fontWeight: "medium",
    };

    return (
      <>
        {/* CSS Styles */}
        <style>{`
          @keyframes gradient_301 {
            0% {
              background-position: 0% 50%;
            }
            50% {
              background-position: 100% 50%;
            }
            100% {
              background-position: 0% 50%;
            }
          }

          @keyframes animStar {
            from {
              transform: translateY(0);
            }
            to {
              transform: translateY(-135rem);
            }
          }

          @keyframes animStarRotate {
            from {
              transform: rotate(360deg);
            }
            to {
              transform: rotate(0);
            }
          }

          .astro-stars {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            overflow: hidden;
            border-radius: 5rem;
            z-index: 1;
          }

          .astro-stars::after {
            content: "";
            position: absolute;
            top: -10rem;
            left: -100rem;
            width: 200rem;
            height: 200rem;
            background-image: radial-gradient(#e5e7eb 1px, transparent 1%);
            background-size: 50px 50px;
            animation: animStarRotate 90s linear infinite;
          }

          .astro-stars::before {
            content: "";
            position: absolute;
            top: 0;
            left: -50%;
            width: 170%;
            height: 500%;
            background-image: radial-gradient(#e5e7eb 1px, transparent 1%);
            background-size: 50px 50px;
            opacity: 0.5;
            animation: animStar 60s linear infinite;
          }

          .ripple-effect {
            position: absolute;
            background: rgba(229, 231, 235, 0.3);
            border-radius: 50%;
            transform: scale(0);
            animation: ripple 0.6s linear;
            pointer-events: none;
          }

          @keyframes ripple {
            to {
              transform: scale(4);
              opacity: 0;
            }
          }
        `}</style>

        <button
          ref={(node) => {
            if (typeof ref === "function") {
              ref(node);
            } else if (ref) {
              ref.current = node;
            }
          }}
          style={{
            ...baseStyles,
            ...sizeStyles[size],
            ...variantStyles[variant],
            ...(fullWidth && { width: "100%" }),
          }}
          className={className}
          onClick={handleClick}
          disabled={disabled || loading}
          {...props}
        >
          {/* Stars container */}
          <div className="astro-stars" />

          {/* Ripple effects */}
          {ripple &&
            rippleEffect.map((ripple) => (
              <span
                key={ripple.id}
                className="ripple-effect"
                style={{
                  width: `${ripple.size}px`,
                  height: `${ripple.size}px`,
                  left: `${ripple.x}px`,
                  top: `${ripple.y}px`,
                }}
              />
            ))}

          {/* Loading spinner */}
          {loading && (
            <div
              style={{
                ...textStyle,
                animation: "spin 1s linear infinite",
                marginRight: "8px",
              }}
            >
              ⟳
            </div>
          )}

          {/* Start icon */}
          {!loading && startIcon && (
            <span style={{ ...textStyle, marginRight: "8px" }}>
              {startIcon}
            </span>
          )}

          {/* Button text */}
          <span style={{ ...textStyle, fontSize: sizeStyles[size].fontSize }}>
            {loading && loadingText ? loadingText : children}
          </span>

          {/* End icon */}
          {!loading && endIcon && (
            <span style={{ ...textStyle, marginLeft: "8px" }}>{endIcon}</span>
          )}
        </button>
      </>
    );
  }
);

AstroButton.displayName = "AstroButton";

export { AstroButton };
export type { AstroButtonProps };
