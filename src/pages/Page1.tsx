import React from 'react';
import HoverNav from '../navigation/HoverNav/HoverNav';

interface Page1Props {

}

export const Page1 = (props: Page1Props) => {
    return (
        <div className='body-container'>
            <h1>Page 1!</h1>
            <HoverNav type='bottom' to='/page-3'/>
            <HoverNav type='right' to='/page-2'/>
        </div>
    );
}