import React, { Component } from "react";
import AboutMe from "./about";
import Footer from "./footer";
import ContactNF from "./contactNF";
import { Element } from 'react-scroll';

class HomePage extends Component {
  render() {
    return (
      <React.Fragment>

        <Element name="aboutme">
          <AboutMe />
        </Element>

        <Element name="contact">
          <ContactNF />
        </Element>

        <Footer />
      </React.Fragment>
    );
  }
}

export default HomePage;
