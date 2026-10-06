import Button from "../Button/Button";
import Card from "~/src/components/Card/Card";
import styles from "./SkillCard.module.css";
import Tag from "~/src/components/Tag/Tag";

interface SkillCardProps {
  heading: string;
  skills: string[];
}

export default function SkillCard({ heading, skills }: SkillCardProps) {
  return (
    <Card>
      <h2 className={styles["card-heading"]}>{heading}</h2>
      <ul className={styles["card-skill-list"]}>
        {skills.map((skill) => (
          <Tag as="li" key={skill}>
            {skill}
          </Tag>
        ))}
      </ul>
      <Button>Explore</Button>
    </Card>
  );
}
