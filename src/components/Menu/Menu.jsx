import "./Menu.css";
import { useState } from "react";
import RequestInviteBtn from "../btnRequestInvite/btn";

export default function Menu() {
  const [menuClose, setMenuClose] = useState(true);

  function menuInteraction(element) {
    element.classList.toggle("menu-opened");
    setMenuClose((prevState) => !prevState);
  }

  return (
    <div className="menu-component-container">
      <nav className="menu-container">
        <ul className="menu">
          <li className="menu-item logo-container">
            <img src="./assets/images/logo.svg" />
            <img
              className="close-menu"
              src={
                menuClose
                  ? "./assets/images/icon-hamburger.svg"
                  : "./assets/images/icon-close.svg"
              }
              onClick={() =>
                menuInteraction(document.querySelector(".sub-menu-container"))
              }
            />
          </li>
          <li className="menu-item sub-menu-container">
            <ul className="sub-menu">
              <li className="sub-menu-item">
                <a href="#">Home</a>
              </li>
              <li className="sub-menu-item">
                <a href="#">About</a>
              </li>
              <li className="sub-menu-item">
                <a href="#">Contact</a>
              </li>
              <li className="sub-menu-item">
                <a href="#">Blog</a>
              </li>
              <li className="sub-menu-item">
                <a href="#">Careers</a>
              </li>
            </ul>
          </li>
          <li className="menu-item">
            <RequestInviteBtn />
          </li>
        </ul>
      </nav>
    </div>
  );
}
