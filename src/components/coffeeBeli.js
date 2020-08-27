import React from "react";

import Button from "./common/button";

import { formatNumber } from "./../utils/numberFormat";

const CoffeeBeli = (props) => {
  const { data, addProduct, increase, cartItems } = props;

  function showInfoProduk() {
    window.scrollTo({
      top: props.refInfoProduk.current.offsetTop - 90,
      behavior: "smooth",
    });
  }

  const isInCart = (product) => {
    return !!cartItems.find((item) => item.id === product.id);
  };

  return (
    <div className="card coffee-beli p-4 mb-5 shadow-sm">
      <div className="card-body text-center">
        <h2 className="card-title mb-4 text-primary">{data.name}</h2>
        <h6 className="card-subtitle text-muted mb-3">
          Net Weight: {data.weight}
        </h6>
        <Button
          type="button"
          onClick={showInfoProduk}
          className="btn btn-sm btn-dark mt-2 mb-5 px-4"
        >
          Product Information
        </Button>
        <h3 className="mb-3">Price: Rp{formatNumber(data.price)}</h3>

        {isInCart(data) && (
          <Button
            type="button"
            onClick={() => increase(data)}
            className="btn btn-outline-warning py-2"
            isBlock
          >
            Add more
          </Button>
        )}

        {!isInCart(data) && (
          <Button
            type="button"
            onClick={() => addProduct(data)}
            className="btn btn-warning py-2"
            isBlock
          >
            Add to cart
          </Button>
        )}
      </div>
    </div>
  );
};

export default CoffeeBeli;
