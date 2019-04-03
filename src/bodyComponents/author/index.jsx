import React, { Component } from "react";
import { connect } from "react-redux";
import { AuthorComponentWrapper, AuthorDetailWrapper } from "./style";

class Author extends Component {
  render() {
    return (
      <div>
        <AuthorComponentWrapper>
          <AuthorDetailWrapper>Author Component here</AuthorDetailWrapper>
        </AuthorComponentWrapper>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Author);
