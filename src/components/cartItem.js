import React from "react";
import {
  PlusCircleIconcon,
  MinusCircleIcon,
  TrashIcon,
} from "./../assets/icons/index";

const CartItem = () => {
  return (
    <div className="card card-body border-0">
      <div className="row no-gutters py-2">
        <div className="col-sm-2 p-2">
          <img />
        </div>
        <div className="col-sm-4 p-2">
          <h5 className="mb-1">Nama Produk</h5>
          <p className="mb-1">Price: harga produk </p>
        </div>
        <div className="col-sm-2 p-2 text-center ">
          <p className="mb-0">Qty: jumlah beli</p>
        </div>
        <div className="col-sm-4 p-2 text-right">
          <button
            // onClick={() => increase(product)}
            className="btn btn-primary btn-sm mr-2 mb-1"
          >
            <PlusCircleIconcon width={"20px"} />
          </button>

          {/* {product.quantity > 1 && (
            <button
              onClick={() => decrease(product)}
              className="btn btn-danger btn-sm mb-1"
            >
              <MinusCircleIcon width={"20px"} />
            </button>
          )} */}

          {/* {product.quantity === 1 && (
            <button
              onClick={() => removeProduct(product)}
              className="btn btn-danger btn-sm mb-1"
            >
              <TrashIcon width={"20px"} />
            </button>
          )} */}
        </div>
      </div>
    </div>
  );
};

export default CartItem;
