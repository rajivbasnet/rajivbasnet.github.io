import React, { Component } from "react";
import content from "../data/siteContent.json";

class ContactNF extends Component {
  render() {
    const { contact } = content;

    return (
      <section id="contact" className="section" aria-labelledby="contact-heading">
        <h2 id="contact-heading" className="section-heading">{contact.heading}</h2>
        <div className="callout">
          <p className="section-text">{contact.description}</p>
          <ul className="callout-links">
            {contact.socials.map((s) => (
              <li key={s.id}>
                <a href={s.link} target="_blank" rel="noopener noreferrer">
                  <i className={s.icon_class} aria-hidden="true" /> {s.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>
    );
  }
}

export default ContactNF;
