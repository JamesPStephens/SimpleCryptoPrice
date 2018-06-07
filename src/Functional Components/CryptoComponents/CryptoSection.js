import React from 'react';
import styled from 'styled-components';
import CryptoList from './CryptoList';
import CryptoHeaderSection from './CryptoHeaderSection';


const CryptoSection = () => {
    return (
        <Wrapper>
            <CryptoHeaderSection />
            <CryptoList />
        </Wrapper>
    );
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 85vh;
`

export default CryptoSection;