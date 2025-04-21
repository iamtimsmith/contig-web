import clsx from "clsx";
import { type AllHTMLAttributes, type ElementType, type FC } from "react";
import styles from "./styles.module.css";
import type { LinkProps } from "react-router";

interface ButtonProps
  extends Omit<
    AllHTMLAttributes<HTMLAnchorElement | HTMLButtonElement | HTMLDivElement>,
    "as"
  > {
  as?: ElementType;
  variant?: "primary" | "secondary";
  to?: string;
}

export const Button: FC<ButtonProps> = ({
  as = "button",
  className,
  variant = "primary",
  ...props
}) => {
  const Component = as;

  return (
    <Component
      className={clsx([styles.button, styles[variant], className])}
      {...props}
    />
  );
};
