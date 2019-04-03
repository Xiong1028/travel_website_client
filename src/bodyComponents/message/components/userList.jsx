import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { List, Avatar } from "antd";

export default class UserList extends Component {
  static propTypes = {
    userList: PropTypes.array.isRequired
  };
  render() {
    const { userList } = this.props;
    return (
      <Fragment>
        <List
          itemLayout="horizontal"
          dataSource={userList}
          split={true}
          renderItem={item => (
            <List.Item>
              <List.Item.Meta
                avatar={<Avatar src={item.avatar} />}
                title={item.username}
              />
            </List.Item>
          )}
        />
      </Fragment>
    );
  }
}
