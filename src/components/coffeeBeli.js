import React from "react";

import Button from "./common/button";

import { formatNumber } from "./../utils/numberFormat";

const CoffeeBeli = (props) => {
  function showInfoProduk() {
    window.scrollTo({
      top: props.refInfoProduk.current.offsetTop - 90,
      behavior: "smooth",
    });
  }

  const { data } = props;

  return (
    <div className="card p-4 mb-5">
      <div className="card-body">
        <h4 class="card-title mb-3">{data.name}</h4>
        <h6 class="card-subtitle text-muted">Berat bersih: {data.weight}</h6>
        <Button
          type="button"
          onClick={showInfoProduk}
          className="btn btn-sm btn-outline-info mt-2 mb-4"
        >
          Informasi Produk
        </Button>
        <p>Harga: {formatNumber(data.price)}</p>
        <p>Jumlah</p>
        <h5 className="mb-4">Total: {formatNumber(data.price)}</h5>
        <Button type="button" className="btn" isPrimary isBlock>
          Tambahkan ke Keranjang
        </Button>
      </div>
    </div>
  );
};

export default CoffeeBeli;
