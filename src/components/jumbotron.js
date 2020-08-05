import React from "react";

import Button from "./common/button";

const Jumbotron = (props) => {
  function showRekomendasi() {
    window.scrollTo({
      top: props.refRekomendasi.current.offsetTop - 90,
      behavior: "smooth",
    });
  }

  return (
    <div className="jumbotron jumbotron-fluid">
      <div className="container">
        <h1 className="font-weight-bold line-height-1">Ngopi di Jogja</h1>
        <p className="lead my-5">
          Ajang pertemuan bagi pelaku industri kopi dan penikmat kopi di wilayah
          Yogyakarta
        </p>
        <Button
          type="button"
          onClick={showRekomendasi}
          className="btn px-5 button"
          hasShadow
          isPrimary
        >
          Lihat Produk
        </Button>
      </div>
    </div>
  );
};

export default Jumbotron;
