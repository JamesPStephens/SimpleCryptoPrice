import React from 'react';
import { Col, FormGroup, FormControl, Row , Form } from 'react-bootstrap';

const SearchBar = (props) => {
    return (
        <Row> 
            <Form>
                <FormGroup controlId="formBasicText"  className="SearchBarWrapper">
                    <FormControl className="SearchBar" bsSize="large" lg={12} md={12} sm={12} xs={12} onChange={props.onChange} 
                    value={props.value} type="text" placeholder="Search"
                    />
                </FormGroup>
            </Form>
      </Row>
        
    );
}

export default SearchBar;