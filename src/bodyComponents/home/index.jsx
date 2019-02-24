import React, {Component, Fragment} from "react";
import {connect} from "react-redux";
import {Row, Col} from 'antd';
import {Button} from 'react-bootstrap';

import PhotoSlide from "./components/photoSlide";
import DiaryCard from "./components/diaryCard";


class Home extends Component {
	render() {
		return (
			<Fragment>
				<PhotoSlide/>
				<DiaryCard/>
			</Fragment>
		);
	}
}

export default Home;
