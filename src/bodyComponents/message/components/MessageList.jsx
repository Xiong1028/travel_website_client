import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import moment from "moment";

export default class MessageList extends Component {
  static propTypes = {
    chatUserList: PropTypes.array.isRequired
  };

  render() {
    const { chatUserList } = this.props;
    return (
      <div>
        {chatUserList.map((value, key) => {
          return (
            <div
              className="card mb-12"
              style={{ maxWidth: "100%", margin: "10px 0" }}
            >
              <div className="row no-gutters">
                <div className="col-md-3">
                  <img
                    src={value.avatar}
                    className="card-img rounded-circle msgAvatar"
                    alt="avartar"
                    style={{ width: 100, height: 100, margin: "30px" }}
                  />
                </div>
                <div className="col-md-9">
                  <div className="card-body">
                    <h5 className="card-title">{value.username}</h5>
                    <p
                      className="card-text"
                      style={{ fontStyle: "italic", fontSize: "120%" }}
                    >
                      {value.fromLatestMsg?value.fromLatestMsg.content:null}
                    </p>
                    <p className="card-text">
                      <small className="text-muted">
                        updated at{" "}
                        {moment().format(
                          "YYYY-MM-DD HH:mm:ss"
                        )}
                      </small>
                    </p>
                    <p className="card-text">
                      <Link to={"/chat/" + value.user_id}>
                        <span>Reply</span>
                      </Link>
                      <span style={{ color: "red", padding: "10px" }}>
                        Delete
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
        <nav aria-label="Page navigation example">
          <ul className="pagination" style={{ float: "right" }}>
            <li className="page-item">
              <a className="page-link" href="#">
                Previous
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                1
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                2
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                3
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                Next
              </a>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}
