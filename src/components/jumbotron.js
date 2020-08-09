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
        <h1 className="font-weight-bold line-height-1">
          Jogja Coffee Festival
        </h1>
        <p className="lead my-5">
          Ajang pertemuan bagi pelaku industri kopi dan penikmat kopi di wilayah
          Yogyakarta
        </p>
        <Button
          type="button"
          onClick={showRekomendasi}
          className="btn px-4 py-2 button"
          hasShadow
          isPrimary
        >
          Start Your Coffee Journey!
        </Button>
      </div>
    </div>
  );
};

export default Jumbotron;
