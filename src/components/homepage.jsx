import React, { Component } from "react";

import NavBarTop from "./navbartop";
import NavBarBottom from "./navbarbottom";
import Slider from "./slider";
import AboutMe from "./about";
import Projects from "./projects";
import Footer from "./footer";
// import Contact from "./contact";
import ContactNF from "./contactNF";

class HomePage extends Component {
  render() {
    return (
      <React.Fragment>
      <NavBarTop />
      <Slider />
      <NavBarBottom />
      {""}
      <AboutMe />
      <Projects />
      {""}
      <ContactNF />
      <Footer />
    </React.Fragment>
    );
  }
}

export default HomePage;
