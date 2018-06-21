import React, { Component } from 'react';
import ListCard from './ListCard';
import ListCardSection from './ListCardSection';
import styled from 'styled-components';

function updateStateUSD(Currency) {
    this.setState({Currency})
  }

export default class ListDetail extends Component {

    state = { Currency: '' }
    updateStateUSD = updateStateUSD.bind(this)

    render() {
        const { name, rank, symbol } = this.props.CryptoInfo;
        const { price,  percent_change_24h } = this.props.CryptoInfo.quotes.GBP
        const  roundedPrice  = price.toFixed(2);

        return (
            <ListCard>
                <ListCardSection>
                    <TextStyle>{rank}</TextStyle>
                </ListCardSection>
                <ListCardSection>
                    <TextStyle>{name}</TextStyle>
                    <TextStyleSmall>{symbol}</TextStyleSmall>
                </ListCardSection>
                <ListCardSection>
                    <TextStyle>£{roundedPrice}</TextStyle>
                </ListCardSection>
                <ListCardSection>
                    <TextStyle>{percent_change_24h}%</TextStyle>
                </ListCardSection>
            </ListCard>

        );
    }
}

const TextStyle = styled.h3`
    font-size: 3vmin;
    margin: 0;
    font-family: 'Roboto', sans-serif;
    font-weight: 100;
    text-align: center;
`
const TextStyleSmall = styled.h3`
    font-size: 2vmin;
    margin: 0;
    font-family: 'Roboto', sans-serif;
    font-weight: 100;
    text-align: center;
`
