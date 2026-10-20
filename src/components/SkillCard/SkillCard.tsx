import React from "react";
import { Skill } from "~/src/types/skill";
import styles from "./SkillCard.module.css";

interface SkillCardProps {
  skill: Skill;
}

const SkillCard: React.FC<SkillCardProps> = ({ skill }) => {
  return <li className={styles.skill}>{skill.name}</li>;
};

export default SkillCard;
