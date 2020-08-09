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

  componentDidMount() {
    window.title = "Ngopi di Jogja | Detail Produk";
    window.scrollTo(0, 0);
  }

  render() {
    const { coffees } = this.state;
    return (
      <>
        <NavBar {...this.props} />
        <TitleText className="mt-5">Curated Coffees Catalogue</TitleText>
        <section className="container my-5">
          <div className="row row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-5 mb-3">
            {coffees.map((product) => (
              <ItemsProduct key={product.id} product={product} />
            ))}
          </div>
        </section>
        <Footer />
      </>
    );
  }
}

export default KatalogPage;
