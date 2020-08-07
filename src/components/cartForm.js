import React, { useContext } from "react";

import Button from "./common/button";

import { CartContext } from "../context/CartContext";
import { formatNumber } from "../utils/numberFormat";

const CartForm = () => {
  const { total, itemCount, clearCart, handleCheckout } = useContext(
    CartContext
  );

  return (
    <div className="card" style={{ width: "18rem" }}>
      <div className="card-body">
        <p className="mb-1">Total Barang</p>
        <p className="h4 mb-3">{itemCount}</p>
        <p className="mb-1">Total Pembayaran</p>
        <p className="h3">{formatNumber(total)}</p>
        <hr className="my-4" />
        <div className="text-center">
          <Button
            type="button"
            className="btn btn-primary mr-3"
            onClick={handleCheckout}
          >
            CHECKOUT
          </Button>
          <Button
            type="button"
            className="btn btn-outline-secondary"
            onClick={clearCart}
          >
            HAPUS
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CartForm;
