import React from "react";
import Button from "./common/button";

const Explore = () => {
  return (
    <div className="explore container px-4 text-center">
      <h3 className="text-green mb-4">
        We Pick the Best Quality Specialty Coffees
      </h3>
      <Button
        type="link"
        href="/katalog"
        className="btn btn-outline-primary px-4"
      >
        Explore Catalogue
      </Button>
    </div>
  );
};

export default Explore;
