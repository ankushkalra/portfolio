import React, { PropsWithChildren } from "react";
import styles from "./Button.module.css";

const Button: React.FC<PropsWithChildren> = ({ children }) => {
  return <button className={styles.button}>{children}</button>;
};

export default Button;
