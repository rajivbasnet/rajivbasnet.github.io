import React, { Component } from "react";
import profilepic from "./images/profilepic.jpg";
import { Container, Row, Col } from "react-bootstrap";
import content from "../data/siteContent.json";

class AboutMe extends Component {
  render() {
    const { about } = content;

    return (
      <React.Fragment>
        <Container
          id="aboutme"
          data-spy="scroll"
          style={{ color: "#1a1a1a", fontFamily: "'Roboto', sans-serif", padding: "3rem 1rem" }}
        >
          <Row className="justify-content-center">
            <Col md={8}>
              <h2
                className="text-center font-weight-bold"
                style={{ 
                  fontFamily: "'Playfair Display', serif", 
                  fontSize: "2.5rem", 
                  letterSpacing: "2px", 
                  marginBottom: "1rem",
                  color: "#2c3e50"
                }}
              >
                {about.heading}
              </h2>
              <hr className="my-4" style={{ borderTop: "3px solid #3498db", width: "60px", margin: "0 auto 2rem auto" }} />
              
              <div className="text-center mb-4">
                <img
                  src={profilepic}
                  alt="Rajiv Basnet"
                  className="rounded-circle img-thumbnail"
                  style={{ height: "200px", border: "2px solid #94b1c4ff" }}
                />
              </div>

              {about.paragraphs.map((paragraph, index) => (
                <p key={index} style={{ fontSize: "1.1rem", lineHeight: "1.8", color: "#34495e" }} dangerouslySetInnerHTML={{ __html: paragraph }} />
              ))}
            </Col>
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}

export default AboutMe;
