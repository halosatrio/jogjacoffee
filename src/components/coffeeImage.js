import React from "react";

const CoffeeImage = ({ data }) => {
  return (
    <figure>
      <img src={data.imageUrl} className="img-fluid" alt={data.Judul} />
      <figcaption className="figure-caption">Product Image</figcaption>
    </figure>
  );
};

export default CoffeeImage;
