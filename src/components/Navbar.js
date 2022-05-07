import React, { Component } from "react";
import "../style/Navbar.css";
import Logo from "../assets/bird.svg";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
   render() {
      return (
         <div className="navBar">
            <div className="leftSide">
               <img src={Logo} />
            </div>
            <div className="rightSide">
               <Link to="/">Home</Link>
               <Link to="/menu">Menu</Link>
               <Link to="/about">About</Link>
               <Link to="/contact">Contact</Link>
            </div>
         </div>
      );
   }
}
