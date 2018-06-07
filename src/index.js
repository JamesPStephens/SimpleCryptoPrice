import React from 'react';
import { render } from 'react-dom';
import styled from 'styled-components';
import HeaderSection from './Functional Components/HeaderComponents/HeaderSection';
import CryptoSection from './Functional Components/CryptoComponents/CryptoSection';
import InfoBanner from './Functional Components/Reusable Components/InfoBanner';
import './index.css';

const App = () => {
    return (
        <Wrapper>
            <HeaderSection />
            <InfoBanner infoText={["This website gathers all information from the CryptoCompare API. More information about the API can be found here", <a href="https://www.cryptocompare.com/api" target="_blank" rel="noopener noreferrer"> Visit CryptoCompare </a>]} />
            <CryptoSection />
        </Wrapper>
    );
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: 100vh;
`


render(<App />, document.getElementById('root'));
