// Brand.tsx
import React from 'react';
import { GiDeadWood } from 'react-icons/gi';
import './Brand.css'; 
import { NavLink } from 'react-router-dom';

interface BrandProps {
    onClick?: () => void; 
  }


const Brand: React.FC<BrandProps> = ({ onClick }) => {
    return (
        <NavLink to="/" onClick={onClick} className="brand">
            <GiDeadWood className="logo-icon" />
            <span className="app-title">MindMesh</span>
        </NavLink>
    );
};
export default Brand;
