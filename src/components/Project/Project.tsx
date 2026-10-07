import styles from "./Project.module.css";
import Card from "~/src/components/Card/Card";

interface ProjectProps {
  project: {
    title: string;
    description: string;
    short_description: string;
  };
}

export default function Project({ project }: ProjectProps) {
  const { title, short_description } = project;
  return (
    <Card>
      {/* <img src={null} alt={`${name} project image`} /> */}
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{short_description}</p>
    </Card>
  );
}
