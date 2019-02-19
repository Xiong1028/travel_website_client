import React, { Component } from "react";
import { Form, Icon, Input, Button } from "antd";
import { connect } from "react-redux";

class SignIn extends Component {
  render() {
    return (
      <div className="signInForm">
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
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
              block
              shape="round"
            >
              Log in
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
)(SignIn);
