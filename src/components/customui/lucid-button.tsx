import * as React from "react";
import { Button } from "../ui/button"; // still uses ShadCN’s Button
import { cn } from "@/lib/utils";

export interface LucidButtonProps extends React.ComponentProps<typeof Button> {}

export const LucidButton = React.forwardRef<
  HTMLButtonElement,
  LucidButtonProps
>(({ className, children, ...props }, ref) => {
  return (
    <Button
      ref={ref}
      variant="ghost"
      className={cn(
        "bg-pink-100 text-pink-700 hover:bg-pink-200 hover:text-pink-900 font-bold rounded-xl",
        className
      )}
      {...props}
    >
      Lucid {children}
    </Button>
  );
});

LucidButton.displayName = "LucidButton";
