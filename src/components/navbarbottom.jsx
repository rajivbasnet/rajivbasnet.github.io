import React, { Component } from "react";
import { Nav, Navbar } from "react-bootstrap";
import { getLinks } from "../details/others";

class NavBarBottom extends Component {
  state = {
    links: getLinks(),
    backgroundColor: "#ffffff",
    color: "#0f1115",
  };

  navItems = [
    {
      _id: "1",
      itemName: "ABOUT ME",
      href: "#aboutme",
      to: "/aboutme",
    },
    {
      _id: "2",
      itemName: "PROJECTS",
      href: "#projects",
      to: "/projects",
    },
    {
      _id: "3",
      itemName: "RESUME",
      href: this.state.links.resume,
      to: "resume",
    },
    {
      _id: "4",
      itemName: "CONTACT",
      href: "#contact",
      to: "/contact",
    },
  ];

  checkLink = (item) => {
    let target = "";
    if (item.itemName === "RESUME") {
      target = "_blank";
    }
    return target;
  };

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

  componentDidMount() {
    window.addEventListener("scroll", this.listenScrollEvent);
  }

  scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  getNavItems = (item) => {
    return (
      <Nav.Link
        key={item._id}
        href={item.href}
        to={item.to}
        target={this.checkLink(item)}
        style={{
          color: this.state.color,
        }}
      >
        {item.itemName}
      </Nav.Link>
    ) 
  }

  render() {
    const navItems = this.navItems;
    return (
      <React.Fragment>
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
              {navItems.map((item) => (this.getNavItems(item)))}
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
      </React.Fragment>
    );
  }
}

export default NavBarBottom;
