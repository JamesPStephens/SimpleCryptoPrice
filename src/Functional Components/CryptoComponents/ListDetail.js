import React from 'react';
import ListCard from './ListCard';
import ListCardSection from './ListCardSection';
import styled from 'styled-components';

const ListDetail = ({ CryptoInfo }) => {

    const { name } = CryptoInfo;
    const { price,  percent_change_24h } = CryptoInfo.quotes.GBP
    const roundPrice = price.toFixed(2);

    return (
        <ListCard>
            <ListCardSection>
                <TextStyle>{name}</TextStyle>
            </ListCardSection>
            <ListCardSection>
                <TextStyle>£{roundPrice}</TextStyle>
            </ListCardSection>
            <ListCardSection>
                <TextStyle>{percent_change_24h}%</TextStyle>
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