import "assets/css/all.css";
import "assets/css/container.css";
import "./style.css";
import Barbershop from "assets/image/logo-barbershop.png";

const Header = () => {
  return (
    <div className="header-wrapper">
      <div className="container">
        <div className="header">
          <div header-logo>
            <a href="#">
              <img
                className="header-logo__img"
                src={Barbershop}
                alt="Barbershop-Img"
              />
            </a>
          </div>

          <div className="header-info__menu">
            <ul className="header-menus">
              <li className="header-menu">
                <a className="header-menu__title active" href="#">
                  Home
                </a>
              </li>
              <li className="header-menu">
                <a className="header-menu__title" href="#">
                  About
                </a>
              </li>
              <li className="header-menu">
                <a className="header-menu__title" href="#">
                  Works
                </a>
              </li>
              <li className="header-menu">
                <a className="header-menu__title" href="#">
                  Call Me
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
