import React, {useState} from 'react';
import HoverNav from '../navigation/HoverNav/HoverNav';
import { useWindowSize } from '@react-hook/window-size';

interface Page1Props {

}

export const Page1 = (props: Page1Props) => {
    const [width, height] = useWindowSize();
    const centerX = width/2;
    const centerY = height/2;

    const [offset, setOffset] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e: React.MouseEvent) => {
        const { innerWidth, innerHeight } = window;

        // Calculate the normalized distance from the center for both x and y
        const x = e.clientX / innerWidth - 0.5;
        const y = e.clientY / innerHeight - 0.5;

        // Apply a quadratic effect
        const xOffset = Math.sign(x) * Math.pow(Math.abs(x), 2) * 100; // Adjust 20 for sensitivity
        const yOffset = Math.sign(y) * Math.pow(Math.abs(y), 2) * 100; // Adjust 20 for sensitivity

        setOffset({ x: xOffset, y: yOffset });
    }

    const backgroundStyle = {
        backgroundPosition: `${50 + offset.x}% ${50 + offset.y}%`,
    };

    return (
        <div
            className='body-container'
            onMouseMove={handleMouseMove}
            style={backgroundStyle}
        >
            <h1>Page 1!</h1>
            <HoverNav type='bottom' to='/page-3'/>
            <HoverNav type='right' to='/page-2'/>
        </div>
    );
}