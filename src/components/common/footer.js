import React from "react";

import Button from "./button";

const Footer = () => {
  return (
    <footer className="bg-white">
      <div className="container my-4">
        <div className="row">
          <div className="col-sm-4 mb-4 text-center text-sm-left">
            <h6 className="mt-2">Follow Us!</h6>
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
          <div className="col-sm-4 mb-4 text-center text-sm-left">
            <h6 className="mt-2">Jogja Coffee Festival</h6>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <Button type="link" href="/register">
                  About the Festival
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
          <div className="col-sm-4 text-center text-sm-left">
            <h6 className="mt-2">Customer Services</h6>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <Button type="link" href="/">
                  Terms and Conditions
                </Button>
              </li>
              <li className="list-group-item">
                <Button type="link" href="/">
                  Privacy Policy
                </Button>
              </li>
              <li className="list-group-item">
                <Button type="link" href="/">
                  FAQ
                </Button>
              </li>
            </ul>
          </div>
        </div>

        <div className="row justify-content-center">
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
