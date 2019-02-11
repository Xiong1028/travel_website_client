import React, { Component, Fragment } from "react";
import { connect } from "react-redux";

import PhotoSlide from "./components/photoSlide";
import DiaryCard from "./components/diaryCard";

class Home extends Component {
  render() {
    return (
      <Fragment>
        <PhotoSlide />
        <DiaryCard />
      </Fragment>     
    );
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
