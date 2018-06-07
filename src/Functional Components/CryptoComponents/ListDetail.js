import React from 'react';
import ListCard from './ListCard';
import ListCardSection from './ListCardSection';
import styled from 'styled-components';

const ListDetail = ({ CryptoInfo }) => {

    const { FROMSYMBOL, PRICE, OPEN24HOUR } = CryptoInfo;

    const roundedPrice = Number((PRICE).toFixed(1));
    const roundedAverage = Number((OPEN24HOUR).toFixed(1));


    return (
        <ListCard>
            <ListCardSection>
                <TextStyle>{FROMSYMBOL}</TextStyle>
            </ListCardSection>
            <ListCardSection>
                <TextStyle>£{roundedPrice}</TextStyle>
            </ListCardSection>
            <ListCardSection>
                <TextStyle>£{roundedAverage}</TextStyle>
            </ListCardSection>
        </ListCard>

    );
}

const TextStyle = styled.h3`
    font-size: 3vmin;
    font-family: 'Roboto', sans-serif;
    font-weight: 100;
    text-align: center;
`

export default ListDetail;