import React, { Component } from "react";

class Ram extends Component {
  render() {
    return (
      <div>
        <img
          src={process.env.PUBLIC_URL + "/images/rams/corsair.jpg"}
          alt="ram1"
          width="200px"
          height="200px"
        />
        <img
          src={process.env.PUBLIC_URL + "/images/rams/OLOy.jpg"}
          alt="ram2"
          width="200px"
          height="200px"
        />
        <img
          src={process.env.PUBLIC_URL + "/images/rams/ripjaws.jpg"}
          alt="ram3"
          width="200px"
          height="200px"
        />
        <img
          src={process.env.PUBLIC_URL + "/images/rams/Trident.jpg"}
          alt="ram4"
          width="200px"
          height="200px"
        />
        <img
          src={process.env.PUBLIC_URL + "/images/rams/vulcanz.jpg"}
          alt="ram5"
          width="200px"
          height="200px"
        />
      </div>
    );
  }
}

export default Ram;
