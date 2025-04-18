import { FC, PropsWithChildren } from "react";
import styles from "./styles.module.css";

export const Container: FC<PropsWithChildren> = ({ children }) => (
  <div className={styles.container}>{children}</div>
);
