import React, { Component } from "react";
import { Modal, Input } from "antd";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { get } from "immutable";
import { actionCreators } from "../store";

const { TextArea } = Input;

class MessageModal extends Component {
  static propTypes = {
    articles: PropTypes.array.isRequired
  };

  handleOk = () => {
    const { handleMsgWinShow } = this.props;
    handleMsgWinShow(false);
  };

  handleCancel = () => {
    const { handleMsgWinShow } = this.props;
    handleMsgWinShow(false);
  };

  render() {
    const { articles, msgWindowVisible } = this.props;
    return (
      <div>
        <Modal
          title={get(articles[0], "username")}
          visible={msgWindowVisible}
          onOk={this.handleOk.bind(this)}
          onCancel={this.handleCancel.bind(this)}
          okText="Send"
        >
          <TextArea rows={4} />
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    msgWindowVisible: state.getIn(["message", "msgWindowVisible"])
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleMsgWinShow(visible) {
      dispatch(actionCreators.handleMsgWinShowAction(visible));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MessageModal);