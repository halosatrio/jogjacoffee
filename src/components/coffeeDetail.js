import React from "react";

const CoffeeDetail = (props) => {
  const { data } = props;
  return (
    <div className="col-md-10" ref={props.refInfoProduk}>
      <h3 className="mb-4 text-gray-800">Product Information</h3>
      <table className="table table-borderless table-sm">
        <tbody>
          <tr>
            <td style={{ width: 130 }}>Coffee Name</td>
            <td style={{ fontWeight: 300 }}>{data.name}</td>
          </tr>
          <tr>
            <td style={{ width: 130 }}>Net Weight</td>
            <td style={{ fontWeight: 300 }}>{data.weight}</td>
          </tr>
          {data.extras ? (
            <tr>
              <td style={{ width: 130 }}>Description</td>
              <td style={{ fontWeight: 300 }}>{data.extras}</td>
            </tr>
          ) : (
            <>
              <tr>
                <td style={{ width: 130 }}>Origin</td>
                <td style={{ fontWeight: 300 }}>{data.description.origin}</td>
              </tr>
              <tr>
                <td style={{ width: 130 }}>Altitude</td>
                <td style={{ fontWeight: 300 }}>{data.description.altitude}</td>
              </tr>
              <tr>
                <td style={{ width: 130 }}>Variety</td>
                <td style={{ fontWeight: 300 }}>{data.description.varietas}</td>
              </tr>
              <tr>
                <td style={{ width: 130 }}>Process</td>
                <td style={{ fontWeight: 300 }}>{data.description.process}</td>
              </tr>
              <tr>
                <td style={{ width: 130 }}>Roasting</td>
                <td style={{ fontWeight: 300 }}>{data.description.roasting}</td>
              </tr>
              <tr>
                <td style={{ width: 130 }}>Tasting Notes</td>
                <td style={{ fontWeight: 300 }}>{data.description.notes}</td>
              </tr>
            </>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default CoffeeDetail;
