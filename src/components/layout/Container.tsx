import * as React from "react";
import { cn } from "@/lib/utils";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  as?: React.ElementType;
}

export function Container({ className, as: Component = "div", ...props }: ContainerProps) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const Comp: any = Component;
  return (
    <Comp
      className={cn("container-app", className)}
      {...props}
    />
  );
}
