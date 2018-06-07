import React from 'react';
import HeaderText from './HeaderText'
import { Navbar } from 'react-bootstrap';

const HeaderSection = () => {
    return (
        <Navbar className="Header" staticTop={true}>
            <HeaderText />
        </Navbar>
    );
}


export default HeaderSection;