import React, { Component } from "react";
import NavBarTop from "./navbartop";
// import NavBarBottom from "./navbarbottom";
import Slider from "./slider";
import AboutMe from "./about";
import Projects from "./projects";
import Footer from "./footer";
// import Contact from "./contact";
import ContactNF from "./contactNF";
import { Nav, Navbar } from "react-bootstrap";
import { getLinks } from "../details/others";
import scrollToComponent from 'react-scroll-to-component';

class HomePage extends Component {
  state = {
    links: getLinks(),
    backgroundColor: "#ffffff",
    color: "#0f1115",
  };

  componentDidMount() {
    window.addEventListener("scroll", this.listenScrollEvent);
  }
  
  listenScrollEvent = (e) => {
    if (window.scrollY > 400) {
      this.setState({
        backgroundColor: "#22252a",
        color: "#ffffff",
      });
    } else {
      this.setState({
        backgroundColor: "#ffffff",
        color: "#0f1115",
      });
    }
  };

  scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  scToC = (p) => {
    scrollToComponent(p, {
      offset: 0,
      align: 'top',
      duration: 100,
    });
  }

  render() {
    return (
      <React.Fragment>
      <NavBarTop />
      <Slider btnScTo = {this.aboutme} />
      <Navbar
          collapseOnSelect
          expand="md"
          sticky="top"
          id="navbar-bottom"
          className="navbar-bottom"
          style={{
            backgroundColor: this.state.backgroundColor,
          }}
        >
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link onClick = {() => this.scToC(this.aboutme)} style = {{color: this.state.color}}> ABOUT ME </Nav.Link>
              <Nav.Link onClick = {() => this.scToC(this.projects)} style = {{color: this.state.color}}> PROJECTS </Nav.Link>
              <Nav.Link href = {this.state.links.resume} target = "_blank" style = {{color: this.state.color}}> RESUME </Nav.Link>
              <Nav.Link onClick = {() => this.scToC(this.contact)} style = {{color: this.state.color}}> CONTACT </Nav.Link>
            </Nav>

            <Nav className="justify-content-end">
              <Nav.Link onClick={this.scrollToTop}>
                <i
                  className="fa fa-home"
                  aria-hidden="true"
                  style={{
                    color: this.state.color,
                    fontSize: "20px",
                  }}
                ></i>
              </Nav.Link>
            </Nav>

            <Nav>
              <Nav.Link href="#deets"></Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      {/* <NavBarBottom /> */}

      {""}
      <AboutMe ref={(s) => { this.aboutme = s; }} />
      <Projects ref={(s) => { this.projects = s; }}/>
      {""}
      <ContactNF ref={(s) => { this.contact = s; }}/>
      <Footer />
    </React.Fragment>
    );
  }
}

export default HomePage;
