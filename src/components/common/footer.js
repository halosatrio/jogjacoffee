import React from "react";

import Button from "./button";

const Footer = () => {
  return (
    <footer>
      <div className="container my-4">
        <div className="row">
          <div className="col-sm-4 mb-4 text-center text-sm-left">
            <h6 className="mt-2">Ngopi di Jogja</h6>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <Button type="link" href="/register">
                  Tentang Ngopi di Jogja
                </Button>
              </li>
              <li className="list-group-item">
                <Button type="link" href="/catalogue">
                  Partner
                </Button>
              </li>
              <li className="list-group-item">
                <Button type="link" href="/user-guide">
                  Blog Posts
                </Button>
              </li>
            </ul>
          </div>
          <div className="col-sm-4 mb-4 text-center text-sm-left">
            <h6 className="mt-2">Bantuan dan Panduan</h6>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <Button type="link" href="/">
                  Syarat dan Ketentuan
                </Button>
              </li>
              <li className="list-group-item">
                <Button type="link" href="/">
                  Kebijakan Privasi
                </Button>
              </li>
              <li className="list-group-item">
                <Button type="link" href="/">
                  Bantuan Pelayanan
                </Button>
              </li>
            </ul>
          </div>
          <div className="col-sm-4 text-center text-sm-left">
            <h6 className="mt-2">Ikuti Kami</h6>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <Button isExternal type="link" href="/">
                  Instagram
                </Button>
              </li>
              <li className="list-group-item">
                <Button isExternal type="link" href="/">
                  Twitter
                </Button>
              </li>
              <li className="list-group-item">
                <Button isExternal type="link" href="/">
                  Facebook
                </Button>
              </li>
            </ul>
          </div>
        </div>

        <div className="row justify-content-center mt-3">
          <div className="col text-center copyrights">
            @ 2020 | built with <span>love</span> by{" "}
            <Button isExternal type="link" href="https://halosatrio.now.sh">
              Satrio Bayu Aji
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
