import React, { useContext, useEffect } from "react";
import { Helmet } from "react-helmet-async";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import ItemsProduct from "../components/ItemsProduct";
import TitleText from "../components/common/titleText";

import { ProductsContext } from "../context/ProductsContext";

const KatalogPage = (props) => {
  useEffect(() => {
    window.title = "Ngopi di Jogja";
    window.scrollTo(0, 0);
  }, []);

  const { products } = useContext(ProductsContext);

  const pathName = props.location.pathname;
  console.log("path from katalogPage", pathName);

  return (
    <>
      <NavBar path={pathName} />
      <TitleText className="mt-5">Katalog Kopi Pilihan</TitleText>
      <ItemsProduct product={products} />
      <Footer />
    </>
  );
};

export default KatalogPage;
