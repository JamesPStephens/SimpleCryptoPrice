import React from 'react';
import styled from 'styled-components';

const HeaderText = (props) => {
    return (
        <TextStyle>SimpleCryptoPrice<TextStyleSmall>.com</TextStyleSmall></TextStyle>
    );
}

const TextStyle = styled.h3`
        color: #ffffff;
        font-size: 4vmin;
        font-family: 'Roboto', sans-serif;
        font-weight: 100;
    `   
const TextStyleSmall = styled.span`
        color: #ffffff;
        font-size: 2vmin;
        font-family: 'Roboto', sans-serif;
        font-weight: 100;
`

export default HeaderText;