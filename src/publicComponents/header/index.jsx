import React, { Component } from "react";
import { connect } from "react-redux";
import Cookies from "js-cookie";
import "./header.css";
import { Link, withRouter } from "react-router-dom";
import { Menu, Icon, Input, Avatar, Badge } from "antd";
import { actionCreators } from "./store";
import { actionCreators as messageActionCreators } from "../../bodyComponents/message/store";
import MenuItem from "antd/lib/menu/MenuItem";

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
const Search = Input.Search;

class Header extends Component {
  state = {
    searchVal: ""
  };

  componentDidMount() {
    if (Cookies.get("userid")) {
      this.props.setLogin();
      this.props.handleUpdateAvatar(Cookies.get("userid"));
      this.props.handleRenewLoginUser(Cookies.get("userid"));
    }
  }

  handleSearch(value) {
    const { handleSearch } = this.props;
    handleSearch(value);
    this.props.history.push("/search");
  }

  handleLogout() {
    const { handleLogout } = this.props;
    handleLogout();
    Cookies.remove("userid");
    this.props.history.push("/login");
  }

  handleAuthorInfo() {
    const { loginUser } = this.props;
    this.props.history.push("/author/" + loginUser._id);
  }

  handleMsg() {
    const { isLogin } = this.props;
    if (!isLogin) {
      this.props.history.push("/login");
    } else {
      this.props.history.push("/message");
    }
  }

  render() {
    const {
      isLogin,
      showAccessModal,
      avatar,
      loginUser,
      unReadCount
    } = this.props;
    return (
      <Menu mode="horizontal" theme="dark" className="header_menu">
        <Menu.Item key="logo">
          <Link to="/" className="logo">
            Tripinterest
          </Link>
        </Menu.Item>
        <Menu.Item key="home">
          <Link className="menu" to="/">
            Home
          </Link>
        </Menu.Item>
        <MenuItem key="about">
          <Link className="menu" to="/about">
            About us
          </Link>
        </MenuItem>
        <Menu.Item key="searchBox" style={{ marginLeft: "35%" }}>
          <Search
            placeholder="search"
            style={{ width: 200 }}
            onSearch={value => this.handleSearch(value)}
            allowClear={true}
          />
        </Menu.Item>
        <Menu.Item key="Post" onClick={showAccessModal}>
          <Link to="/post">
            <Icon type="edit" />
            Post
          </Link>
        </Menu.Item>
        <Menu.Item
          key="setting:private_message"
          onClick={this.handleMsg.bind(this)}
        >
          <Badge count={unReadCount ? unReadCount : null}>Message</Badge>
        </Menu.Item>

        {!isLogin ? (
          <Menu.Item key="login">
            <Link to="/login">
              <span>Login</span>
            </Link>
          </Menu.Item>
        ) : (
          <SubMenu
            title={
              <span style={{ marginRight: 24 }}>
                <Link to={"/author/" + loginUser._id}>
                  <Avatar src={avatar} />
                </Link>
              </span>
            }
          >
            <MenuItemGroup title="Article">
              <Menu.Item key="setting:1">
                <Link to={"/author/" + loginUser._id}>My Article</Link>
              </Menu.Item>
              <Menu.Item key="setting:2">
                <Link to={"/favorite/" + loginUser._id}>My Favorite</Link>
              </Menu.Item>
            </MenuItemGroup>
            <MenuItemGroup title="Setting">
              <Menu.Item key="setting:5">
                <Link to="/setting">Setting</Link>
              </Menu.Item>
              <Menu.Item key="setting:6" onClick={this.handleLogout.bind(this)}>
                Logout
              </Menu.Item>
            </MenuItemGroup>
          </SubMenu>
        )}
      </Menu>
    );
  }
}

const mapStateToProps = state => {
  return {
    isLogin: state.getIn(["header", "isLogin"]),
    accessModalVisible: state.getIn(["post", "accessModalVisible"]),
    avatar: state.getIn(["setting", "avatar"]),
    loginUser: state.getIn(["login", "loginUser"]),
    unReadCount: state.getIn(["message", "msgList", "unReadCount"])
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setLogin() {
      dispatch(actionCreators.setLoginAction());
    },
    showAccessModal() {
      dispatch(actionCreators.showAccessModal());
    },
    handleLogout() {
      dispatch(actionCreators.handleLogoutAction());
    },
    handleSearch(value) {
      dispatch(actionCreators.handleSearchValAction(value));
    },
    handleUpdateAvatar(userid) {
      dispatch(actionCreators.handleUpdateAvatarAction(userid));
    },
    openMessageDrawer(visible) {
      dispatch(messageActionCreators.toggleMessageDrawerAction(visible));
    },
    handleRenewLoginUser(userid) {
      dispatch(actionCreators.handleUpdateLoginUserAction(userid));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Header));
