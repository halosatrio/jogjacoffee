import React from "react";

import Button from "./common/button";

const ProdukTerbaru = ({ items }) => {
  return (
    <>
      <h2 className="text-center mb-4">Latest Products</h2>
      <div className="row row-cols-2 row-cols-lg-4">
        {items.map((item) => (
          <div key={item.id} className="col mb-4">
            <div className="card shadow-sm text-center h-100">
              <img
                src={item.imageUrl}
                className="card-img-top"
                alt={item.name}
              />

              <div className="card-body">
                <p className="card-text">{item.name}</p>
                <small className="text-muted align-bottom">{`Berat: ${item.weight}`}</small>
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
    </>
  );
};

export default ProdukTerbaru;
