import React from "react";

import Button from "./common/button";

import { formatNumber } from "./../utils/numberFormat";

const ItemsProduct = ({ items }) => {
  return (
    <section className="container my-5">
      <div className="row row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-5 mb-3">
        {items.map((item) => (
          <div key={item._id} className="col mb-4">
            <div className="card text-center h-100">
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
                <p>{formatNumber(item.price)}</p>
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

export default ItemsProduct;
