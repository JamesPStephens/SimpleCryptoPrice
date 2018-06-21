import React from 'react';
import ListHeaderItem from './ListHeaderItem';
import { Col } from 'react-bootstrap';

const ListHeaderSection = () => (
  <Col lg={6} md={6} sm={10} xs={11} className={'CryptoHeader'}>
    <ListHeaderItem cryptoHeaderText={'Rank'} />
    <ListHeaderItem cryptoHeaderText={'Coin'} />
    <ListHeaderItem cryptoHeaderText={'Price'} />
    <ListHeaderItem cryptoHeaderText={'Percentage Change (24HR)'} />
  </Col>
);

export default ListHeaderSection;
