import React from "react";

const BannerPartner = ({ items }) => {
  return (
    <section className="brands bg-white shadow-sm p-3">
      <div className="container text-center">
        <div
          className="row mb-3 justify-content-center"
          style={{ width: "100%" }}
        >
          <h2 className="text-center">Our Coffee Partners</h2>
        </div>
        <div className="row row-cols-2 row-cols-md-4">
          {items.map((item) => (
            <div key={item.id} className="col mb-3">
              <img
                src={item.imageUrl}
                alt={item.name}
                style={{ maxWidth: 120 }}
                className="mb-3"
              />
              <h5 className="text-center mb-4">{item.name}</h5>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BannerPartner;
