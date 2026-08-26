import "./Card.css";

interface CardProps {
  heading: string;
  skills: string[];
}

export default function Card({ heading, skills }: CardProps) {
  return (
    <div className="card">
      <h2 className="card-heading">{heading}</h2>
      <ul className="card-skill-list">
        {skills.map((skill) => (
          <li key={skill}>
            {skill}
          </li>
        ))}
      </ul>
      <button>Explore</button>
    </div>
  );
}
