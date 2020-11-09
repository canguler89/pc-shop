import React from 'react'
import { Link } from "react-router-dom";
import logo from "../home1.png"
import cart from "../cart.png"
import { ButtonContainer } from "./Button"

function Navbar() {
    return (
        <div className="container1">
            <nav className="nav-main">
              <ul className="nav-ul">
                <li className="nav-li">
                  <Link to="/">
                    <ButtonContainer>
                      <img src={logo} alt="home" width="40px" height="40px" />
                      Home
                    </ButtonContainer>
                  </Link>
                </li>
                <li className="nav-li">
                  <Link to="/cases">cases</Link>
                </li>
                <li className="nav-li">
                  <Link to="/cpu">Cpu</Link>
                </li>
                <li className="nav-li">
                  <Link to="/graphics">Graphic Cards</Link>
                </li>
                <li className="nav-li">
                  <Link to="/harddrives">Hard Drives</Link>
                </li>
                <li className="nav-li">
                  <Link to="/keyboards">Keyboards</Link>
                </li>
                <li className="nav-li">
                  <Link to="/mainboards">Mainboards</Link>
                </li>
                <li className="nav-li">
                  <Link to="/mouses">Mouses</Link>
                </li>
                <li className="nav-li">
                  <Link to="/ram">Ram</Link>
                </li>
                <li className="nav-li">
                  <Link to="/cart">
                    <ButtonContainer>
                      <img src={cart} alt="cart" width="40px" height="40px" />
                      Cart
                    </ButtonContainer>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
    )
}

export default Navbar
