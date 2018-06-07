import React, { Component } from 'react';
import { Col } from 'react-bootstrap';
import axios from 'axios'
import AlertBanner from '../Reusable Components/AlertBanner';
import ListDetail from './ListDetail';

export default class CryptoList extends Component {
    state = { BTC: [], ETH: [], XRP: [], BCH: [], EOS:[], AllCurrencies: [], onFetchError: '' };


    componentWillMount() {
        axios.get('https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BTC&tsyms=GBP')
        .then(response => this.setState({ BTC: response.data.RAW.BTC}))
        .catch(this.fetchError.bind(this));

        axios.get('https://min-api.cryptocompare.com/data/pricemultifull?fsyms=ETH&tsyms=GBP')
        .then(response => this.setState({ ETH: response.data.RAW.ETH}));

        axios.get('https://min-api.cryptocompare.com/data/pricemultifull?fsyms=XRP&tsyms=GBP')
        .then(response => this.setState({ XRP: response.data.RAW.XRP}));

        axios.get('https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BCH&tsyms=GBP')
        .then(response => this.setState({ BCH: response.data.RAW.BCH}));

        axios.get('https://min-api.cryptocompare.com/data/pricemultifull?fsyms=EOS&tsyms=GBP')
        .then(response => this.setState({ EOS: response.data.RAW.EOS}));

        axios.get('https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BTC,ETH,XRP,BCH,EOS&tsyms=GBP')
        .then(response => this.setState({ AllCurrencies: response.data.RAW}));

    }

    fetchError() {
        this.setState({onFetchError: 'Uh Oh! Looks like we are having trouble contacting CryptoCompare. Our team of trained monkeys are trying to fix this.'});
    }

    renderError() {
        if ( this.state.onFetchError )  {
            return <AlertBanner alertText={this.state.onFetchError} />
        }
    }


    renderCrypto() {
        const CryptoBTC = Object.values(this.state.BTC);
        const CryptoETH = Object.values(this.state.ETH);
        const CryptoXRP = Object.values(this.state.XRP);
        const CryptoBCH = Object.values(this.state.BCH);
        const CryptoEOS = Object.values(this.state.EOS);

       const CryptoArray = CryptoBTC.concat(CryptoETH, CryptoXRP, CryptoBCH, CryptoEOS);



       /* const CryptoArrayFull = Object.values(this.state.AllCurrencies);
         
        console.log(CryptoArrayFull);
        return CryptoArrayFull.map(CINFO =>
            <ListDetail key={CINFO.NAME} CINFO={CINFO} />

        ); */

       return CryptoArray.map(CryptoInfo => 
            <ListDetail key={CryptoInfo.FROMSYMBOL} CryptoInfo={CryptoInfo} />
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
