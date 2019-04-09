import React, { Component } from "react";
import PropTypes from "prop-types";
import { List, Avatar } from "antd";

export default class MessageList extends Component {
  static propTypes = {
    chatData: PropTypes.array.isRequired
  };

  data = [
    {
      title: "Xiong",
      avatar: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
    }
  ];
  render() {
    return (
      <List
        itemLayout="horizontal"
        dataSource={this.data}
        renderItem={item => (
          <List.Item>
            <List.Item.Meta
              className="col-sm-8"
              avatar={<Avatar src={item.avatar} />}
              title={<a href="https://ant.design">{item.title} </a>}
              description="Ant Design, a design language for background applications, is refined by Ant UED Team"
            />
            <div className="col-sm-4">
              <span>2019-08-20</span>
              <button>Reply</button>
              <button>Delete</button>
            </div>
          </List.Item>
        )}
      />
    );
  }
}
