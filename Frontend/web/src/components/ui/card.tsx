// src/components/Card/Card.tsx
import React from 'react';
import './Card.css';

interface CardProps {
  title: string;
  content: string;
}

const Card: React.FC<CardProps> = ({ title, content }) => {
  return (
    <div className="card">
      <div className="card-image">
        
      </div>
      <div className="card-content">
        <h3>{title}</h3>
        <p>{content}</p>
      </div>
    </div>
  );
};

export default Card;
