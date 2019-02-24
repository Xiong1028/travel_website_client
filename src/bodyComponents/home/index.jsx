import React, {Component, Fragment} from "react";
import {connect} from "react-redux";
import {Row, Col} from 'antd';
import {Button} from 'react-bootstrap';

import PhotoSlide from "./components/photoSlide";
import DiaryCard from "./components/diaryCard";


class Home extends Component {
<<<<<<< HEAD
	render() {
		return (
			<Fragment>
				<PhotoSlide/>
				<div>
					<Row className="textRow">
						Most Popular Diaries
					</Row>
					<Row style={{marginBottom: 28}}>
						<Col className="gutter-row" span={6} offset={3}>
							<div className="gutter-box"><DiaryCard/></div>
						</Col>
						<Col className="gutter-row" span={6} offset={0.8}>
							<div className="gutter-box"><DiaryCard/></div>
						</Col>
						<Col className="gutter-row" span={6} offset={0.8}>
							<div className="gutter-box"><DiaryCard/></div>
						</Col>
					</Row>
					<Row style={{marginBottom: 36}}>
						<Col className="gutter-row" span={6} offset={3}>
							<div className="gutter-box"><DiaryCard/></div>
						</Col>
						<Col className="gutter-row" span={6} offset={0.8}>
							<div className="gutter-box"><DiaryCard/></div>
						</Col>
						<Col className="gutter-row" span={6} offset={0.8}>
							<div className="gutter-box"><DiaryCard/></div>
						</Col>
					</Row>

					<Row style={{marginBottom: 36, textAlign: "center"}}>
						<Button className="btn btn-outline-success">More Diaries</Button>
					</Row>
				</div>
			</Fragment>
		);
	}
=======
  render() {
    return (
      <Fragment>               
        <PhotoSlide />    
        
        <div>
          <Row className="titleRow">
            Most Popular Diaries                  
          </Row>
          <Row style={{marginBottom: 28}}>
            <Button className="btn btn btn-outline-info" style={{display: 'block', margin: '0 auto'}}>More Diaries</Button>
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

          
                        
          
  </div>        
      </Fragment>     
    );
  }
>>>>>>> 4a30c9387fab44906b8cde2efb252f32894257a6
}

const mapStateToProps = state => {
	return {};
};

const mapDispatchToProps = dispatch => {
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Home);
