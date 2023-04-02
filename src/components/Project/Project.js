import React from 'react';
import './Project.css';

export default function Project({ project = {}, test = {} }) {
  const { name, description, image } = project;
  return (
    <div className="project">
      <img src="" alt={`${name} project image`} />
      <div>
        <p>{name}</p>
        <p>{description}</p>
      </div>
    </div>
  );
}
