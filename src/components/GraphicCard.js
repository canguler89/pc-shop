import React, { Component } from "react";
import data from "../data/data";

const cardList = data.cards;

class GraphicCard extends Component {
  render() {
    return (
      <div>
        <ul className="items-ul">
          {cardList.map(card => (
            <li className="cases1">
              <img src={card.img} alt="cpus" />
              {card.title}
              <br />
              <div className="price">
              {card.price}
              {card.currency}
              </div>
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
