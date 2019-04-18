import React, { Component } from "react";
import { connect } from "react-redux";
import { Carousel, CarouselItem } from "react-bootstrap";
import "../home.css";
import { actionCreators } from "../store";
import { Link } from "react-router-dom";

class PhotoSlide extends Component {
  getPhotoSlideList() {
    const { photoSlideList } = this.props;

    let photoSlidePageList = [];
    
    if (photoSlideList.length) {
      photoSlideList.forEach((v, k) => {
        photoSlidePageList.push(
          <Carousel.Item>
            <Link to={"/detail/" + v.post_id}>
              <img
                className="d-block w-100 home_ps_img"
                src={v.cover_imgURL}
                alt="coverImg"
              />
              <Carousel.Caption className="home_ps_caption">
                <h3>{v.post_title}</h3>
                <p>{v.username}</p>
              </Carousel.Caption>
            </Link>
          </Carousel.Item>
        );
      });
    }
    return photoSlidePageList;
  }

  render() {
    return <Carousel className="carousel">{this.getPhotoSlideList()}</Carousel>;
  }

  componentDidMount() {
    const { handleGetPhotoSlide } = this.props;
    // handleGetPhotoSlide();
  }
}

const mapStateToProps = state => {
  return {
    photoSlideList: state.getIn(["home", "photoSlideList"])
  };
};

const mapDispatchToProps = dispatch => {
  return {
    // handleGetPhotoSlide() {
    //   dispatch(actionCreators.handleGetSlideAction());
    // }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PhotoSlide);
