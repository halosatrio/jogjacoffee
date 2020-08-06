import React, { Component } from "react";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import BannerPartner from "./../components/bannerPartner";
import ProdukTerbaru from "../components/produkTerbaru";
import ProdukRekomendasi from "./../components/produkRekomendasi";
import ProdukPilihan from "./../components/produkPilihan";
import Jumbotron from "./../components/jumbotron";

import { getRecommended, getPilihan, getTerbaru } from "../services/coffee";
import { partner } from "../services/partner";

class StorePage extends Component {
  constructor(props) {
    super(props);
    this.refRekomendasi = React.createRef();
  }

  state = {
    recommended: getRecommended(),
    pilihan: getPilihan(),
    terbaru: getTerbaru(),
    partner,
  };

  componentDidMount() {
    window.title = "Ngopi di Jogja";
    window.scrollTo(0, 0);
  }

  render() {
    const { partner, recommended, terbaru, pilihan } = this.state;
    return (
      <>
        <NavBar {...this.props} />
        <Jumbotron refRekomendasi={this.refRekomendasi} />
        <BannerPartner items={partner} />
        <section className="featured shadow-sm bg-white p-3 mx-5">
          <div className="container">
            <ProdukRekomendasi
              refRekomendasi={this.refRekomendasi}
              items={recommended}
            />
            <ProdukTerbaru items={terbaru} />
            <ProdukPilihan items={pilihan} />
          </div>
        </section>
        <Footer />
      </>
    );
  }
}

export default StorePage;
