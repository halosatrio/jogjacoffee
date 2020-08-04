import React from "react";

import Button from "./common/button";

const Jumbotron = () => {
  return (
    <div className="jumbotron jumbotron-fluid">
      <div className="container">
        <h1 className="font-weight-bold line-height-1">
          Perpustakaan Kolektif dan <br /> Media Literasi.
        </h1>
        <p className="lead my-4">
          An easy-to-access library within the grasp of your hand, where
          everyone can borrow and lend their favorite books.
        </p>
        <Button type="button" className="btn px-5 button" hasShadow isPrimary>
          Pinjam Buku
        </Button>
      </div>
    </div>
  );
};

export default Jumbotron;
