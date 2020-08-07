import React, { useContext } from "react";

import Button from "./common/button";

import { formatNumber } from "./../utils/numberFormat";
import { CartContext } from "./../context/CartContext";

const ItemsProduct = ({ product }) => {
  const { addProduct, cartItems, increase } = useContext(CartContext);

  const isInCart = (product) => {
    return !!cartItems.find((item) => item.id === product.id);
  };

  return (
    <div className="col mb-4">
      <div className="card text-center h-100">
        <Button type="link" href={`/coffee/${product.id}`}>
          <img
            src={product.imageUrl}
            className="card-img-top"
            alt={product.name}
          />
        </Button>
        <div className="card-body">
          <p>{product.name}</p>
          <small className="text-muted align-bottom">{`Berat: ${product.weight}`}</small>
        </div>
        <div className="card-footer">
          <p>{formatNumber(product.price)}</p>

          {isInCart(product) && (
            <Button
              type="button"
              onClick={() => increase(product)}
              className="btn btn-outline-primary btn-sm"
            >
              Add more
            </Button>
          )}

          {!isInCart(product) && (
            <Button
              type="button"
              onClick={() => addProduct(product)}
              className="btn btn-primary btn-sm"
            >
              Add to cart
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ItemsProduct;
