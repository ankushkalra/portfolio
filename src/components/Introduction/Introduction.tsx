import React from "react";
import styles from "./Introduction.module.css";
import LinkedIn from "jsx:~/src/images/linkedin-negative.svg";
import Document from "jsx:~/src/images/attachment-negative.svg";
import Github from "jsx:~/src/images/github-negative.svg";
import SocialItem from "~/src/components/SocialItem/SocialItem";

const Introduction: React.FC<object> = () => {
  return (
    <>
      <p
        style={{
          color: "white",
          fontSize: "var(--font-size-extra-large)",
          fontStyle: "italic",
          fontFamily: "serif",
        }}
      >
        I make complex things feel simple
      </p>
      <div>
        <p className={`${styles.title} ${styles.gradientText}`}>Ankush Kalra</p>
        <p className={styles.title}>Senior Software Engineer</p>
        <div className={styles["social-items-grid"]}>
          <SocialItem
            link={"https://www.linkedin.com/in/ankushkalra"}
            title="LinkedIn"
          >
            <LinkedIn />
          </SocialItem>
          <SocialItem
            link={"https://www.github.com/ankushkalra"}
            title="Resume"
          >
            <Document />
          </SocialItem>
          <SocialItem
            link={"https://www.github.com/ankushkalra"}
            title="Github"
          >
            <Github />
          </SocialItem>
        </div>
      </div>
    </>
  );
};

export default Introduction;
