import React from "react";

import Button from "./common/button";

const ProdukRekomendasi = (props) => {
  const { items } = props;

  return (
    <section className="container rekomendasi" ref={props.refRekomendasi}>
      <h2 className="text-center mb-4">Recommended Products</h2>
      <div className="row justify-content-lg-between justify-content-center">
        {items.map((item) => (
          <div
            key={item.id}
            className="col-sm-11 col-md-6 col-lg-4 offset-lg-0 mb-4"
          >
            <div className="card shadow-sm text-center h-100">
              <img
                src={item.imageUrl}
                className="card-img-top"
                alt={item.name}
              />

              <div className="card-body">
                <h6>{item.name}</h6>
                <p className="mt-5 mb-3 text-center">{`Weight: ${item.weight}`}</p>
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

export default ProdukRekomendasi;
