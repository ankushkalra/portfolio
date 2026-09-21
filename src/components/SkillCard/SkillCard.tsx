import "./SkillCard.css";

interface SkillCardProps {
  heading: string;
  skills: string[];
}

export default function SkillCard({ heading, skills }: SkillCardProps) {
  return (
    <li className="card">
      <h2 className="card-heading">{heading}</h2>
      <ul className="card-skill-list">
        {skills.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
      <button>Explore</button>
    </li>
  );
}
