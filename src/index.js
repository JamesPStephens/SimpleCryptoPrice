import React from 'react';
import { render } from 'react-dom';
import styled from 'styled-components';
import HeaderSection from './Functional Components/HeaderComponents/HeaderSection';
import InfoBanner from './Functional Components/Reusable Components/InfoBanner';
import ListSection from './Functional Components/List Components/ListSection';
import './index.css';


const App = () => {
    return (
        <Wrapper>
            <HeaderSection />
            <InfoBanner infoText={["This website gathers all information from the CoinMarketCap API. More information about the API can be found here ", 
            <a href="https://coinmarketcap.com/api/" target="_blank" rel="noopener noreferrer">Visit CoinMarketCap. </a>]} />
            <ListSection />
        </Wrapper>
    );
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100vw;
    min-height: 100vh;
`


render(<App />, document.getElementById('root'));
