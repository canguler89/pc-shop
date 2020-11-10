import React from 'react'
import { connect } from "react-redux";


function Cart(props) {
  return (
    <div>
      <h3>Shopping Cart items</h3>
      {props.cart.map(item=>(
          <div key={item.id} className="cases1">
            <ul className="items-ul">
              <li>
                <img src={item.img} alt="sad"></img>
              </li>
            </ul>
            <div className="price">
              {item.company}
              <br/>
              Price: &#36; {item.price}
            </div>
            <button className={"btn btn-danger"}>Remove</button>
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

export default connect(mapStateToProps, null)(Cart)
