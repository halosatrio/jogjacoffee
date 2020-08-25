import React, { Component } from "react";
import { connect } from "react-redux";

import NavBar from "../components/common/navBar";
// import CartForm from "../components/cartForm";
import CartItem from "../components/cartItem";
import TitleText from "../components/common/titleText";

class ExamplePage extends Component {
  componentDidMount() {
    window.title = "Ngopi di Jogja";
    window.scrollTo(0, 0);
  }

  render() {
    const { cartItems } = this.props;
    return (
      <>
        <NavBar {...this.props} />

        {/* CONTAINER WHEN SM AND LG */}
        <div className="container body-cart my-5 d-md-none d-lg-block">
          <TitleText>Cart</TitleText>
          <div className="row">
            {cartItems.length > 0 ? (
              <div className="col-md-8 mb-4">
                <CartItem cartItems={cartItems} />
              </div>
            ) : (
              <div className="col-12 text-muted mb-5">
                <h2 className="text-center">Your Cart is Empty</h2>
              </div>
            )}

            {/* {checkout && (
              <div className="col-12 text-center text-orange">
                <h5 className="mb-4">Checkout Success</h5>
                <a
                  href="/"
                  className="btn btn-outline-warning btn-lg px-5 font-weight-bolder"
                >
                  Back to Store
                </a>
              </div>
            )} */}

            {cartItems.length > 0 && (
              <div className="col-md-4">{/* <CartForm /> */}</div>
            )}
          </div>
        </div>

        {/* NO CONTAINER WHEN MD */}
        <div className="body-cart my-5 px-4 d-none d-md-block d-lg-none">
          <TitleText>Cart</TitleText>
          <div className="row">
            {cartItems.length > 0 ? (
              <div className="col-md-8">
                <CartItem cartItems={cartItems} />
              </div>
            ) : (
              <div className="col-12 text-muted mb-5">
                <h2 className="text-center">Your Cart is Empty</h2>
              </div>
            )}

            {/* {checkout && (
              <div className="col-12 text-center text-success">
                <p>Checkout Success</p>
                <a href="/" className="btn btn-outline-success">
                  Back to Store
                </a>
              </div>
            )} */}

            {cartItems.length > 0 && (
              <div className="col-md-4">{/* <CartForm /> */}</div>
            )}
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    cartItems: state.cartItems,
  };
};

export default connect(mapStateToProps)(ExamplePage);

// import React from "react";

// import List from "../components/contoh";
// import Form from "../components/heheForm";
// import Post from "../components/hehePost";

// const ExamplePage = () => {
//   return (
//     <div className="p-5">
//       <h1>Hello Redux Page Example</h1>
//       <div>
//         <h2>Articles</h2>
//         <List />
//       </div>
//       <div>
//         <h2>Add a newarticle</h2>
//         <Form />
//       </div>
//       <div>
//         <h2>API posts</h2>
//         <Post />
//       </div>
//     </div>
//   );
// };

// export default ExamplePage;
