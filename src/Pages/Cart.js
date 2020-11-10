import React from 'react'
import { connect } from "react-redux";
import { remove } from "../actions/actionCreator"


function Cart(props) {

  const totalPrice = props.cart.reduce((total,item) => (total += item.price), 0)

  return (
    <div>
      <div>
        <h3>Shopping Cart items</h3> <p>Total: &#36; {totalPrice.toFixed(1)}</p>
      </div>
      {props.cart.map(item=>(
          <div key={item.id} className="cases1">
            <ul className="items-ul">
              <li>
                <img src={item.img} alt="sad" className="images1"></img>
              </li>
            </ul>
            <div className="price">
              {item.company}
              <br/>
             <p>Price: &#36; {item.price}</p>
            </div>
            <button className={"btn btn-danger"} onClick={()=> props.remove(item)}>Remove</button>
          </div>
        ))}
    </div>
  )
}


function mapStateToProps(state){
  return{
    cart: state.cart
  }
}

export default connect(mapStateToProps, {remove})(Cart)
