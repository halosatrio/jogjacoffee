import React from "react";
import Button from "./common/button";
import { formatNumber } from "./../utils/numberFormat";

const ProdukTerbaru = ({ items }) => {
  return (
    <>
      <h2 className="text-left mb-4">Produk Pilihan</h2>
      <div className="row">
        {items.map((item) => (
          <div key={item._id} className="col-6 col-lg-3 card-group">
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
    </>
  );
};

export default ProdukTerbaru;
