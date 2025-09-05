import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { getSocials } from "../details/social";

class ContactNF extends Component {
  state = {
    socials: getSocials(),
  };

  render() {
    const { socials } = this.state;

    return (
      <React.Fragment>
        <Container
          id="contact"
          style={{
            color: "#34495e",
            fontFamily: "'Roboto', sans-serif",
            padding: "3rem 1rem",
          }}
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
                  color: "#2c3e50",
                }}
              >
                CONTACT
              </h2>

              <hr className="my-4" style={{ borderTop: "3px solid #3498db", width: "60px", margin: "0 auto 2rem auto" }} />

              <div style={{ textAlign: "center" }}>
                <p
                  style={{
                    fontSize: "1.1rem",
                    lineHeight: "1.8",
                    marginBottom: "2rem",
                  }}
                >
                  I would love to connect with like-minded professionals. Please feel free to reach out. I look forward to engaging, sharing ideas, and exploring opportunities to collaborate.
                </p>

                {/* Social Icons */}
                <div className="my-4">
                  {socials.map((social) => (
                    <a
                      key={social._id}
                      className="mx-3"
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        color: "#2c3e50",
                        fontSize: "28px",
                        transition: "transform 0.2s, color 0.2s",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = "scale(1.2)";
                        e.currentTarget.style.color = "#3498db";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = "scale(1)";
                        e.currentTarget.style.color = "#2c3e50";
                      }}
                    >
                      <i className={social.icon_class}></i>
                    </a>
                  ))}
                </div>

                {/* Email */}
                <p style={{ fontSize: "1.1rem", marginTop: "1.5rem" }}>
                  <a
                    href="mailto:net.rajivbas@gmail.com"
                    style={{
                      color: "#2c3e50",
                      textDecoration: "none",
                      transition: "transform 0.2s, color 0.2s",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "scale(1.05)";
                      e.currentTarget.style.color = "#3498db";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "scale(1)";
                      e.currentTarget.style.color = "#2c3e50";
                    }}
                  >
                    <i className="fa fa-envelope" style={{ marginRight: "8px" }}></i>
                    net.rajivbas@gmail.com
                  </a>
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}

export default ContactNF;
