import React from 'react';
import styled from 'styled-components';
import { Col } from 'react-bootstrap';

const CryptoHeaderItem = props => (
  <Col xs={3} sm={3} md={3} lg={3}>
    <TextStyle>{props.cryptoHeaderText}</TextStyle>
  </Col>
);

const TextStyle = styled.h3`
  color: #f1f2f6;
  font-size: 3vmin;
  font-family: 'Roboto', sans-serif;
  font-weight: 100;
  text-align: center;
`;

export default CryptoHeaderItem;
