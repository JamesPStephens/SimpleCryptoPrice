import React from 'react';
import { Col } from 'react-bootstrap';

const ListCardSection = (props) => {
    return (
        <Col lg={3} md={3} sm={3} xs={3} className={"CryptoCardSection"}>
            {props.children}
        </Col>
    );
}


export default ListCardSection;