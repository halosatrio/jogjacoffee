import React, { useContext, useEffect } from "react";

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

  return (
    <>
      <NavBar path={pathName} />
      <TitleText className="mt-5">Katalog Kopi Pilihan</TitleText>
      <section className="container my-5">
        <div className="row row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-5 mb-3">
          {products.map((product) => (
            <ItemsProduct key={product.id} product={product} />
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
};

export default KatalogPage;
