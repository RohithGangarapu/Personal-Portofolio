import * as React from "react";
import { cn } from "@/lib/utils";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  as?: React.ElementType;
}

export function Container({ className, as: Component = "div", ...props }: ContainerProps) {
  return (
    // @ts-ignore
    <Component
      className={cn("container-app", className)}
      {...props}
    />
  );
}
