import * as React from "react";
import { cn } from "@/lib/utils";

// Replacing with a simpler button that doesn't need radix slot right now.
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
  variant?: "default" | "outline" | "ghost" | "link";
  size?: "default" | "sm" | "lg" | "icon";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", asChild = false, children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "group relative inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors overflow-hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
          {
            "bg-brand-maroon text-white hover:bg-brand-maroon/90 shadow-md": variant === "default",
            "border border-brand-gold bg-transparent text-brand-maroon hover:bg-brand-beige": variant === "outline",
            "hover:bg-brand-beige hover:text-brand-maroon": variant === "ghost",
            "text-brand-maroon underline-offset-4 hover:underline": variant === "link",
            "h-10 px-4 py-2": size === "default",
            "h-9 rounded-md px-3": size === "sm",
            "h-14 rounded-md px-8 text-lg": size === "lg",
            "h-10 w-10": size === "icon",
          },
          className
        )}
        {...props}
      >
        <span className="relative z-10 flex items-center justify-center gap-2 w-full h-full">
          {children}
        </span>
        {variant !== "link" && variant !== "ghost" && (
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent z-0 group-hover:animate-[shimmer_1.5s_infinite]" style={{ transform: 'translateX(-100%) skewX(-12deg)' }} />
        )}
      </button>
    );
  }
);
Button.displayName = "Button";

export { Button };
