import React, { useContext } from "react";

import Button from "./common/button";

import { CartContext } from "../context/CartContext";
import { formatNumber } from "../utils/numberFormat";

const CartForm = () => {
  const { total, itemCount, clearCart, handleCheckout } = useContext(
    CartContext
  );

  return (
    <div className="card shadow-sm">
      <div className="card-body text-center text-md-left">
        <p className="mb-1">Product Quantity</p>
        <p className="h4 mb-3">{itemCount}</p>
        <p className="mb-1">Total Payment</p>
        <p className="h3" style={{ fontSize: "1.5rem" }}>
          Rp{formatNumber(total)}
        </p>
        <hr className="my-4" />
        <div className="text-center">
          <Button
            type="button"
            className="btn btn-warning mr-3 btn-sm"
            onClick={handleCheckout}
          >
            CHECKOUT
          </Button>
          <Button
            type="button"
            className="btn btn-outline-primary btn-sm"
            onClick={clearCart}
          >
            CLEAR
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CartForm;
