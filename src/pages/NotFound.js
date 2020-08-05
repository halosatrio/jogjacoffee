import React from "react";
import Button from "./../components/common/button";

const NotFound = () => {
  return (
    <div className="text-center" style={{ marginTop: 100 }}>
      <h1>404 - OOPS</h1>
      <h4>Hmmm. Tidak Ada Apa-apa</h4>
      <p>Sepertinya yang Anda cari tidak ada di sini</p>
      <Button type="link" href="/" className="btn btn-secondary mt-3" hasShadow>
        Kembali ke Homepage
      </Button>
    </div>
  );
};

export default NotFound;
