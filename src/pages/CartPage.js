// import React, { useEffect, useContext } from "react";

import NavBar from "../components/common/navBar";
import CartForm from "../components/cartForm";
import CartItem from "../components/cartItem";
import TitleText from "../components/common/titleText";

import { CartContext } from "./../context/CartContext";

import React, { Component } from "react";
import Button from "../components/common/button";

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

        {/* CONTAINER WHEN SM AND LG */}
        <div className="container body-cart my-5 d-md-none d-lg-block">
          <TitleText>Cart</TitleText>
          <div className="row">
            {cartItems.length > 0 ? (
              <div className="col-md-8 mb-4">
                <CartItem />
              </div>
            ) : (
              <div className="col-12 text-muted mb-5">
                <h2 className="text-center">Your Cart is Empty</h2>
              </div>
            )}

            {checkout && (
              <div className="col-12 text-center text-orange">
                <h5 className="mb-4">Checkout Success</h5>
                <Button
                  type="link"
                  href="/"
                  className="btn btn-outline-warning btn-lg px-5 font-weight-bolder"
                >
                  Back to Store
                </Button>
              </div>
            )}

            {cartItems.length > 0 && (
              <div className="col-md-4">
                <CartForm />
              </div>
            )}
          </div>
        </div>

        {/* NO CONTAINER WHEN MD */}
        <div className="body-cart my-5 px-4 d-none d-md-block d-lg-none">
          <TitleText>Cart</TitleText>
          <div className="row">
            {cartItems.length > 0 ? (
              <div className="col-md-8">
                <CartItem />
              </div>
            ) : (
              <div className="col-12 text-muted mb-5">
                <h2 className="text-center">Your Cart is Empty</h2>
              </div>
            )}

            {checkout && (
              <div className="col-12 text-center text-success">
                <p>Checkout Success</p>
                <a href="/" className="btn btn-outline-success">
                  Back to Store
                </a>
              </div>
            )}

            {cartItems.length > 0 && (
              <div className="col-md-4">
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
