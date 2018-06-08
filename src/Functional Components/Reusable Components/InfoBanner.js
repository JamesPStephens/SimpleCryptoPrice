import React from 'react';
import { Alert } from 'react-bootstrap';
import styled from 'styled-components';

const InfoBanner = (props) => {
    return (
        <Alert bsStyle="info" className={"Banners"} >
            <TextStyle>{props.infoText}</TextStyle>
        </Alert>
    );
}

export default InfoBanner;

const TextStyle = styled.h3`
    font-size: 2.5vmin;
    font-family: 'Roboto', sans-serif;
    font-weight: 100;
    text-align: center;
`
