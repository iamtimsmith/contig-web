import clsx from "clsx";
import { FC, HTMLAttributes } from "react";
import styles from "./styles.module.css";

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  variant: "primary" | "secondary";
}

export const Button: FC<ButtonProps> = ({
  className,
  variant = "primary",
  children,
  ...props
}) => (
  <button
    className={clsx([styles.button, styles[variant], className])}
    {...props}
  >
    {children}
  </button>
);
