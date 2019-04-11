import React, {Component} from 'react';
import {connect} from 'react-redux';
import {ChatHeader, ChatWrap, ReceiveMsg, SendMsg, ChatContentWrap, SenderWrap} from "../style";



class Chat extends Component {

	handleSend = () => {
		const {loginUser} = this.props;


	}

	render() {
		return (
			<ChatWrap>
				<ChatContentWrap>
					<ChatHeader>Chat with me</ChatHeader>
					<ReceiveMsg>
						<img src="https://res.cloudinary.com/xiong1028/image/upload/v1554173545/kq9kf4co9mpxlenvlwky.png"
								 className="card-img rounded-circle msgAvatar" alt="avartar"
						/>
						<span>Hello there</span>
					</ReceiveMsg>
					<SendMsg>
						<span>how are you doing?</span>
					</SendMsg>
				</ChatContentWrap>
				<SenderWrap className="input-group mb-3">
					<textarea type="text" className="col-10 form-control" placeholder="Message" rows={1}/>
					<div className="input-group-append col-2">
						<button className="btn btn-outline-default col-12" onClick={this.handleSend}>Send</button>
					</div>
				</SenderWrap>
			</ChatWrap>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		loginUser: state.getIn(["login", "loginUser"])
	}
}

const mapDispatchToProps = dispatch => {
	return {}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Chat);