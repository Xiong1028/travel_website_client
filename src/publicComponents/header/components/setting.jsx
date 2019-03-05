import React, { Component } from "react";
import { Menu } from "antd";

const SubMenu = Menu.SubMenu;

export default class Setting extends Component {
  render() {
    return (
      <SubMenu title={<span className="submenu-title-wrapper">Setting</span>}>
        <Menu.Item key="setting:1" />
        <Menu.Item key="setting:2">Option 2</Menu.Item>
        <Menu.Item key="setting:3">Option 3</Menu.Item>
        <Menu.Item key="setting:4">Option 4</Menu.Item>
        <Menu.Item key="setting:5">Option 5</Menu.Item>
      </SubMenu>
    );
  }
}
