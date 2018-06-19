import React from 'react';
import { Alert } from 'react-bootstrap';
import styled from 'styled-components';

const InfoBanner = ( props ) => (
  <Alert bsStyle="info" className={'Banners'} className='InfoBanner'>
    <TextStyle>{props.infoText}</TextStyle>
  </Alert>
);

export default InfoBanner;

const TextStyle = styled.h3`
  font-size: 2vmin;
  font-family: 'Roboto', sans-serif;
  font-weight: 100;
  color: #616161;
  text-align: center;
`;
