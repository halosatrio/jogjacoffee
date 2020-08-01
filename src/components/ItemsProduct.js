import React from "react";

const ItemsProduct = () => {
  return (
    <section className="brands bg-white shadow-sm p-3 mb-5">
      <div
        className="row mb-3 justify-content-center"
        style={{ width: "100%" }}
      >
        <h2 className="text-center">Kopi Pilihan Terbaik</h2>
      </div>
      <div className="row row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-5 mb-3">
        <div className="card text-center" style={{ width: "18rem" }}>
          <img src="..." class="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Special title treatment</h5>
            <p className="card-text">
              With supporting text below as a natural lead-in to additional
              content.
            </p>
            {/* <a href="#" className="btn btn-primary"> */}
            Go somewhere
            {/* </a> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ItemsProduct;
