import { useState } from "react";
import styles from "./MobileCard.module.css";

type Props = {
  title: string;
  skills: string[];
  href?: string;
};

export function MobileCard({ title, skills, href }: Props) {
  const [isShining, setIsShining] = useState<boolean>(false);

  const handlePointerDown = (event: React.PointerEvent<HTMLAnchorElement>) => {
    if (event.pointerType === "touch") {
      setIsShining(true);
    }
  };

  const handleAnimationEnd = () => {
    setIsShining(false);
  };
  return (
    <a
      href={href}
      className={`${styles.card} ${isShining ? styles.shining : ""}`}
      onPointerDown={handlePointerDown}
      onAnimationEnd={handleAnimationEnd}
    >
      <div className={styles.leftContainer}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.skills}>{skills.join(" · ")}</p>
      </div>
      <span className={styles.arrow}>↗</span>
    </a>
  );
}
