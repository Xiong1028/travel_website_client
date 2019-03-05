import React, {Component} from 'react';
import {Menu, Icon} from 'antd';
import {Link} from "react-router-dom";

class SettingMenu extends Component {
	render() {
		return (
			<Menu
				Mode="vertical"
				style={{width: 256, height: 30}}
			>
				<Menu.Item key="1">
					<Link to="/setting">
						<span><Icon type="user"/><span>Upload Avatar</span></span>
					</Link>
				</Menu.Item>
				<Menu.Item key="2">
					<Link to="/reset">
						<span><Icon type="lock"/><span>Reset Password</span></span>
					</Link>
				</Menu.Item>
				<Menu.Item key="3">
					<Link to="/deleteuser">
						<span><Icon type="user-delete"/><span>Delete Account</span></span>
					</Link>
				</Menu.Item>
			</Menu>
		);
	}
}

export default SettingMenu;