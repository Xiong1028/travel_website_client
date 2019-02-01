import React, { Component } from "react";
import { connect } from "react-redux";

class Login extends Component {
  render() {
    return <div>Login Component</div>;
  }
}
const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
