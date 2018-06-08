import React, { Component } from 'react';
import { Col, FormGroup, FormControl, Row } from 'react-bootstrap';
import axios from 'axios';
import AlertBanner from '../Reusable Components/AlertBanner';
import ListDetail from './ListDetail';

export default class CryptoList extends Component {
  state = { CurrencyData: [], onFetchError: '', searchTerm: '' };

  handleSearchTermChange = e => {
    this.setState({ searchTerm: e.target.value });
  };

  componentDidMount() {
    this.fetchRequest();
    setInterval(this.fetchRequest.bind(this), 300000);
  }

  fetchRequest() {
    axios
      .get('https://api.coinmarketcap.com/v2/ticker/?convert=GBP&limit=500')
      .then(response => this.setState({ CurrencyData: response.data.data }))
      .catch(this.fetchError.bind(this));
  }
  fetchError() {
    this.setState({
      onFetchError:
        'Uh Oh! Looks CoinMarketCap are having some issues. Their team of trained monkeys are trying to fix this.'
    });
  }

  renderError() {
    if (this.state.onFetchError) {
      return <AlertBanner alertText={this.state.onFetchError} />;
    }
  }

  renderCrypto() {
    const CryptoArrayFull = Object.values(this.state.CurrencyData);
    CryptoArrayFull.sort((a, b) => a.rank - b.rank);

    return CryptoArrayFull.filter(
      CryptoInfo => `${CryptoInfo.name}`.toUpperCase().indexOf(this.state.searchTerm.toUpperCase()) >= 0
    ).map(CryptoInfo => <ListDetail key={CryptoInfo.id} CryptoInfo={CryptoInfo} />);
  }

  render() {
    return (
      <Col lg={6} md={6} sm={8} xs={10} className="CryptoList">
        <Row className="test">
          <FormGroup controlId="formBasicText" className="searchBarMarginRemoval">
            <FormControl
              bsSize="large"
              className="SearchBarGrow"
              lg={12}
              md={12}
              sm={12}
              xs={12}
              onChange={this.handleSearchTermChange}
              value={this.state.searchTerm}
              type="text"
              placeholder="Search"
            />
            <FormControl.Feedback />
          </FormGroup>
        </Row>

        {this.renderError()}
        {this.renderCrypto()}
      </Col>
    );
  }
}
