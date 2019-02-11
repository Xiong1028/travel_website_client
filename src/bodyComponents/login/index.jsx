import React, { Component } from "react";
import { connect } from "react-redux";
import { Tabs } from "antd";
import SignIn from "./components/SignIn";
import "./login.css";

const TabPane = Tabs.TabPane;

class Login extends Component {
  render() {
    return (
      <div className="loginWrapper">
        <div className="loginForm">
          <Tabs
            defaultActiveKey="1"
            tabBarGutter={50}
            // tabBarStyle={{ background: "red" }}
          >
            <TabPane tab="Sign In" key="1">
              <SignIn />
            </TabPane>
            <TabPane tab="Sign Up" key="2">
              Content of Tab Pane 2
            </TabPane>
          </Tabs>
        </div>
      </div>
    );
  }
}

export default connect(
  state => ({}),
  {}
)(Login);
