import React, {Component} from "react";
import {Modal, Input, message} from "antd";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {get} from "immutable";
import {actionCreators} from "../store";

class MessageModal extends Component {
	static propTypes = {
		articles: PropTypes.array.isRequired
	};

	handleOk = () => {
		const {articles, handleMsgWinShow, handleSendMsg, loginUser} = this.props;
		handleSendMsg({
			to: get(articles[0], "user_id"),
			content: this.input.value.trim(),
			from: loginUser._id
		});
		handleMsgWinShow(false);
		this.input.value = '';
		message.info("send message successfully");
	};

	handleCancel = () => {
		const {handleMsgWinShow} = this.props;
		handleMsgWinShow(false);
	};

	render() {
		const {articles, msgWindowVisible} = this.props;
		return (
			<div>
				<Modal
					title={get(articles[0], "username")}
					visible={msgWindowVisible}
					onOk={this.handleOk.bind(this)}
					onCancel={this.handleCancel.bind(this)}
					okText="Send"
				>
          <textarea
						rows={4}
						ref={input => (this.input = input)}
						className="col-12"
					/>
				</Modal>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		msgWindowVisible: state.getIn(["message", "msgWindowVisible"]),
		loginUser: state.getIn(["login", "loginUser"])
	};
};

const mapDispatchToProps = dispatch => {
	return {
		handleMsgWinShow(visible) {
			dispatch(actionCreators.handleMsgWinShowAction(visible));
		},
		handleSendMsg({from, to, content}) {
			dispatch(actionCreators.handleSendMsgAction({from, to, content}));
		}
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(MessageModal);
