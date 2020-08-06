import React from "react";

import Button from "./common/button";

const produkPilihan = ({ items }) => {
  return (
    <>
      <h2 className="text-left mb-4">Produk Terbaru</h2>
      <div className="row">
        {items.map((item) => (
          <div key={item._id} className="col-6 col-md-4 col-lg-2 card-group">
            <div className="card text-center mb-4">
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
                  href={`/coffee/${item._id}`}
                  isBlock
                >
                  Detail Produk
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
