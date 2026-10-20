import React from "react";
import SkillCard from "~/src/components/SkillCard/SkillCard";
import skills from "~/src/data/skills.json";
import styles from "./SkillSection.module.css";

const SkillSection: React.FC = () => {
  return (
    <section>
      <ul className={styles.container}>
        {skills.map((skill) => (
          <SkillCard key={skill.name} skill={skill} />
        ))}
      </ul>
    </section>
  );
};

export default SkillSection;
