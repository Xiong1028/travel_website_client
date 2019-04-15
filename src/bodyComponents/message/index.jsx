import React, { Component } from "react";
import { connect } from "react-redux";
import { actionCreators } from "./store";
import { Tab, ListGroup, Row, Col } from "react-bootstrap";
import { Icon } from "antd";
import MessageList from "./components/MessageList";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import { Map, List } from "immutable";

class Message extends Component {
  countData() {
    const { msgList, loginUser } = this.props;
    const users = Map(msgList).get("users");
    const chatMsgs = Map(msgList).get("chatMsgs");

    const chatUserList = [];
    //filter the loginUser
    const newUsers = Map(users).filter((v, k) => k !== loginUser._id);
    newUsers.valueSeq().forEach(v => chatUserList.push(v));
  
    //filter the chatMsg
    const newChatMsgs = List(chatMsgs).filter(v => {
      return Map(v).get("to") === loginUser._id;
    });

    const chatMsgsHistory = List(newChatMsgs).toArray();

    //push the latest msg to corresponding user
    chatUserList.forEach((value, key) => {
      const fromMsgList = chatMsgsHistory.filter((v, k) => {
        return value.user_id === v.from;
      });

      const fromLatestMsg = fromMsgList[fromMsgList.length - 1];
      value.fromLatestMsg = fromLatestMsg;
    });
    console.log(chatUserList);
    return chatUserList;
  }

  render() {
    const { loginUser, msgList } = this.props;
    const chatUserList = this.countData();

    const unReadCount = Map(msgList).get("unReadCount");
    return (
      <div className="container wrap">
        <Tab.Container id="list-group-tabs-example" defaultActiveKey="#message">
          <Row>
            <Col sm={4}>
              <ListGroup style={{ fontSize: "17px" }}>
                <ListGroup.Item action href="#message">
                  <Icon
                    type="wechat"
                    style={{ float: "left", margin: "2.5%" }}
                  />
                  Message
                  <span className="badge badge-primary badge-pill offset-1">
                    {unReadCount ? unReadCount : null}
                  </span>
                </ListGroup.Item>
                <ListGroup.Item action href="#likes">
                  <Icon
                    type="heart"
                    style={{ float: "left", margin: "2.5%" }}
                  />
                  Likes
                </ListGroup.Item>
                <ListGroup.Item>
                  <Link to={"/favorite/" + loginUser._id}>
                    <Icon
                      type="star"
                      style={{ float: "left", margin: "2.5%" }}
                    />
                    My Favorite
                  </Link>
                </ListGroup.Item>
                <ListGroup.Item action href="#watch">
                  <Icon
                    type="user-add"
                    style={{ float: "left", margin: "2.5%" }}
                  />
                  Watch
                </ListGroup.Item>
              </ListGroup>
            </Col>
            <Col sm={8}>
              <Tab.Content>
                <Tab.Pane eventKey="#message">
                  {chatUserList.length ? (
                    <MessageList chatUserList={chatUserList} />
                  ) : (
                    "No Message"
                  )}
                </Tab.Pane>
                <Tab.Pane eventKey="#likes">Likes</Tab.Pane>
                <Tab.Pane eventKey="#favorite">{/*<Favorite/>*/}</Tab.Pane>
                <Tab.Pane eventKey="#watch">Watch</Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    msgList: state.getIn(["message", "msgList"]),
    loginUser: state.getIn(["login", "loginUser"])
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleGetUserList() {
      dispatch(actionCreators.getUserListAction());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Message);
