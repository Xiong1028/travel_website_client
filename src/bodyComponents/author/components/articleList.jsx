import React, { Component } from "react";
import { ListGroup, Figure, Row, Col, Container } from "react-bootstrap";
import { Icon, Tag } from "antd";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { ListInfo } from "../../search/style";
import { ListNote } from "../style";
import "../../search/search.css";

export default class ArticleList extends Component {
  static propTypes = {
    articles: PropTypes.array.isRequired
  };

  render() {
    const { articles } = this.props;

    return (
      <Container className="searchInfo">
        <ListGroup variant="flush">
          {articles.map((value, key) => {
            return (
              <ListGroup.Item key={value + key}>
                <Row>
                  <Col sm={3}>
                    <Link to={"/detail/" + value.post_id}>
                      <Figure.Image
                        width={120}
                        height={80}
                        alt="171x180"
                        src={value.cover_imgURL}
                      />
                    </Link>
                  </Col>
                  <Col sm={9}>
                    <Link to={"/detail/" + value.post_id}>
                      <h5
                        dangerouslySetInnerHTML={{ __html: value.post_title }}
                      />
                    </Link>
                    <ListInfo>
                      {value.post_tags.map((item, index) => {
                        return <Tag color="#f50">{item}</Tag>;
                      })}
                    </ListInfo>
                    <ListNote>
                      <span>
                        <Icon type="eye" />
                        {value.views}
                      </span>
                      <span>
                        <Icon type="message" />
                        {value.comments}
                      </span>
                      <span>
                        <Icon type="heart" />
                        {value.likes}
                      </span>
                      <span>{value.postTime}</span>
                    </ListNote>
                  </Col>
                </Row>
              </ListGroup.Item>
            );
          })}
        </ListGroup>
      </Container>
    );
  }
}
