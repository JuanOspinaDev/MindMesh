// Placeholder.tsx
import React from 'react';
import { IconType } from 'react-icons';
import './Placeholder.css';

interface PlaceholderProps {
  icon: IconType; 
  text: string;
}

const Placeholder: React.FC<PlaceholderProps> = ({ icon: Icon, text }) => (
  <div className="placeholder">
    <Icon className="placeholder-icon" />
    <p className="placeholder-text">{text}</p>
  </div>
);

export default Placeholder;
