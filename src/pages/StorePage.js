import React, { Component } from "react";
import { connect } from "react-redux";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import BannerPartner from "./../components/bannerPartner";
import ProdukTerbaru from "../components/produkTerbaru";
import ProdukRekomendasi from "./../components/produkRekomendasi";
import ProdukPilihan from "./../components/produkPilihan";
import Jumbotron from "./../components/jumbotron";
import Explore from "../components/explore";

import { getCoffees } from "../store/actions";
import { getPartner } from "../store/actions";
import { partner } from "../services/partner";
import { coffees } from "../services/coffee";

class StorePage extends Component {
  constructor(props) {
    super(props);
    this.refRekomendasi = React.createRef();
  }

  componentDidMount() {
    window.title = "Ngopi di Jogja";
    window.scrollTo(0, 0);

    this.props.getCoffees(coffees);
    this.props.getPartner(partner);
  }

  render() {
    const { partner, coffees, cartItems } = this.props;

    const getRecommended = () => {
      return coffees.filter((c) => c.isRecommended === true);
    };

    const getTerbaru = () => {
      return coffees.filter((c) => c.isTerbaru === true);
    };

    const getPilihan = () => {
      return coffees.filter((c) => c.isPilihan === true);
    };

    const pilihan = getPilihan(),
      terbaru = getTerbaru(),
      recommended = getRecommended();

    return (
      <div className="store-page">
        <NavBar {...this.props} cartItems={cartItems} />
        <Jumbotron refRekomendasi={this.refRekomendasi} />
        <BannerPartner items={partner} />
        <section className="featured shadow-sm bg-white">
          <ProdukRekomendasi
            refRekomendasi={this.refRekomendasi}
            items={recommended}
          />
          <hr />
          <ProdukTerbaru items={terbaru} />
          <hr />
          <ProdukPilihan items={pilihan} />
        </section>
        <Explore />
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    coffees: state.coffees,
    partner: state.partner,
    cartItems: state.cartItems,
  };
};

export default connect(mapStateToProps, { getPartner, getCoffees })(StorePage);
