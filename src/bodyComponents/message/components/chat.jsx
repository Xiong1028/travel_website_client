import React, { Component } from "react";
import { connect } from "react-redux";
import {
  ChatHeader,
  ChatWrap,
  ReceiveMsg,
  SendMsg,
  ChatContentWrap,
  SenderWrap
} from "../style";
import { actionCreators } from "../store";
import { Map, List } from "immutable";

class Chat extends Component {
  state = {
    content: ""
  };

  handleSend = () => {
    const { loginUser, sendMsg } = this.props;
    const from = loginUser._id;
    const to = this.props.match.params.userid;
    const content = this.state.content.trim();

    //Send msg
    if (content) {
      sendMsg({ from, to, content });
    }
    this.setState({ content: "" });
  };

  scrollToBottom = () => {
    this.messagesEnd.scrollIntoView({ behavior: "smooth" });
  };

  componentDidMount() {
    const { loginUser, renewRead } = this.props;
    const to = loginUser._id;
    const from = this.props.match.params.userid;
    this.scrollToBottom();
    renewRead({ from, to });
  }

  componentDidUpdate() {
    this.scrollToBottom();
  }

  render() {
    const { loginUser, msgList } = this.props;

    //calculate the current chat_id
    const myId = loginUser._id;

    //if no data, nothing is shown
    // if(!Map(msgList.users).count()){
    // 	return null;
    // }

    const targetId = this.props.match.params.userid;

    const tartgetUser = Map(msgList.users).get(targetId);

    const currentchatId = [myId, targetId].sort().join("_");

    let chatMsgs = List(msgList.chatMsgs).toArray();

    //***filter chatMsgs***
    chatMsgs = chatMsgs.filter(msg => msg.chat_id === currentchatId);

    //get the target user avatar and make sure the avatar is existed
    const targetAvatar = Map(tartgetUser).get("avatar") ? (
      <img
        src={Map(tartgetUser).get("avatar")}
        className="card-img rounded-circle msgAvatar"
        alt="avartar"
      />
    ) : null;

    return (
      <ChatWrap>
        <ChatHeader>Chat with {Map(tartgetUser).get("username")}</ChatHeader>
        <ChatContentWrap>
          {chatMsgs.map(msg => {
            if (myId === msg.to) {
              //msg to me
              return (
                <ReceiveMsg key={msg._id}>
                  {targetAvatar}
                  <span>{msg.content}</span>
                </ReceiveMsg>
              );
            } else {
              //msg from me
              return (
                <SendMsg key={msg._id}>
                  <span>{msg.content}</span>
                </SendMsg>
              );
            }
          })}
          <div
            ref={el => {
              this.messagesEnd = el;
            }}
          />
        </ChatContentWrap>
        <SenderWrap className="input-group mb-3">
          <textarea
            type="text"
            className="col-9 form-control"
            placeholder="Message"
            rows={1}
            value={this.state.content}
            onChange={e => this.setState({ content: e.target.value })}
          />
          <div className="input-control col-3">
            <button
              className="btn btn-success col-12"
              onClick={this.handleSend.bind(this)}
            >
              Send
            </button>
          </div>
        </SenderWrap>
      </ChatWrap>
    );
  }
}

const mapStateToProps = state => {
  return {
    loginUser: state.getIn(["login", "loginUser"]),
    msgList: state.getIn(["message", "msgList"])
  };
};

const mapDispatchToProps = dispatch => {
  return {
    sendMsg({ from, to, content }) {
      dispatch(actionCreators.handleSendMsgAction({ from, to, content }));
    },
    renewRead({ from, to }) {
      dispatch(actionCreators.handleRenewReadAction({ from, to }));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Chat);
