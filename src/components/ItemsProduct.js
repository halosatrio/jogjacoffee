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
    <section className="container my-5">
      <div className="row row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-5 mb-3">
        {product.map((item) => (
          <div key={item._id} className="col mb-4">
            <div className="card text-center h-100">
              <Button type="link" href={`/coffee/${item._id}`}>
                <img
                  src={item.imageUrl}
                  className="card-img-top"
                  alt={item.name}
                />
              </Button>
              <div className="card-body">
                <p className="card-text">{item.name}</p>
                <small className="text-muted align-bottom">{`Berat: ${item.weight}`}</small>
              </div>
              <div className="card-footer">
                <p>{formatNumber(item.price)}</p>

                {isInCart(product) && (
                  <Button
                    onClick={() => increase(product)}
                    className="btn btn-outline-primary btn-sm"
                  >
                    Tambahkan ke Keranjang
                  </Button>
                )}

                {!isInCart(product) && (
                  <Button
                    onClick={() => addProduct(product)}
                    className="btn btn-primary btn-sm"
                  >
                    Masukkan ke Keranjang
                  </Button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ItemsProduct;
