import styles from "./Project.module.css";

interface ProjectProps {
  project: {
    title: string;
    description: string;
  };
}

export default function Project({ project }: ProjectProps) {
  const { title, description } = project;
  return (
    <li className={styles.project}>
      {/* <img src={null} alt={`${name} project image`} /> */}
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </li>
  );
}
