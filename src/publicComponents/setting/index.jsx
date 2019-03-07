import React, {Component} from "react";
import { Tab, ListGroup, Row, Col } from 'react-bootstrap';

import PicturesWall from './components/profile';

class Setting extends Component {
    render() {
        return (
            <Tab.Container id="list-group-tabs-example" defaultActiveKey="#profile">
                <Row>
                    <Col sm={4}>
                        <ListGroup>
                            <ListGroup.Item action href="#profile">Profile</ListGroup.Item>
                            <ListGroup.Item action href="#password">Password</ListGroup.Item>
                        </ListGroup>
                    </Col>
                    <Col sm={8}>
                        <Tab.Content>
                            <Tab.Pane eventKey="#profile">
                                <PicturesWall />
                            </Tab.Pane>
                            <Tab.Pane eventKey="#password">
                            
                            </Tab.Pane>
                        </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>            
        );
    }
}

export default Setting;