import React, { Component } from "react";
import { connect } from "react-redux";
import PhotoSlide from "./components/photoSlide";

class Home extends Component {
  render() {
    return <PhotoSlide />;
  }
}
const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
