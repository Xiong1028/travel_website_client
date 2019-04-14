import React, {Component} from 'react';
import {ListGroup, Figure, Row, Col, Container, Image} from 'react-bootstrap';
import {Icon,Tag} from 'antd';
import {connect} from "react-redux";
import {Link} from 'react-router-dom';
import moment from "moment";
import {ListItem, ListInfo, ListNote} from "./style";
import "./search.css";


class Search extends Component {
	render() {
		const {searchVal, diaryCardList} = this.props;
		const searchList = diaryCardList.toJS();
		const searchResultList = [];

		if (searchVal) {
			searchList.filter((value, index) => {
				console.log(value);
				var re = new RegExp(searchVal, 'g');
				if (re.test(value.post_title) || re.test(value.username) || re.test(value.post_content)) {
					value.post_title = value.post_title.replace(re, `<span class="keyword">${searchVal}</span>`);
					value.username = value.username.replace(re, `<span class="keyword">${searchVal}</span>`);
					value.post_content = value.post_content.replace(re, `<span class="keyword">${searchVal}</span>`);
					searchResultList.push(value);
				}
			})
		} else {
			this.props.history.push('/');
		}

		console.log(searchResultList);

		return (
			<Container className="searchInfo">
				<span className="feedbackMsg">About {searchResultList.length} results</span>
				<ListGroup variant="flush">
					{searchResultList.map((value, key) => {
						return (
							<ListGroup.Item key={value + key}>
								<Row>
									<Col sm={3}>
										<Link to={'/detail/' + value.post_id}>
											<Figure.Image
												width={120}
												height={80}
												alt="171x180"
												src={value.cover_imgURL}
											/>
										</Link>
									</Col>
									<Col sm={9}>
										<div>
											<Image src={value.avatar} roundedCircle style={{width: 30, height: 30}}/>
											<span
												dangerouslySetInnerHTML={{__html: value.username}}
											/>&nbsp;&nbsp;<span>{moment(value.post_time).format('LLL')}</span>
										</div>
										<Link to={'/detail/' + value.post_id}>
											<h5
												dangerouslySetInnerHTML={{__html: value.post_title}}
											/>
										</Link>
										<ListInfo>
											{value.post_tags.map((item, index) => {
												return <Tag color="#f50">{item}</Tag>;
											})}
										</ListInfo>
										<ListNote>
											<span><Icon type="eye"/>{value.views}</span>
											<span><Icon type="message"/>{value.comments}</span>
											<span><Icon type="like"/>{value.likes}</span>
										</ListNote>
									</Col>
								</Row>
							</ListGroup.Item>
						)
					})}
				</ListGroup>
			</Container>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		searchVal: state.getIn(['header', 'searchVal']),
		diaryCardList: state.getIn(['home', 'diaryCardList'])
	}
}

const mapDispatchToProps = (dispatch) => {
	return {}
}


export default connect(mapStateToProps, mapDispatchToProps)(Search);