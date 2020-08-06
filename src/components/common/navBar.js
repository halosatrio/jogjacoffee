import React, { useState } from "react";

import IcontText from "./iconText";
import Button from "./button";

import { CartIcon } from "../../assets/icons";

const NavBar = (props) => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => {
    setCollapsed({
      collapsed: !collapsed,
    });
  };

  const getNavLinkClass = (path) => {
    return props.path === path ? " active" : "";
  };

  const classOne = collapsed
    ? "collapse navbar-collapse"
    : "collapse navbar-collapse show";
  const classTwo = collapsed
    ? "navbar-toggler navbar-toggler-right collapsed"
    : "navbar-toggler navbar-toggler-right";

  if (props.isCentered) {
    return (
      <nav className="navbar navbar-expand-lg navbar-light py-3">
        <div className="container">
          <IcontText className="mx-auto" />
        </div>
      </nav>
    );
  }

  console.log("path from navbar", props.path);

  return (
    <nav className="navbar sticky-top navbar-expand-lg bg-white shadow-sm navbar-light py-3">
      <div className="container">
        <IcontText />
        <button
          onClick={toggleNavbar}
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
            <li className={`nav-item${getNavLinkClass("/katalog")}`}>
              <Button className="nav-link" type="link" href="/katalog">
                Katalog
              </Button>
            </li>
            <li className={`nav-item${getNavLinkClass("/cart")}`}>
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
};

export default NavBar;
