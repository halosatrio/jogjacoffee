import React from "react";

import Button from "./common/button";

const produkPilihan = ({ items }) => {
  return (
    <>
      <h2 className="text-left mb-4">Other Curated Products</h2>
      <div className="row row-cols-2 row-cols-md-3 row-cols-xl-6 mb-4">
        {items.map((item) => (
          <div key={item.id} className="col mb-4">
            <div className="card text-center h-100">
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
                  className="btn btn-info stretched-link"
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

export default produkPilihan;
