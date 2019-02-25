import React, {Component} from "react";
import {connect} from "react-redux";
import "./header.css";
import {Link} from "react-router-dom";
import {Menu, Icon, Input, Avatar, Badge, Spin} from "antd";
import {Logo} from "./style";
import {actionCreators} from "./store";


const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
const Search = Input.Search;

class Header extends Component {
	render() {
		const {isLogin, showAccessModal, handleLogout} = this.props;
		return (
			<Menu mode="horizontal">
				<Menu.Item key="logo">
					<Link to='/'>
						<Logo/>
					</Link>
				</Menu.Item>
				<Menu.Item key="home">
					<Link to="/">Home</Link>
				</Menu.Item>
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
				<Menu.Item key="alipay">Link</Menu.Item>
				<Menu.Item key="searchBox" style={{marginLeft:'35%'}}>
					<Search placeholder="search" style={{width: 200}}/>
				</Menu.Item>
				<Menu.Item key="Post" onClick={showAccessModal}>
					<Link to="/post">
						<Icon type="edit"/>
						Post
					</Link>
				</Menu.Item>
				<Menu.Item key="setting">
					<Icon type="setting"/>
					Setting
				</Menu.Item>
				{!isLogin ? (
					<Menu.Item key="login">
						<Link to="/login">
							<span>Login</span>
						</Link>
					</Menu.Item>
				) : (
					<SubMenu
						title={<span style={{marginRight: 24}}>
              <Badge count={8}>
                <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"/>
              </Badge>
            </span>}
					>
						<MenuItemGroup title="Article">
							<Menu.Item key="setting:1">My Article</Menu.Item>
							<Menu.Item key="setting:2">My Favorite</Menu.Item>
						</MenuItemGroup>
						<MenuItemGroup title="Comment">
							<Menu.Item key="setting:3">Likes</Menu.Item>
							<Menu.Item key="setting:4">@Me</Menu.Item>
							<Menu.Item key="setting:5" onClick={handleLogout}>Logout</Menu.Item>
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
		accessModalVisible: state.getIn(["post", "accessModalVisible"])
	};
};

const mapDispatchToProps = dispatch => {
	return {
		showAccessModal() {
			dispatch(actionCreators.showAccessModal());
		},
		handleLogout() {
			dispatch(actionCreators.handleLogoutAction());
		}
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Header);
