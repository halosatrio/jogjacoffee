import React from "react";

import Button from "./common/button";

const Jumbotron = (props) => {
  function showRekomendasi() {
    window.scrollTo({
      top: props.refRekomendasi.current.offsetTop - 60,
      behavior: "smooth",
    });
  }

  return (
    <div className="jumbotron jumbotron-fluid">
      <div className="container">
        <h1 className="line-height-1">Jogja Coffee Festival</h1>
        <p className="my-5">
          Specialty coffee events that unite coffee communities in Yogyakarta
        </p>
        <Button
          type="button"
          onClick={showRekomendasi}
          className="btn btn-primary px-5 py-2"
          hasShadow
        >
          Start Your Coffee Journey!
        </Button>
      </div>
    </div>
  );
};

export default Jumbotron;
