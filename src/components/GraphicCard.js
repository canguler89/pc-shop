import React, { Component } from "react";
import data from "../data/data";

const cardList = data.cards;

class GraphicCard extends Component {
  render() {
    return (
      <div>
        <ul className="items-ul">
          {cardList.map(card => (
            <li className="col-sm-3">
              <img src={card.img} alt="cpus" />
              {card.title}
              <br />
              {card.price}
              {card.currency}
              <button className={"btn btn-primary"} onClick={this.handleClick}>
                AddToCart
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default GraphicCard;
