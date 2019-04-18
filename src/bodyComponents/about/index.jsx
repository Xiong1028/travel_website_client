import React, { Component } from "react";
import { InfoWrapper, Text, Head, CardWrapper, Email } from "./style";
import { Card } from "react-bootstrap";
import { MDBIcon } from "mdbreact";

export default class About extends Component {
  render() {
    return (
      <InfoWrapper>
        <Head>Hello!</Head>
        <br />
        <Text>
          We, students of Fanshawe College, tech enthusiasts, are currently
          studying Web Development. We are a two-people team, started teach
          ourselves React, Redux, MongoDB, NodeJS... from scratch 2 months ago,
          that is how Tripinterest comes up. 
        </Text>

        <Head>Sign up now and start to explore Tripinterest!<br/><br/>
              Not now? Try this: 
        </Head>
        <Text>
            Username: Hui <br/>
            Password: &nbsp;hui0820
        </Text>
        <br/><br/>

        <CardWrapper>
          <Card style={{ width: '18rem', float: "left", marginBottom: "10%" }}>
            <Card.Img  
                      src="https://res.cloudinary.com/xiong1028/image/upload/v1555541672/xiong.jpg" 
                      alt="Xiong Li"
                      className="rounded-circle"
                      style={{ width: "70%", height: "70%", margin: "10% auto 2%" }}
            />
            <Card.Body style={{textAlign: "center", fontFamily: "'Montserrat', sans-serif", color: "#797979"}}>
              <Card.Title style={{fontWeight: "bolder"}}>Xiong Li</Card.Title>
              <Card.Text>
                <MDBIcon far icon="envelope" />
                <Email href="mailto: xiongli1124@gmail.com">
                  &nbsp;&nbsp;xiongli1124@gmail.com
                </Email>
              </Card.Text>
            </Card.Body>
          </Card>

          <Card style={{ width: '18rem', float: "right", marginBottom: "10%" }}>
            <Card.Img  
                      src="https://res.cloudinary.com/xiong1028/image/upload/v1555545792/emcakfxg9dgxpew2xuxu.png" 
                      alt="Hui Sun"
                      className="rounded-circle"
                      style={{ width: "70%", height: "70%", margin: "10% auto 2%" }}
            />
            <Card.Body style={{textAlign: "center", fontFamily: "'Montserrat', sans-serif", color: "#797979"}}>
              <Card.Title style={{fontWeight: "bolder"}}>Hui Sun</Card.Title>
              <Card.Text>
                <MDBIcon far icon="envelope" />
                <Email href="mailto: hui.sun1926@gmail.com">
                  &nbsp;&nbsp;hui.sun1926@gmail.com
                </Email>
              </Card.Text>
            </Card.Body>
          </Card>
        </CardWrapper>       
      </InfoWrapper>
    );
  }
}
