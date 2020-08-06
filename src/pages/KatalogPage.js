import React, { Component } from "react";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import ItemsProduct from "../components/ItemsProduct";
import TitleText from "../components/common/titleText";

import { coffees } from "../services/coffee";

class KatalogPage extends Component {
  state = {
    coffees,
  };

  render() {
    const { coffees } = this.state;
    return (
      <>
        <NavBar {...this.props} />
        <TitleText className="mt-5">Katalog Kopi Pilihan</TitleText>
        <ItemsProduct items={coffees} />
        <Footer />
      </>
    );
  }
}

export default KatalogPage;
