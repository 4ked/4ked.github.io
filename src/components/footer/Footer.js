import React, { Component } from "react";
import "./Footer.css";

import Social from "../social/Social";

class Footer extends Component {
  render() {
    return (
      <footer className="row footer">
        <p className={"col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xl-6"}>
          Max Goeke
        </p>
        <Social />
      </footer>
    );
  }
}

export default Footer;
