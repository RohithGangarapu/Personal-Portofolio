import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "@/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg" | "icon";
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-white disabled:opacity-50 disabled:pointer-events-none ring-offset-black",
          {
            "bg-[#EDEDED] text-[#0A0A0A] hover:bg-[#D4D4D4]": variant === "primary",
            "bg-surface text-primary hover:bg-surface-hover": variant === "secondary",
            "border border-border hover:bg-surface text-primary": variant === "outline",
            "hover:bg-surface text-primary": variant === "ghost",
            "h-9 px-4 py-2": size === "md",
            "h-8 px-3 text-xs": size === "sm",
            "h-11 px-8": size === "lg",
            "h-9 w-9": size === "icon",
          },
          className
        )}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button };
