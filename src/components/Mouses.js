import React, { Component } from "react";

class Mouses extends Component {
  render() {
    return (
      <div>
        <img
          src={process.env.PUBLIC_URL + "/images/mouse/cooler master.jpg"}
          alt="mice1"
          width="200px"
          height="200px"
        />
        <img
          src={process.env.PUBLIC_URL + "/images/mouse/corsair.jpg"}
          alt="mice2"
          width="200px"
          height="200px"
        />
        <img
          src={process.env.PUBLIC_URL + "/images/mouse/g903.jpg"}
          alt="mice3"
          width="200px"
          height="200px"
        />
        <img
          src={process.env.PUBLIC_URL + "/images/mouse/mamba wireless.jpg"}
          alt="mice4"
          width="200px"
          height="200px"
        />
        <img
          src={process.env.PUBLIC_URL + "/images/mouse/viper.jpg"}
          alt="mice5"
          width="200px"
          height="200px"
        />
      </div>
    );
  }
}

export default Mouses;
