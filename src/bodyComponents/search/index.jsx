import React, {Component} from 'react';
import {ListGroup, Figure,Row,Col,Container} from 'react-bootstrap';
import {Icon} from 'antd';
import "./search.css";


class Search extends Component {
	render() {
		return (
			<Container className="searchInfo">
				<ListGroup variant="flush">
					<ListGroup.Item>
						<Row>
								<Col sm={3}>
									<Figure.Image
										width={120}
										height={80}
										alt="171x180"
										src="https://pic.qyer.com/avatar/001/77/30/64/200?v=1449832271"
									/>
								</Col>
								<Col sm={9}>
									<div>
											<span>Tom</span>&nbsp;&nbsp;<span>2019-03-17</span>
									</div>
									<h5>title</h5>
									<p>
										Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1500s
									</p>
									<div>
										<Icon type="eye" />988 &nbsp;&nbsp;<Icon type="message" />1089 &nbsp;&nbsp; <Icon type="like" />2389
									</div>
								</Col>
						</Row>
					</ListGroup.Item>

					<ListGroup.Item>
						<Row>
							<Col sm={3}>
								<Figure.Image
									width={120}
									height={80}
									alt="171x180"
									src="https://pic.qyer.com/avatar/001/77/30/64/200?v=1449832271"
								/>
							</Col>
							<Col sm={9}>
								<div>
									<span>Tom</span>&nbsp;&nbsp;<span>2019-03-17</span>
								</div>
								<h5>title</h5>
								<p>
									Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1500s
								</p>
								<div>
									<Icon type="eye" />988 &nbsp;&nbsp;<Icon type="message" />1089 &nbsp;&nbsp; <Icon type="like" />2389
								</div>
							</Col>
						</Row>
					</ListGroup.Item>

				</ListGroup>
			</Container>

		)
	}
}


export default Search;