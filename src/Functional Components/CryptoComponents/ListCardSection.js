import React from 'react';
import { Col } from 'react-bootstrap';

const ListCardSection = (props) => {
    return (
        <Col lg={4} md={4} sm={4} xs={4} className={"CryptoCardSection"}>
            {props.children}
        </Col>
    );
}


export default ListCardSection;