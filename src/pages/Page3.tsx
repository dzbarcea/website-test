import React from 'react';
import HoverNav from '../navigation/HoverNav/HoverNav';

interface Page3Props {
    
}

export const Page3 = (props: Page3Props) => {
    return (
        <div className='body-container'>
            <h1>Page 3!</h1>
            <HoverNav type='top' to='/'/>
            <HoverNav type='right' to='/page-4'/>
        </div>
    );
}
