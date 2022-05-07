import React, { Component } from "react";
import { MenuList } from "../helpers/MenuList";
import MenuItem from "../components/MenuItem"
import "../style/Menu.css"
export default class Menu extends Component {
   render() {
      return (
         <div className="menu">
            <h1 className="menuTitle">Out menu</h1>
            <div className="menuList">
               {MenuList.map((menuItem, key) => {
                  return (
                      <MenuItem key={key} image={menuItem.image} name={menuItem.name} price={menuItem.price}/>
                  )
               })}
            </div>
         </div>
      );
   }
}
