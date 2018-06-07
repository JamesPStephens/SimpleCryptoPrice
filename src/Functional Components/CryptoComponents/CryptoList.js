import React, { Component } from 'react';
import { Col } from 'react-bootstrap';
import axios from 'axios'
import AlertBanner from '../Reusable Components/AlertBanner';
import ListDetail from './ListDetail';

export default class CryptoList extends Component {
    state = { AllCurrencies: [], onFetchError: '' };


    componentDidMount() {
        this.fetchRequest();
    }

    fetchRequest() {
        axios.get('https://api.coinmarketcap.com/v2/ticker/?convert=GBP')
        .then(response => this.setState({ AllCurrencies: response.data.data}))
        .catch(this.fetchError.bind(this))
    }

    fetchError() {
        this.setState({onFetchError: 'Uh Oh! Looks CoinMarketCap are having some issues. Their team of trained monkeys are trying to fix this.'});
    }

    renderError() {
        if ( this.state.onFetchError )  {
            return <AlertBanner alertText={this.state.onFetchError} />
        }
    }

    renderCrypto() {

        console.log(this.state.AllPrices);

        const CryptoArrayFull = Object.values(this.state.AllCurrencies);

       return CryptoArrayFull.map(CryptoInfo => 
            <ListDetail key={CryptoInfo.id} CryptoInfo={CryptoInfo} />
        );

    }

    render() {
        return (
            <Col lg={6} md={6} sm={8} xs={10} className="CryptoList" >
                {this.renderError()}
                {this.renderCrypto()}
            </Col>
        );
    }
}
