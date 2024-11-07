import React from 'react';
import HoverNav from '../navigation/HoverNav/HoverNav';

interface Page4Props {
    
}

export const Page4 = (props: Page4Props) => {
    return (
        <div className='body-container'>
            <h1>Page 4!</h1>
            <HoverNav type='top' to='/page-2'/>
            <HoverNav type='left' to='/page-3'/>
        </div>
    );
}
