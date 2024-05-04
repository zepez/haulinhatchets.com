import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const sectionVariants = cva("mx-auto px-8 w-full", {
  variants: {
    variant: {
      default: "max-w-4xl",
      small: "max-w-2xl",
      large: "max-w-7xl",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

export interface SectionProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof sectionVariants> {}

function Section({ className, variant, ...props }: SectionProps) {
  return (
    <div className={cn(sectionVariants({ variant }), className)} {...props} />
  );
}

export { Section, sectionVariants };
