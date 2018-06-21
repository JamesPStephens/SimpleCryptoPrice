import React from 'react';
import { Row, Col } from 'react-bootstrap';

const ListCard = props => (
  <Row>
    <Col lg={12} md={12} sm={12} xs={12} className={'CryptoCard'}>
      {props.children}
    </Col>
  </Row>
);

export default ListCard;
