import React from "react";
import { connect } from "react-redux";
import { addToCart } from "../actions/actionCreator"


function HardDrives(props){

    return (
      <div>
        <h1> Our Hard Drive List </h1>

        {props.items.memory.map(item=>(
          <div key={item.id} className="cases1">
            <ul className="items-ul">
              <li>
                <img src={item.img} alt="sad" className="images1"></img>
              </li>
            </ul>
            <div className="price">
              {item.company}
              <br/>
              Price: &#36; {item.price}
            </div>
            <button className={"btn btn-primary"} onClick={()=> props.addToCart(item)}>AddToCart</button>
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

export default connect(mapStateToProps, {addToCart})(HardDrives);
