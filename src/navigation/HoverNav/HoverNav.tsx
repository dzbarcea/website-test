import React from 'react';
import './HoverNav.css';
import {useNavigate} from 'react-router-dom';

interface HoverNavProps {
    type: 'top' | 'bottom' | 'left' | 'right';
    to: string;
}

const HoverNav = ({ type, to }: HoverNavProps) => {
    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate(to);
    }

    return (
        <div className={`hover-${type}`} onMouseEnter={handleNavigate}></div>
    );
}

export default HoverNav;