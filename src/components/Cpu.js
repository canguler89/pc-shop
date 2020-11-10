import React from "react";
import { connect } from "react-redux";
import { addToCart } from "../actions/actionCreator"


function Cpu(props){

    return (
      <div>
        <h1> Our CPU List </h1>

        {props.items.cpus.map(item=>(
          <div key={item.id} className="cases1">
            <ul className="items-ul">
              <li>
                <img src={item.img} alt="sad"></img>
              </li>
            </ul>
            <div className="price">
              {item.title}
              <br/>
              Price: &#36; {item.price}
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

export default connect(mapStateToProps, {addToCart})(Cpu);
