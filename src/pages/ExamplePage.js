import React, { Component } from "react";
import { connect } from "react-redux";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import ItemsProduct from "../components/ItemsProduct";
import TitleText from "../components/common/titleText";

import { getCoffees } from "../store/actions";
import { coffees } from "../services/coffee";

class ExamplePage extends Component {
  componentDidMount() {
    window.title = "Ngopi di Jogja | Detail Produk";
    window.scrollTo(0, 0);

    this.props.getCoffees(coffees);
  }

  render() {
    const { coffees } = this.props;

    return (
      <>
        <NavBar {...this.props} />
        <TitleText className="mt-5 px-3">Products Catalogue</TitleText>
        <section className="katalog container my-5">
          <div className="row row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-5 mb-3">
            {coffees.map((product) => (
              <ItemsProduct key={product.id} product={product} />
            ))}
          </div>
        </section>
        <Footer />
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    coffees: state.coffees,
  };
};

export default connect(mapStateToProps, { getCoffees })(ExamplePage);

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
