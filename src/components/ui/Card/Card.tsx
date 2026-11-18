import React, { PropsWithChildren } from "react";
import styles from "./Card.module.css";

const Card: React.FC<PropsWithChildren> = ({ children }) => {
  return <li className={styles.card}>{children}</li>;
};

export default Card;
