import React, { Component } from "react";
import { connect } from "react-redux";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import ItemsProduct from "../components/ItemsProduct";
import TitleText from "../components/common/titleText";

import { getCoffees, addProduct, increase } from "../store/actions";
import { coffees } from "../services/coffee";

class ExamplePage extends Component {
  componentDidMount() {
    window.title = "Ngopi di Jogja | Detail Produk";
    window.scrollTo(0, 0);

    this.props.getCoffees(coffees);
  }

  render() {
    const { coffees, cartItems, addItem, increase } = this.props;

    return (
      <>
        <NavBar {...this.props} />
        <TitleText className="mt-5 px-3">Products Catalogue</TitleText>
        <section className="katalog container my-5">
          <div className="row row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-5 mb-3">
            {coffees.map((product) => (
              <ItemsProduct
                key={product.id}
                product={product}
                cartItems={cartItems}
                addItem={addItem}
                increase={increase}
              />
            ))}
          </div>
        </section>
        <Footer />
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    coffees: state.coffees,
    cartItems: state.cartItems,
  };
};

export default connect(mapStateToProps, { getCoffees, addProduct, increase })(
  ExamplePage
);
