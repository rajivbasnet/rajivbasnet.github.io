import React, { Component } from "react";
import content from "../data/siteContent.json";

class AboutMe extends Component {
  render() {
    const { about } = content;

    return (
      <section id="aboutme" className="section" aria-labelledby="about-heading">
        <h2 id="about-heading" className="section-heading">{about.heading}</h2>
        {about.paragraphs.map((paragraph, index) => (
          <p key={index} className="section-text" dangerouslySetInnerHTML={{ __html: paragraph }} />
        ))}
      </section>
    );
  }
}

export default AboutMe;
