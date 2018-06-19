import React from 'react';
import styled from 'styled-components';
import { Navbar } from 'react-bootstrap';

const HeaderSection = () => {
  return (
    <Navbar className="Header">
      <Navbar.Header>
        <TextStyle>
          SimpleCryptoPrice<TextStyleSmall>.com</TextStyleSmall>
        </TextStyle>
      </Navbar.Header>
    </Navbar>
  );
};

const TextStyle = styled.h3`
  color: #ffffff;
  font-size: 3.5vmin;
  font-family: 'Roboto', sans-serif;
  font-weight: 100;
  text-align: center;
`;
const TextStyleSmall = styled.span`
  color: #ffffff;
  font-size: 2vmin;
  font-family: 'Roboto', sans-serif;
  font-weight: 100;
  text-align: center;
`;

export default HeaderSection;
