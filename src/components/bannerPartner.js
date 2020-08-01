import React from "react";

const BannerPartner = (props) => {
  return (
    <section className="brands bg-white shadow-sm p-3 mb-5">
      <div className="container text-center">
        <div
          className="row mb-3 justify-content-center"
          style={{ width: "100%" }}
        >
          <h2 className="text-center">Our Coffee Partners</h2>
        </div>
        <div className="row row-cols-2 row-cols-md-4 mb-3">
          <div className="col">Column</div>
          <div className="col">Column</div>
          <div className="col">Column</div>
          <div className="col">Column</div>
          <div className="col">Column</div>
          <div className="col">Column</div>
          <div className="col">Column</div>
          <div className="col">Column</div>
        </div>
      </div>
    </section>
  );
};

export default BannerPartner;
