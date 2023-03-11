import React from 'react';
import './Card.css';

export default function Card() {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20
      }}
    >
      <div className="card">Hi!</div>
    </div>
  );
}
