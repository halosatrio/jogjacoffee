import React, { useContext } from "react";

import Button from "./common/button";

import { formatNumber } from "./../utils/numberFormat";
import { CartContext } from "../context/CartContext";

const CoffeeBeli = (props) => {
  function showInfoProduk() {
    window.scrollTo({
      top: props.refInfoProduk.current.offsetTop - 90,
      behavior: "smooth",
    });
  }

  const { addProduct, cartItems, increase } = useContext(CartContext);

  const isInCart = (product) => {
    return !!cartItems.find((item) => item.id === product.id);
  };

  const { data } = props;

  return (
    <div className="card p-4 mb-5">
      <div className="card-body">
        <h4 className="card-title mb-3">{data.name}</h4>
        <h6 className="card-subtitle text-muted">
          Berat bersih: {data.weight}
        </h6>
        <Button
          type="button"
          onClick={showInfoProduk}
          className="btn btn-sm btn-outline-info mt-2 mb-4"
        >
          Informasi Produk
        </Button>
        <p>Harga: {formatNumber(data.price)}</p>
        <p>Jumlah</p>
        <h5 className="mb-4">Total: {formatNumber(data.price)}</h5>
        {isInCart(data) && (
          <Button
            type="button"
            onClick={() => increase(data)}
            className="btn btn-outline-primary btn-sm"
          >
            Add more
          </Button>
        )}

        {!isInCart(data) && (
          <Button
            type="button"
            onClick={() => addProduct(data)}
            className="btn btn-primary btn-sm"
          >
            Add to cart
          </Button>
        )}
      </div>
    </div>
  );
};

export default CoffeeBeli;
