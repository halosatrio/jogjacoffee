import React from "react";

import Button from "./button";

import { InstagramIcon, TwitterIcon, FacebookIcon } from "../../assets/icons";

const Footer = () => {
  return (
    <footer className="bg-primary">
      <div className="container mt-4">
        <div className="row">
          <div className="col-sm-4 col-md-4 mb-4 text-center text-sm-left">
            <h2 className="text-logo mt-2 text-secondary">
              Jogja
              <br />
              Coffee
              <br />
              Festival
            </h2>
          </div>
          <div className="col-sm-4 col-md-3 mb-4 text-center text-sm-left">
            <h6 className="mt-2 head-item">Jogja Coffee Festival</h6>
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
          <div className="col-sm-4 col-md-3 text-center text-sm-left">
            <h6 className="mt-2 head-item">Customer Care</h6>
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
          <div className="col-md-2 text-center text-sm-left d-none d-md-block">
            <h6 className="mt-2 head-item">Follow Us!</h6>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <Button isExternal type="link" href="https://instagram.com">
                  Instagram
                </Button>
              </li>
              <li className="list-group-item">
                <Button isExternal type="link" href="https://twitter.com">
                  Twitter
                </Button>
              </li>
              <li className="list-group-item">
                <Button isExternal type="link" href="https://facebook.com">
                  Facebook
                </Button>
              </li>
            </ul>
          </div>
        </div>

        <div className="row justify-content-center mt-4 d-block d-md-none">
          <div className="col text-center">
            <h6 className="head-item mb-3">Follow Us!</h6>
          </div>
          <div className="col text-center">
            <Button
              isExternal
              type="link"
              href="https://instagram.com"
              className="mr-5"
            >
              <InstagramIcon width={"30px"} />
            </Button>
            <Button
              isExternal
              type="link"
              href="https://twitter.com"
              className="mr-5"
            >
              <TwitterIcon width={"30px"} />
            </Button>
            <Button isExternal type="link" href="https://facebook.com">
              <FacebookIcon width={"30px"} />
            </Button>
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
