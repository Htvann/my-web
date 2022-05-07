import React, { Component } from "react";
import { Link } from "react-router-dom";
import '../style/Home.css'
import BannerImage from "../assets/bird-3860034.jpg"

export default class Home extends Component {
   render() {
      return (
         <div className="home">
            <div className="headerContainer" style={{backgroundImage: `url(${BannerImage})`}}>
               <h1>Here we go</h1>
               <p>Bird</p>
               <Link to="/menu">
                 <button>Order now</button>
               </Link>
            </div>
         </div>
      );
   }
}
