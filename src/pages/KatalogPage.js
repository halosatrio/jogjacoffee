import React, { Component } from "react";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import ItemsProduct from "../components/ItemsProduct";
import { getCoffees } from "../services/coffee";

class KatalogPage extends Component {
  state = {
    coffees: getCoffees(),
  };

  render() {
    const { coffees } = this.state;
    return (
      <>
        <NavBar {...this.props} />
        <ItemsProduct items={coffees} />
        <Footer />
      </>
    );
  }
}

export default KatalogPage;
