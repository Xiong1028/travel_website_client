import React, { Component } from "react";
import { Form, Icon, Input, Button, Checkbox } from "antd";
import { connect } from "react-redux";

class SignIn extends Component {
  render() {
    return (
      <Form>
        <Form.Item>
          <Input
            prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
            placeholder="Username"
          />
        </Form.Item>
        <Form.Item>
          <Input
            prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>
        <Form.Item>
          <Checkbox>Remember me</Checkbox>
          <a className="login-form-forgot" href="#">
            Forgot password
          </a>
        </Form.Item>
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
          >
            Log in
          </Button>
        </Form.Item>
        Or <a href="">register now!</a>
      </Form>
    );
  }
}

export default connect(
  state => ({}),
  {}
)(SignIn);
