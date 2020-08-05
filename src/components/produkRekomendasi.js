import React from "react";

import Button from "./common/button";

import { formatNumber } from "./../utils/numberFormat";

const ProdukRekomendasi = (props) => {
  const { items } = props;

  return (
    <section ref={props.refRekomendasi}>
      <h2 className="text-left  ml-sm-5 ml-md-4 ml-lg-0 mb-4">
        Produk Rekomendasi
      </h2>
      <div className="row justify-content-lg-between justify-content-center">
        {items.map((item) => (
          <div
            key={item._id}
            className="col-sm-11 col-md-6 col-lg-4 offset-lg-0 card-deck"
          >
            <div className="card text-center mb-4">
              <Button type="link" href={`/coffee/${item._id}`}>
                <img
                  src={item.imageUrl}
                  className="card-img-top"
                  alt={item.name}
                />
              </Button>
              <div className="card-body">
                <p className="card-text">{item.name}</p>
                <small class="text-muted align-bottom">{`Berat: ${item.weight}`}</small>
              </div>
              <div class="card-footer">
                <p className="font-weight-bolder">{formatNumber(item.price)}</p>
                <Button className="btn btn-info" type="button" isBlock>
                  + Beli
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
