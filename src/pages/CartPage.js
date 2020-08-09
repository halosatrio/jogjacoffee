// import React, { useEffect, useContext } from "react";

import NavBar from "../components/common/navBar";
import CartForm from "../components/cartForm";
import CartItem from "../components/cartItem";
import TitleText from "../components/common/titleText";

import { CartContext } from "./../context/CartContext";

import React, { Component } from "react";

class CartPage extends Component {
  static contextType = CartContext;

  componentDidMount() {
    window.title = "Ngopi di Jogja";
    window.scrollTo(0, 0);
  }

  render() {
    const { cartItems, checkout } = this.context;

    return (
      <>
        <NavBar {...this.props} />
        <div className="container body-cart my-5">
          <TitleText>Keranjang</TitleText>
          <div className="row">
            {cartItems.length > 0 ? (
              <div className="col-md-8">
                <CartItem />
              </div>
            ) : (
              <div className="col-12 text-muted mb-5">
                <h2 className="text-center">Keranjang Anda Kosong</h2>
              </div>
            )}

            {checkout && (
              <div className="col-12 text-center text-success">
                <p>Checkout Berhasil</p>
                <a href="/" className="btn btn-outline-success">
                  Kembali Belanja
                </a>
              </div>
            )}

            {cartItems.length > 0 && (
              <div className="col-md-2">
                <CartForm />
              </div>
            )}
          </div>
        </div>
      </>
    );
  }
}

export default CartPage;
