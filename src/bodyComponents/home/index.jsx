import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { Row, Col } from 'antd';
import { Button } from 'react-bootstrap';

import PhotoSlide from "./components/photoSlide";
import DiaryCard from "./components/diaryCard";
import "./home.css";

class Home extends Component {
  render() {
    return (
      <Fragment>               
        <PhotoSlide />    
        
        <div>
          <Row className="textRow">
            Most Popular Diaries
          </Row>
          <Row style={{marginBottom: 28}}>
            <Col className="gutter-row" span={6} offset={3}>
              <div className="gutter-box"><DiaryCard /></div>
            </Col>
            <Col className="gutter-row" span={6} offset={0.8}>
              <div className="gutter-box"><DiaryCard /></div>
            </Col>
            <Col className="gutter-row" span={6} offset={0.8}>
              <div className="gutter-box"><DiaryCard /></div>
            </Col>
          </Row>
          <Row style={{marginBottom: 36}}>
            <Col className="gutter-row" span={6} offset={3}>
              <div className="gutter-box"><DiaryCard /></div>
            </Col>
            <Col className="gutter-row" span={6} offset={0.8}>
              <div className="gutter-box"><DiaryCard /></div>
            </Col>
            <Col className="gutter-row" span={6} offset={0.8}>
              <div className="gutter-box"><DiaryCard /></div>
            </Col>
          </Row>

          <Row style={{marginBottom: 36, textAlign: "center"}}>
            <Button variant="outline-success">More Diaries</Button>            
          </Row>
  </div>        
      </Fragment>     
    );
  }
}
const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
