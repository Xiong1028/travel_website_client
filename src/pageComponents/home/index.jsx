import React, { Component } from "react";
import { connect } from "react-redux";

class Home extends Component {
  render() {
    return <div>Home Component</div>;
  }
}
const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
