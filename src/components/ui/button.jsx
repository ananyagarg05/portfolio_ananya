import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-full text-base font-semibold transition-all duration-200 ease-in-out",
  {
    variants: {
      variant: {
        default: "bg-accent text-primary hover:bg-accent-hover",
        primary:
          "bg-accent text-black hover:bg-accent-hover hover:text-white shadow-lg",
        outline:
          "border border-accent bg-transparent text-accent hover:bg-accent-hover hover:text-white",
      },
      size: {
        default: "h-[44px] px-6",
        md: "h-[48px] px-8",
        lg: "h-[56px] px-10 text-sm uppercase tracking-[2px]",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

const Button = React.forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
