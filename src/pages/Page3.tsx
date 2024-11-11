import React from 'react';
import HoverNav from '../navigation/HoverNav/HoverNav';

interface Page3Props {
    
}

export const Page3 = (props: Page3Props) => {
    return (
        <>
            <h1>Page 3!</h1>
            <HoverNav type='top' to='/page-1'/>
            <HoverNav type='right' to='/page-4'/>
        </>
    );
}
