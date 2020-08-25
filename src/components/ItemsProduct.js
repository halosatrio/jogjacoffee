import React from "react";

import Button from "./common/button";

import { formatNumber } from "./../utils/numberFormat";

const ItemsProduct = ({ product }) => {
  return (
    <div className="col mb-4 px-2">
      <div className="card text-center h-100 shadow-sm">
        <Button type="link" href={`/coffee/${product.id}`}>
          <img
            src={product.imageUrl}
            className="card-img-top"
            alt={product.name}
          />
        </Button>
        <div className="card-body">
          <h6>{product.name}</h6>
          <p className="mt-4 mb-0">{`Weight: ${product.weight}`}</p>
        </div>
        <div className="card-footer">
          <p>Rp{formatNumber(product.price)}</p>

          <Button
            type="button"
            onClick={() => console.log("clicked")}
            className="btn btn-outline-warning btn-sm"
            isBlock
          >
            add to cart
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ItemsProduct;

// import React, { useContext } from "react";

// import Button from "./common/button";

// import { formatNumber } from "./../utils/numberFormat";
// import { CartContext } from "./../context/CartContext";

// const ItemsProduct = ({ product }) => {
//   const { addProduct, cartItems, increase } = useContext(CartContext);

//   const isInCart = (product) => {
//     return !!cartItems.find((item) => item.id === product.id);
//   };

//   return (
//     <div className="col mb-4 px-2">
//       <div className="card text-center h-100 shadow-sm">
//         <Button type="link" href={`/coffee/${product.id}`}>
//           <img
//             src={product.imageUrl}
//             className="card-img-top"
//             alt={product.name}
//           />
//         </Button>
//         <div className="card-body">
//           <h6>{product.name}</h6>
//           <p className="mt-4 mb-0">{`Weight: ${product.weight}`}</p>
//         </div>
//         <div className="card-footer">
//           <p>Rp{formatNumber(product.price)}</p>

//           {isInCart(product) && (
//             <Button
//               type="button"
//               onClick={() => increase(product)}
//               className="btn btn-outline-warning btn-sm"
//               isBlock
//             >
//               add more
//             </Button>
//           )}

//           {!isInCart(product) && (
//             <Button
//               type="button"
//               onClick={() => addProduct(product)}
//               className="btn btn-warning btn-sm"
//               isBlock
//             >
//               add to cart
//             </Button>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ItemsProduct;
