import React, {Component} from "react";
import PropTypes from "prop-types";
import {Link} from 'react-router-dom';
import {Map, List} from "immutable";
import moment from "moment";
import {connect} from "react-redux";

class MessageList extends Component {
	static propTypes = {
		msgList: PropTypes.object.isRequired,
		loginUser: PropTypes.object.isRequired
	};

	countData(){
		const {msgList, loginUser} = this.props;
		const users = msgList.users;
		const chatMsgs = msgList.chatMsgs;
		const chatUserList = [];
		let unReadtotal = 0;
		//filter the loginUser
		const newUsers = Map(users).filter((v, k) => k != loginUser._id);
		newUsers.valueSeq().forEach(v => chatUserList.push(v));

		//filter the chatMsg
		const newChatMsgs = List(chatMsgs).filter((v) => {
			return Map(v).get("to") === loginUser._id;
		});

		const chatMsgsHistory = List(newChatMsgs).toArray();


		//push the latest msg to corresponding user
		chatUserList.forEach((value, key) => {
			const fromMsgList = chatMsgsHistory.filter((v, k) => {
				if (v.to === loginUser._id && !v.read) {
					unReadtotal++;
				}
				return value.user_id === v.from;
			})
			const fromLatestMsg = fromMsgList[fromMsgList.length - 1];
			value.fromLatestMsg = fromLatestMsg;
		})

		return [chatUserList,unReadtotal];

	}

	componentDidMount() {
		const unReadtotal = this.countData()[1];
		console.log(unReadtotal);
	}

	render() {
		const chatUserList = this.countData()[0];

		return (
			<div>
				{
					chatUserList.map((value, key) => {
						return (
							<div className="card mb-12" style={{maxWidth: '100%', margin: "10px 0"}}>
								<div className="row no-gutters">
									<div className="col-md-3">
										<img
											src={value.avatar}
											className="card-img rounded-circle msgAvatar" alt="avartar"
											style={{width: 100, height: 100, margin: "30px"}}/>

									</div>
									<div className="col-md-9">
										<div className="card-body">
											<h5 className="card-title">
												{value.username}
											</h5>
											<p className="card-text"
												 style={{fontStyle: "italic", fontSize: "120%"}}>{value.fromLatestMsg.content}</p>
											<p className="card-text">
												<small className="text-muted">updated
													at {moment(value.fromLatestMsg.create_time).format('YYYY-MM-DD HH:mm:ss')}</small>
											</p>
											<p className="card-text">
												<Link to={"/chat/" + value.user_id}>
													<span>Reply</span>
												</Link>
												<span style={{color: "red", padding: "10px"}}>Delete</span>
											</p>
										</div>
									</div>
								</div>
							</div>
						)
					})
				}
				<nav aria-label="Page navigation example">
					<ul className="pagination" style={{float: "right"}}>
						<li className="page-item"><a className="page-link" href="#">Previous</a></li>
						<li className="page-item"><a className="page-link" href="#">1</a></li>
						<li className="page-item"><a className="page-link" href="#">2</a></li>
						<li className="page-item"><a className="page-link" href="#">3</a></li>
						<li className="page-item"><a className="page-link" href="#">Next</a></li>
					</ul>
				</nav>
			</div>
		)
	}
}

export default connect(
	(state) => ({}),
	{}
)(MessageList);
