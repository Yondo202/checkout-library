import * as React from "react";
import * as LabelPrimitive from "@radix-ui/react-label";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/ui/utils";

const labelVariants = cva(
  "text-sm font-normal text-foreground/60 leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
);

const Label = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root> & {
    isError?: boolean;
  } & VariantProps<typeof labelVariants>
>(({ className, isError, ...props }, ref) => (
  <LabelPrimitive.Root
    ref={ref}
    className={cn(
      labelVariants(),
      className,
      isError ? `text-destructive` : ``
    )}
    {...props}
  />
));
Label.displayName = LabelPrimitive.Root.displayName;

export { Label };
