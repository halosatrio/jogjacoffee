import React, { Component } from "react";

import NavBar from "./../components/navBar";
import Footer from "../components/footer";
import CoffeeImage from "../components/coffeeImage";
import CoffeeDetail from "../components/coffeeDetail";

import { getCoffee } from "./../services/coffee";

class DetailPage extends Component {
  state = {
    data: {
      _id: "",
      name: "",
      company: "",
      price: "",
      extras: "",
      description: "",
      weight: "",
      imageUrl: "",
    },
  };
  componentDidMount() {
    window.title = "Ngopi di Jogja | Detail Produk";
    window.scrollTo(0, 0);

    const coffeeId = this.props.match.params.id;

    const coffee = getCoffee(coffeeId);

    this.setState({ data: this.mapToViewModel(coffee) });
  }

  mapToViewModel(coffee) {
    return {
      _id: coffee._id,
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
        <section className="container mb-5">
          <div className="row justify-content-around">
            <div className="col-10 col-md-6 col-lg-6 col-xl-5 mb-4">
              <CoffeeImage data={data} />
            </div>
            <div className="deskripsi-buku col-11 col-md-6 col-lg-6 col-xl-5">
              <CoffeeDetail data={data} />
            </div>
          </div>
        </section>
        <Footer />
      </>
    );
  }
}

export default DetailPage;
