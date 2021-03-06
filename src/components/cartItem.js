import React, { useContext } from "react";

import Button from "./common/button";

import { CartContext } from "../context/CartContext";
import { formatNumber } from "../utils/numberFormat";

import { PlusCircleIcon, MinusCircleIcon, TrashIcon } from "../assets/icons";

const CartItem = () => {
  const { cartItems, increase, decrease, removeProduct } = useContext(
    CartContext
  );

  return (
    <div>
      {cartItems.map((product) => (
        <div key={product.id} className="row py-2 mb-3">
          <div className="col-3 col-sm-4 col-md-4 col-lg-2" key={product.id}>
            <img
              src={product.imageUrl}
              alt={product.name}
              className="img-fluid d-block"
              style={{ maxHeight: "120px" }}
            />
          </div>
          <div className="col-5 col-md-5">
            <Button type="link" href={`coffee/${product.id}`}>
              <h5 className="mb-2">{product.name}</h5>
            </Button>
            <p className="text-muted mb-1">
              Price: Rp{formatNumber(product.price)}
            </p>
            <p className="mb-0">Quantity: {product.quantity}</p>
          </div>
          <div className="col-4 col-sm-3 col-md-3 text-center">
            <button
              onClick={() => increase(product)}
              className="btn btn-secondary btn-sm mr-2 mb-1"
            >
              <PlusCircleIcon width={"20px"} />
            </button>

            {product.quantity > 1 && (
              <Button
                type="button"
                onClick={() => decrease(product)}
                className="btn btn-primary btn-sm mb-1"
              >
                <MinusCircleIcon width={"20px"} />
              </Button>
            )}

            {product.quantity === 1 && (
              <Button
                type="button"
                onClick={() => removeProduct(product)}
                className="btn btn-primary btn-sm mb-1"
              >
                <TrashIcon width={"20px"} />
              </Button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CartItem;
