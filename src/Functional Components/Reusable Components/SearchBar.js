import React from 'react';
import { Row, Form, FormGroup, FormControl } from 'react-bootstrap';
import 'font-awesome/css/font-awesome.min.css'

const SearchBar = (props) => {
    return (
        <Row className="SearchBarWrapper"> 
            <Form className="SearchBarContainer">
                <FormGroup controlId="formBasicText">
                    <FormControl className="SearchBar" bsSize="large" lg={12} md={12} sm={12} xs={12} onChange={props.onChange} 
                    value={props.value} type="text" placeholder="Search..."
                    />
                </FormGroup>
            </Form>
      </Row>
        
    );
}

export default SearchBar;
