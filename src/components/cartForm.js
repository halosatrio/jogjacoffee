import React from "react";
import Button from "./common/button";

const CartForm = () => {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <div className="card-body">
        <p className="mb-1">Total Items</p>
        <p className="h4 mb-3">{`total item`}</p>
        <p className="mb-1">Total Payment</p>
        <p className="h3">{`IDR harga item`}</p>
        <hr className="my-4" />
        <div className="text-center">
          <Button
            type="button"
            className="btn btn-primary mb-2"
            // onClick={handleCheckout}
          >
            CHECKOUT
          </Button>
          <Button
            type="button"
            className="btn btn-outlineprimary btn-sm"
            // onClick={clearCart}
          >
            CLEAR
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CartForm;
