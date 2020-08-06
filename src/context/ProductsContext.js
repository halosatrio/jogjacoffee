import React, { createContext, useState } from "react";
import { coffees } from "./../services/coffee";
export const ProductsContext = createContext();

const ProductsContextProvider = ({ children }) => {
  const [products] = useState(coffees);

  return (
    <ProductsContext.Provider value={{ products }}>
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsContextProvider;
