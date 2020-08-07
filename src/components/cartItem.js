import React, { useContext } from "react";
import { PlusCircleIcon, MinusCircleIcon, TrashIcon } from "../assets/icons";
import { CartContext } from "../context/CartContext";
import { formatNumber } from "../utils/numberFormat";

const CartItem = () => {
  const { cartItems, increase, decrease, removeProduct } = useContext(
    CartContext
  );

  return (
    <div className="card card-body border-0">
      {cartItems.map((product) => (
        <div key={product.id} className="row no-gutters py-2">
          <div className="col-sm-2 p-2" key={product.id}>
            <img
              src={product.imageUrl}
              alt={product.name}
              className="img-fluid d-block"
              style={{ margin: "0 auto", maxHeight: "100px" }}
            />
          </div>
          <div className="col-sm-4 p-2">
            <h5 className="mb-1">{product.name}</h5>
            <p className="mb-1">Harga: {formatNumber(product.price)}</p>
          </div>
          <div className="col-sm-2 p-2 text-center ">
            <p className="mb-0">Jumlah: {product.quantity}</p>
          </div>
          <div className="col-sm-4 p-2 text-right">
            <button
              onClick={() => increase(product)}
              className="btn btn-primary btn-sm mr-2 mb-1"
            >
              <PlusCircleIcon width={"20px"} />
            </button>

            {product.quantity > 1 && (
              <button
                onClick={() => decrease(product)}
                className="btn btn-danger btn-sm mb-1"
              >
                <MinusCircleIcon width={"20px"} />
              </button>
            )}

            {product.quantity === 1 && (
              <button
                onClick={() => removeProduct(product)}
                className="btn btn-danger btn-sm mb-1"
              >
                <TrashIcon width={"20px"} />
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CartItem;
