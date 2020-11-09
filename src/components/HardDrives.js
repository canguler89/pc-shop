import React, { Component } from "react";

class HardDrives extends Component {
  render() {
    return (
      <div>
        <img
          src={process.env.PUBLIC_URL + "/images/hard-disk/samsung 1tb ssd.jpg"}
          alt="disk1"
          width="200px"
          height="200px"
        />
        <img
          src={process.env.PUBLIC_URL + "/images/hard-disk/samsung ssd 2tb.jpg"}
          alt="disk2"
          width="200px"
          height="200px"
        />
        <img
          src={process.env.PUBLIC_URL + "/images/hard-disk/wd black1tb.jpg"}
          alt="disk1"
          width="200px"
          height="200px"
        />
        <img
          src={process.env.PUBLIC_URL + "/images/hard-disk/seagate 1tb.jpg"}
          alt="disk1"
          width="200px"
          height="200px"
        />
        <img
          src={process.env.PUBLIC_URL + "/images/hard-disk/exos.jpg"}
          alt="disk1"
          width="200px"
          height="200px"
        />
      </div>
    );
  }
}

export default HardDrives;
