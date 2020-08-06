import React, { useEffect } from "react";

import NavBar from "../components/common/navBar";
import CartForm from "../components/cartForm";
import CartItem from "../components/cartItem";

const CartPage = (props) => {
  useEffect(() => {
    window.title = "Ngopi di Jogja";
    window.scrollTo(0, 0);
  }, []);

  const pathName = props.location.pathname;
  console.log("path from katalogPage", pathName);
  return (
    <>
      <NavBar path={pathName} />
      <div className="container body-cart my-5">
        <div className="row">
          <div className="col-md-8">
            <CartItem />
          </div>
          <div className="col-md-2">
            <CartForm />
          </div>
        </div>
      </div>
    </>
  );
};

export default CartPage;
