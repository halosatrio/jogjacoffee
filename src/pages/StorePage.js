import React, { Component } from "react";

import NavBar from "../components/navBar";
import Footer from "../components/footer";
import BannerPartner from "./../components/bannerPartner";
import ProdukTerbaru from "../components/produkTerbaru";
import ProdukRekomendasi from "./../components/produkRekomendasi";
import ProdukPilihan from "./../components/produkPilihan";
import Jumbotron from "./../components/jumbotron";

import { getRecommended, getPilihan, getTerbaru } from "../services/coffee";
import { getPartner } from "./../services/partner";

class StorePage extends Component {
  state = {
    recommended: getRecommended(),
    pilihan: getPilihan(),
    terbaru: getTerbaru(),
    partner: getPartner(),
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
        <Jumbotron />
        <BannerPartner items={partner} />
        <section class="featured shadow-sm bg-white p-3 mx-5">
          <div class="container">
            <ProdukRekomendasi items={recommended} />
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
