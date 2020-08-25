import React, { Component } from "react";
import { connect } from "react-redux";

import { actions } from "../store/reducer";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import CoffeeImage from "../components/coffeeImage";
import CoffeeDetail from "../components/coffeeDetail";
import CoffeeBeli from "../components/coffeeBeli";

import { getCoffee } from "../services/coffee";

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

    const coffeeId = this.props.match.params.id;

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
    const { data } = this.state;

    return (
      <>
        <NavBar {...this.props} />
        <section className="container my-5">
          <div className="row justify-content-around">
            <div className="col-10 col-md-6 col-lg-6 col-xl-5 mb-4">
              <CoffeeImage data={data} />
            </div>
            <div className="col-11 col-md-6 col-lg-6 col-xl-5">
              <CoffeeBeli
                data={data}
                refInfoProduk={this.refInfoProduk}
                addProduct={this.props.onAddProduct}
              />
            </div>
          </div>
          <CoffeeDetail data={data} refInfoProduk={this.refInfoProduk} />
        </section>
        <Footer />
      </>
    );
  }
}

function mapStateToProps(state) {
  return {
    message: state.message,
    newTodo: state.newTodo,
    todos: state.todos,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onAddProduct(product) {
      dispatch(actions.addProduct(product));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(DetailPage);
