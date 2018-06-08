import React from 'react';
import { Alert, Row } from 'react-bootstrap';
import styled from 'styled-components';

const AlertBanner = props => (
  <Row>
    <Alert bsStyle="danger" className={'Banners'}>
      <TextStyle>{props.alertText}</TextStyle>
    </Alert>
  </Row>
);

export default AlertBanner;

const TextStyle = styled.h3`
  font-size: 2vmin;
  font-family: 'Roboto', sans-serif;
  font-weight: 100;
  text-align: center;
`;
