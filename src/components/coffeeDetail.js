import React from "react";

import { formatNumber } from "./../utils/numberFormat";

const CoffeeDetail = ({ data }) => {
  console.log(data.extras);
  return (
    <>
      <h3 className="mb-4 text-gray-800">Detail Produk</h3>
      <table className="table">
        <tbody>
          <tr>
            <th>Kopi</th>
            <td>{data.name}</td>
          </tr>
          <tr>
            <th>Berat</th>
            <td>{data.weight}</td>
          </tr>
          {data.extras ? (
            <tr>
              <th>Deskripsi</th>
              <td>{data.extras}</td>
            </tr>
          ) : (
            <>
              <tr>
                <th>Origin</th>
                <td>{data.description.origin}</td>
              </tr>
              <tr>
                <th>Altitude</th>
                <td>{data.description.altitude}</td>
              </tr>
              <tr>
                <th>Varietasi</th>
                <td>{data.description.varietas}</td>
              </tr>
              <tr>
                <th>Process</th>
                <td>{data.description.process}</td>
              </tr>
              <tr>
                <th>Roasting</th>
                <td>{data.description.roasting}</td>
              </tr>
              <tr>
                <th>Tasting Notes</th>
                <td>{data.description.notes}</td>
              </tr>
            </>
          )}
          <tr>
            <th>Harga</th>
            <td>{formatNumber(data.price)}</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default CoffeeDetail;
