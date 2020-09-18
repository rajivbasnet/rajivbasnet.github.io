import React, { Component } from "react";
import {
    Container,
    Row,
    Col,
    Card,
    CardDeck,
  } from "react-bootstrap";
import { getSocials } from "../details/social";

class ContactNF extends Component {
  state = {
    socials: getSocials(),
  };

  render() {
    const { socials } = this.state;
    return (
        <React.Fragment>
        <Container id="contact">
          <Row>
            <Col>
              <p
                className="h5 lead font-weight-bold text-center"
                style={{ color: "#000000" }}
              >
                {" "}
                CONTACT ME{" "}
              </p>{" "}
            </Col>
          </Row>
          <hr className="my-4" />
          <Row className="justify-content-center">
            {" "}
            <CardDeck>
            <Card
            style={{
              backgroundColor: "#f8f9fa",
              border: "0px",
              maxWidth: "800px",
              marginTop: "5%",
              marginBottom: "10%"
            }}
          id="bottomdetails"
          >
          <div className="text-center">
            <p className="text-center mr-8 ml-8">
              I find the use of software engineering practices in analytics and data science fascinating.
              Currently a senior at St. Joseph's College, 
              I am seeking full-time opportunities in these fields for 2021.{" "}
              <br /> <br />
              If you would like to add me to your network, please feel free to shoot me a message. I will try getting
              back to you as soon as possible.
            </p>
            <br />
            {socials.map((social) => (
                    <a
                      key={social._id}
                      className="header-socials-icon ml-3 mr-3"
                      to="route"
                      rel="noopener noreferrer"
                      target="_blank"
                      href={social.link}
                    >
                      <span>
                        <i className={social.icon_class} href=""></i>
                      </span>
                    </a>
                  ))}
            <br />
            <br />
            <p>
              <a href="mailto:net.rajivbas@gmail.com">
                <i className="fa fa-google text-dark mr-2"> </i>
                <span>net.rajivbas@gmail.com</span>{" "}
              </a>
              <br />
              <i className="fa fa-home text-dark mr-2"> </i>
              <span>Jackson Heights, NY 11372</span>{" "}
            </p>
          </div>
        </Card>
            </CardDeck>
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}

export default ContactNF;
