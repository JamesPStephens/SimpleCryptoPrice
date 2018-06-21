import React from 'react';
import styled from 'styled-components';
import ListData from '../../Class Components/ListData';
import ListHeaderSection from './ListHeaderSection';


const ListSection = () => {
    return (
        <Wrapper>
            <ListHeaderSection />
            <ListData />
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

export default ListSection;