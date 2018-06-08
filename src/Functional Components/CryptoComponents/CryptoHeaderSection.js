import React from 'react';
import CryptoHeaderItem from './CryptoHeaderItem';
import { Col } from 'react-bootstrap';

const CryptoHeaderSection = () => (
  <Col lg={6} md={6} sm={8} xs={10} className={'CryptoHeader'}>
    <CryptoHeaderItem cryptoHeaderText={'Rank'} />
    <CryptoHeaderItem cryptoHeaderText={'Coin'} />
    <CryptoHeaderItem cryptoHeaderText={'Price'} />
    <CryptoHeaderItem cryptoHeaderText={'Percentage Change (24HR)'} />
  </Col>
);

export default CryptoHeaderSection;
