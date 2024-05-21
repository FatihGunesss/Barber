import "assets/css/all.css";
import "assets/css/container.css";
import "./style.css";
import Barbershop from "assets/image/logo-barbershop.png";
import Burger from "assets/image/icons/burger.svg";
import Close from "assets/image/icons/close.svg"
import { useState } from "react";

const Header = () => {
  const [active, setActive] = useState(false);

  const handleActive = () => {
    setActive(!active);
  };
  return (
    <div className="header-wrapper">
      <div className="container">
        <div className="header">
          <div header-logo>
            <a href="/">
              <img
                className="header-logo__img"
                src={Barbershop}
                alt="Barbershop-Img"
              />
            </a>
          </div>
          <button onClick={handleActive} className="header-hamburger">
            {active === false ? (
              <img className="burger_icon" src={Burger} alt="Burger" />
            ) : (
              <img className="burger_icon" src={Close} alt="Close" />
            )}
          </button>

          <ul className={`header-menus ${active === true ? "actived" : ""}`}>
            <li className="header-menu">
              <a id="home" className="header-menu__title active" href="#home">
                Home
              </a>
            </li>
            <li className="header-menu">
              <a id="about" className="header-menu__title" href="#about">
                About
              </a>
            </li>
            <li className="header-menu">
              <a id="works" className="header-menu__title" href="#works">
                Works
              </a>
            </li>
            <li className="header-menu">
              <a id="call" className="header-menu__title" href="#call">
                Call Me
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
