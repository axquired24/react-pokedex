import { Component, useState, useEffect } from "react";
import style from "./TopNavigation.module.scss";

class TopNavigation extends Component {
  render(props) {
    const menuItems = ["Home", "Pokedex", "Games", "News"];
    const activeMenu = "Pokedex";
    const navigation = (
      <div className={style.wrapper}>
        <div className={style.box}>
          {menuItems.map((menu) => (
            <div
              key={menu}
              className={
                style.boxItem + " " + (activeMenu == menu ? style.active : null)
              }
            >
              {menu}
            </div>
          ))}
        </div>
      </div>
    );

    return navigation;
  }
}

export default TopNavigation;
