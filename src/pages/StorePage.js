import React from "react";

import NavBar from "../components/navBar";
import Footer from "../components/footer";
import BannerPartner from "./../components/bannerPartner";
import ProdukTerbaru from "../components/produkTerbaru";
import ProdukRekomendasi from "./../components/produkRekomendasi";
import ProdukPilihan from "./../components/produkPilihan";

const StorePage = () => {
  return (
    <>
      <NavBar />
      <BannerPartner />
      <ProdukTerbaru />
      <ProdukRekomendasi />
      <ProdukPilihan />
      <Footer />
    </>
  );
};

export default StorePage;
