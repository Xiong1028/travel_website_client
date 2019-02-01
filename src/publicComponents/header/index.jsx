import React, { Component } from "react";
import { connect } from "react-redux";
import "./header.css";
import { Menu, Icon, Input, Avatar, Badge, Spin } from "antd";
import { Logo } from "./style";

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
const Search = Input.Search;

class Header extends Component {
  render() {
    return (
      <Menu mode="horizontal">
        <Menu.Item key="logo">
          <Logo>
            <span style={{ fontSize: 20, color: "red", marginRight: 5 }}>
              Travel
            </span>
            <Spin size="small" />
          </Logo>
        </Menu.Item>
        <Menu.Item key="home">Home</Menu.Item>
        <Menu.Item key="car">Book Car</Menu.Item>
        <SubMenu
          title={<span className="submenu-title-wrapper">Navigation</span>}
        >
          <MenuItemGroup title="Item 1">
            <Menu.Item key="setting:1">Option 1</Menu.Item>
            <Menu.Item key="setting:2">Option 2</Menu.Item>
          </MenuItemGroup>
          <MenuItemGroup title="Item 2">
            <Menu.Item key="setting:3">Option 3</Menu.Item>
            <Menu.Item key="setting:4">Option 4</Menu.Item>
          </MenuItemGroup>
        </SubMenu>
        <Menu.Item key="alipay">
          <a href="/">Link</a>
        </Menu.Item>
        <Menu.Item key="searchBox" style={{ marginLeft: 200 }}>
          <Search placeholder="search" style={{ width: 250 }} />
        </Menu.Item>
        <Menu.Item key="Post">
          <Icon type="edit" />
          Post
        </Menu.Item>
        <Menu.Item key="setting">
          <Icon type="setting" />
          Setting
        </Menu.Item>
        <Menu.Item key="Avatar">
          <span style={{ marginRight: 24 }}>
            <Badge count={10}>
              <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
            </Badge>
          </span>
        </Menu.Item>
      </Menu>
    );
  }
}

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
