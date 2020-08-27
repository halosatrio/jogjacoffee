import React, { Component } from "react";
import { connect } from "react-redux";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import CoffeeImage from "../components/coffeeImage";
import CoffeeDetail from "../components/coffeeDetail";
import CoffeeBeli from "../components/coffeeBeli";

import { getCoffee } from "../services/coffee";
import { coffees } from "../services/coffee";
import {
  getCoffees,
  getCoffeeDetail,
  addProduct,
  increase,
} from "../store/actions";

class DetailPage extends Component {
  state = {
    data: {
      id: "",
      name: "",
      company: "",
      price: "",
      extras: "",
      description: "",
      weight: "",
      imageUrl: "",
    },
  };

  refInfoProduk = React.createRef();

  componentDidMount() {
    window.title = "Ngopi di Jogja | Detail Produk";
    window.scrollTo(0, 0);

    this.props.getCoffees(coffees);

    const coffeeId = this.props.match.params.id;

    this.props.getCoffeeDetail(coffeeId);

    const coffee = getCoffee(coffeeId);
    if (!coffee) return this.props.history.replace("/not-found");

    this.setState({ data: this.mapToViewModel(coffee) });
  }

  mapToViewModel(coffee) {
    return {
      id: coffee.id,
      name: coffee.name,
      company: coffee.company,
      price: coffee.price,
      extras: coffee.extras,
      description: coffee.description,
      weight: coffee.weight,
      imageUrl: coffee.imageUrl,
    };
  }

  render() {
    const { cartItems, coffeeDetail } = this.props;

    return (
      <>
        <NavBar {...this.props} cartItems={cartItems} />
        <section className="container my-5">
          <div className="row justify-content-around">
            <div className="col-10 col-md-6 col-lg-6 col-xl-5 mb-4">
              <CoffeeImage data={coffeeDetail} />
            </div>
            <div className="col-11 col-md-6 col-lg-6 col-xl-5">
              <CoffeeBeli
                data={coffeeDetail}
                refInfoProduk={this.refInfoProduk}
                addProduct={this.props.addProduct}
                increase={this.props.increase}
                cartItems={cartItems}
              />
            </div>
          </div>
          <CoffeeDetail
            data={this.state.data}
            refInfoProduk={this.refInfoProduk}
          />
        </section>
        <Footer />
      </>
    );
  }
}

function mapStateToProps(state) {
  return {
    coffees: state.coffees,
    cartItems: state.cartItems,
    coffeeDetail: state.coffeeDetail,
  };
}

export default connect(mapStateToProps, {
  getCoffees,
  getCoffeeDetail,
  addProduct,
  increase,
})(DetailPage);
