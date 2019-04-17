import React, { Component } from "react";
import { connect } from "react-redux";
import { Carousel } from "react-bootstrap";
import "../home.css";
import { actionCreators } from "../store";
import { Link } from "react-router-dom";

class PhotoSlide extends Component {
  getPhotoSlideList() {
    const { photoSlideList } = this.props;
    const newPhotoSlideList = photoSlideList.toJS();

    let photoSlidePageList = [];

    if (newPhotoSlideList.length) {
      for (let i = 0; i < 3; i++) {
        if (newPhotoSlideList[i]) {
          photoSlidePageList.push(
            <Carousel.Item>
              <Link to={"/detail/" + newPhotoSlideList[i]["post_id"]}>
                <img
                  className="d-block w-100 home_ps_img"
                  src={newPhotoSlideList[i]["cover_imgURL"]}
                  alt="photo slide"
                />
                <Carousel.Caption className="home_ps_caption">
                  <h3>{newPhotoSlideList[i]["post_title"]}</h3>
                  <p>{newPhotoSlideList[i]["username"]}</p>
                </Carousel.Caption>
              </Link>
            </Carousel.Item>
          );
        }
      }
    }

    return photoSlidePageList;
  }

  render() {
    return <Carousel className="carousel">{this.getPhotoSlideList()}</Carousel>;
  }

  componentDidMount() {
    const { photoSlideList, handleGetPhotoSlide } = this.props;
    handleGetPhotoSlide(photoSlideList);
  }
}

const mapStateToProps = state => {
  return {
    photoSlideList: state.getIn(["home", "photoSlideList"])
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleGetPhotoSlide(photoSlideList) {
      dispatch(actionCreators.handleGetSlideAction());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PhotoSlide);
