import React from "react";

import Button from "./common/button";

const ProdukTerbaru = ({ items }) => {
  return (
    <section className="container">
      <h2 className="text-center mb-4">Latest Products</h2>
      <div className="row row-cols-2 row-cols-lg-4">
        {items.map((item) => (
          <div key={item.id} className="col mb-4 px-2">
            <div className="card shadow-sm text-center h-100">
              <img
                src={item.imageUrl}
                className="card-img-top"
                alt={item.name}
              />

              <div className="card-body">
                <h6>{item.name}</h6>
                <p className="mt-4 mb-0">{`Weight: ${item.weight}`}</p>
              </div>
              <div className="card-footer">
                <Button
                  className="btn btn-warning stretched-link"
                  type="link"
                  href={`/coffee/${item.id}`}
                  isBlock
                >
                  Details
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProdukTerbaru;
