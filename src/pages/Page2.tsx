import React from 'react';
import HoverNav from '../navigation/HoverNav/HoverNav';

interface Page2Props {
    
}

export const Page2 = (props: Page2Props) => {
    return (
        <>
            <h1>Page 2!</h1>
            <HoverNav type='bottom' to='/page-4'/>
            <HoverNav type='left' to='/page-1'/>
        </>
    );
}
