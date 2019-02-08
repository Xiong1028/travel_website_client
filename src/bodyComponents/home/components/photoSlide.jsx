import React, { Component } from "react";
import { connect } from "react-redux";
import { Carousel } from "react-bootstrap";
import "../home.css";

class PhotoSlide extends Component {
  render() {
    return (
      <Carousel className="carousel">
        <Carousel.Item>
          <img
            className="d-block w-100 home_ps_img"
            src={require("../../../assets/images/slide1.jpg")}
            alt="First slide"
          />
          <Carousel.Caption className="home_ps_caption">
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100 home_ps_img"
            src={require("../../../assets/images/slide2.jpg")}
            alt="Second slide"
          />
          <Carousel.Caption className="home_ps_caption">
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100 home_ps_img"
            src={require("../../../assets/images/slide3.jpg")}
            alt="Third slide"
          />
          <Carousel.Caption className="home_ps_caption">
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
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
)(PhotoSlide);
