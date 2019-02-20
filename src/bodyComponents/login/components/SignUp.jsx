import React, {Component} from "react";
import {Form, Icon, Input, Button} from "antd";
import {connect} from "react-redux";
import {genPercentAdd} from "antd/lib/upload/utils";

class SignUp extends Component {
	render() {
		return (
			<div className="signUpForm">
				<Form>
					<Form.Item className="formItem">
						<Input
							prefix={<Icon type="user" style={{color: "rgba(0,0,0,.25)"}}/>}
							placeholder="Username"
						/>
					</Form.Item>
					<Form.Item className="formItem">
						<Input
							prefix={<Icon type="lock" style={{color: "rgba(0,0,0,.25)"}}/>}
							type="password"
							placeholder="Password"
						/>
					</Form.Item>
					<Form.Item className="formItem">
						<Input
							prefix={<Icon type="lock" style={{color: "rgba(0,0,0,.25)"}}/>}
							type="password"
							placeholder="Confirm Password"
						/>
					</Form.Item>
					<Form.Item className="formItem">
						<Input
							prefix={<Icon type="mail" style={{color: "rgba(0,0,0,.25)"}}/>}
							placeholder="Email"
						/>
					</Form.Item>
					<Form.Item className="formItemSubmit">
						<Button
							type="danger"
							htmlType="submit"
							className="login-form-button"
							block
							shape="round"
						>
							Register
						</Button>
					</Form.Item>
				</Form>
			</div>
		);
	}
}

export default connect(
	state => ({}),
	{}
)(SignUp);
