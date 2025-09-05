import React, { Component } from "react";
import profilepic from "./images/profilepic.jpg";
import { Container, Row, Col } from "react-bootstrap";

class AboutMe extends Component {
  render() {
    return (
      <React.Fragment>
        <Container
          id="aboutme"
          data-spy="scroll"
          data-target="#navbar-bottom"
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
                ABOUT ME
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

              <p style={{ fontSize: "1.1rem", lineHeight: "1.8", color: "#34495e" }}>
                Hi, I am <strong>Rajiv Basnet</strong>, 
                a Software Engineer specializing in scalable data architectures, automation, and robust backend APIs. 
                I am passionate about distributed systems and infrastructure, solving complex problems to build efficient and resilient solutions.
              </p>
              <p style={{ fontSize: "1.1rem", lineHeight: "1.8", color: "#34495e" }}>
                The ingenuity of computers and the magic of mathematics have amazed me since I was in eighth grade. 
                I rejoice in the use of artistic math involved in computational problem-solving. 
                I graduated with a <strong>B.S. in Computer Science & Mathematics</strong> from St. Joseph’s University in 2021. 
                During that time, I joined the <strong>DS3 Program at Microsoft Research NYC</strong> and later interned at <strong>Tarifica</strong>, building data systems and dashboards that sparked my passion for data-driven solutions.
              </p>
              <p style={{ fontSize: "1.1rem", lineHeight: "1.8", color: "#34495e" }}>
                Since then, I have worked at companies like <strong>Middesk</strong> and <strong>Ribbon Health</strong>, designing large-scale data pipelines, implementing entity resolution and MDM platforms, and optimizing backend APIs for enterprise-scale operations. 
                Building on this experience, I have expanded my skills across software engineering infrastructure, exploring data, backend systems, and some frontend technologies.
              </p>
              <p style={{ fontSize: "1.1rem", lineHeight: "1.8", color: "#34495e" }}>
                Beyond work, I enjoy <em>watching movies, traveling, and listening to music</em>.
              </p>
            </Col>
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}

export default AboutMe;
