import React, { Component } from "react";

import IcontText from "./common/iconText";
import Button from "./common/button";

import { CartIcon } from "../assets/icons";

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true,
    };
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }

  getNavLinkClass = (path) => {
    return this.props.location.pathname === path ? " active" : "";
  };

  render() {
    const collapsed = this.state.collapsed;
    const classOne = collapsed
      ? "collapse navbar-collapse"
      : "collapse navbar-collapse show";
    const classTwo = collapsed
      ? "navbar-toggler navbar-toggler-right collapsed"
      : "navbar-toggler navbar-toggler-right";

    if (this.props.isCentered) {
      return (
        <nav className="navbar navbar-expand-lg navbar-light py-3">
          <div className="container">
            <IcontText className="mx-auto" />
          </div>
        </nav>
      );
    }

    return (
      <nav className="navbar sticky-top navbar-expand-lg bg-white shadow-sm navbar-light py-3">
        <div className="container">
          <IcontText />
          <button
            onClick={this.toggleNavbar}
            className={`${classTwo}`}
            type="button"
            data-toggle="collapse"
            data-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className={`${classOne}`} id="navbarResponsive">
            <ul className="navbar-nav ml-auto">
              <li className={`nav-item${this.getNavLinkClass("/katalog")}`}>
                <Button className="nav-link" type="link" href="/katalog">
                  Katalog
                </Button>
              </li>
              <li className={`nav-item${this.getNavLinkClass("/cart")}`}>
                <Button className="nav-link" type="link" href="/cart">
                  <CartIcon width={"18px"} />
                  Keranjang
                </Button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default NavBar;
