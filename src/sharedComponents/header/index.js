import React, {Component} from 'react';
import {connect} from 'react-redux';
import './header.css';
import {Row, Col, Grid} from "react-bootstrap";

class Header extends Component{
    render(){
        return(
            <Grid className='header container-fluid'>
                <Row className='show-grid'>
                    <Col md={12}>Header Component goes here</Col>
                </Row>
            </Grid>
        )
    }
}


export default Header;