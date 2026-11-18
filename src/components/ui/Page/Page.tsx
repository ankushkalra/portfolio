import React, { PropsWithChildren } from "react";
import styles from "./Page.module.css";

const Page: React.FC<PropsWithChildren> = ({ children }) => {
  return <main className={styles.page}>{children}</main>;
};

export default Page;
