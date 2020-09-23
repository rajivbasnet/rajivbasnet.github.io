import React, { Component } from "react";
import bgimg from "./images/bgimage.jpg";
import { Carousel } from "react-bootstrap";
import ReactRotatingText from "react-rotating-text";

class Slider extends Component {

  scrollTo = () => {
    window.scrollTo({
      top: document.querySelector(".slider").scrollHeight + document.querySelector(".navbartop").scrollHeight + 2,
      behavior: "smooth",
    });
  };

  render() {
    return (
      <React.Fragment>
        <Carousel className= 'slider'>
          <Carousel.Item>
            <img className="bgimage d-block w-100" src={bgimg} alt="First slide" />
            <Carousel.Caption>
              <div>
                {/* <p className="textTop" style={{ color: "#212529" }}>
                  Hello, I am
                </p> */}
                <h3 className="myName"> &ndash; Rajiv Basnet &ndash; </h3>
                <p>
                  {/* <ReactRotatingText
                    style={{ color: "#212529" }}
                    items={[
                      "I'm an aspiring Software + Data Engineer...",
                      "...enthusiastic about modern CI/CD practices...",
                      "...and I sing for fun.",
                    ]}
                  /> */}
                </p>
                <p>
                 
                <div
                  className="header-socials-icon ml-4 mr-4"
                  // to="route"
                  rel="noopener noreferrer"
                  // target="_blank"
                  onClick = {() => this.scrollTo()}
                  id = "arrowdown"
                  style = {{border : "0px"}}
                >
                  <span>
                    <i className="fa fa-arrow-down" style = {{marginTop: "5%"}}></i>
                  </span>
                </div>
                </p>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </React.Fragment>
    );
  }
}

export default Slider;
