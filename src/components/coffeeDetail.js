import React from "react";

const CoffeeDetail = (props) => {
  const { data } = props;
  return (
    <div className="col-md-10" ref={props.refInfoProduk}>
      <h3 className="mb-4 text-gray-800">Detail Produk</h3>
      <table className="table table-borderless table-sm">
        <tbody>
          <tr>
            <td>Kopi</td>
            <td>{data.name}</td>
          </tr>
          <tr>
            <td>Berat</td>
            <td>{data.weight}</td>
          </tr>
          {data.extras ? (
            <tr>
              <td>Deskripsi</td>
              <td>{data.extras}</td>
            </tr>
          ) : (
            <>
              <tr>
                <td>Origin</td>
                <td>{data.description.origin}</td>
              </tr>
              <tr>
                <td>Altitude</td>
                <td>{data.description.altitude}</td>
              </tr>
              <tr>
                <td>Varietasi</td>
                <td>{data.description.varietas}</td>
              </tr>
              <tr>
                <td>Process</td>
                <td>{data.description.process}</td>
              </tr>
              <tr>
                <td>Roasting</td>
                <td>{data.description.roasting}</td>
              </tr>
              <tr>
                <td>Tasting Notes</td>
                <td>{data.description.notes}</td>
              </tr>
            </>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default CoffeeDetail;
