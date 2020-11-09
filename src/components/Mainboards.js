import React, { Component } from "react";

class Mainboards extends Component {
  render() {
    return (
      <div>
        <img
          src={process.env.PUBLIC_URL + "/images/main-boards/aqua.jpg"}
          alt="main1"
          width="200px"
          height="200px"
        />
        <img
          src={process.env.PUBLIC_URL + "/images/main-boards/asrock.jpg"}
          alt="main2"
          width="200px"
          height="200px"
        />
        <img
          src={process.env.PUBLIC_URL + "/images/main-boards/asus.jpg"}
          alt="main3"
          width="200px"
          height="200px"
        />
        <img
          src={process.env.PUBLIC_URL + "/images/main-boards/gigabyte.jpg"}
          alt="main4"
          width="200px"
          height="200px"
        />
        <img
          src={process.env.PUBLIC_URL + "/images/main-boards/msi.jpg"}
          alt="main5"
          width="200px"
          height="200px"
        />
      </div>
    );
  }
}

export default Mainboards;
