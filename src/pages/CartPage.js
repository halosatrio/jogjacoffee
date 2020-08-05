import React, { Component } from "react";

import NavBar from "../components/common/navBar";
import CartForm from "../components/cartForm";
import CartItem from "../components/cartItem";

class CartPage extends Component {
  componentDidMount() {
    window.title = "Ngopi di Jogja";
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <>
        <NavBar {...this.props} />
        <div className="container body-cart my-5">
          <div className="row">
            <div class="col-md-8">
              <CartItem />
            </div>
            <div class="col-md-2">
              <CartForm />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default CartPage;
