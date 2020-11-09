import React from "react";
import { connect } from "react-redux";
import { addToCart } from "../actions/actionCreator"


function Cases(props){

    return (
      <div>
        <h1> Our Computer Case List </h1>

        {props.items.cases.map(item=>(
          <div key={item.id} className="cases1">
            <ul className="items-ul">
              <li>
                <img src={item.img} alt="sad"></img>
              </li>
            </ul>
            <div className="price">
              {item.company}
              <br/>
              {item.price}
              {item.currency}
            </div>
            <button className={"btn btn-primary"}>AddToCart</button>
          </div>
        ))}
      </div>
    );
  
}

function mapStateToProps(state){
  return{
    items: state.items,
    cart: state.cart
  }
}

export default connect(mapStateToProps, {addToCart})(Cases);
