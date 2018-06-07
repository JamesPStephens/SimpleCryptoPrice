import React from 'react';
import styled from 'styled-components';
import { Col } from 'react-bootstrap';

const CryptoHeaderItem = (props) => {
    return (
        <Col xs={4} sm={4} md={4} lg={4}>
            <TextStyle>{props.cryptoHeaderText}</TextStyle>
        </Col>
    );
}

const TextStyle = styled.h3`
    color: #F1F2F6;
    font-size: 3vmin;
    font-family: 'Roboto', sans-serif;
    font-weight: 100;
    text-align: center;
`

export default CryptoHeaderItem;