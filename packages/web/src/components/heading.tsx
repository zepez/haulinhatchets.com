import { cn } from "@/lib/utils";
import { createElement, ElementType } from "react";

interface Props extends React.HTMLAttributes<HTMLElement> {
  as?: ElementType;
}

export const Heading = ({
  children,
  id,
  className,
  as: Component = "p",
}: Props) => {
  return createElement(
    Component,
    {
      id,
      className: cn(
        className,
        "font-cal mb-4 text-4xl font-semibold md:text-5xl",
      ),
    },
    children,
  );
};
