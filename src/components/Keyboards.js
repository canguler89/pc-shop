import React, { Component } from "react";

class Keyboards extends Component {
  render() {
    return (
      <div>
        <img
          src={process.env.PUBLIC_URL + "/images/keyboards/corsair k95.jpg"}
          alt="key1"
          width="200px"
          height="200px"
        />
        <img
          src={process.env.PUBLIC_URL + "/images/keyboards/logitech g915.jpg"}
          alt="key2"
          width="200px"
          height="200px"
        />
        <img
          src={
            process.env.PUBLIC_URL +
            "/images/keyboards/razer huntsman elite.jpg"
          }
          alt="key3"
          width="200px"
          height="200px"
        />
        <img
          src={process.env.PUBLIC_URL + "/images/keyboards/freestyle.jpg"}
          alt="key4"
          width="200px"
          height="200px"
        />
        <img
          src={process.env.PUBLIC_URL + "/images/keyboards/rosewill.jpg"}
          alt="key5"
          width="200px"
          height="200px"
        />
      </div>
    );
  }
}

export default Keyboards;
