import Chooseİmg from "assets/image/icons/choose-icon.svg"
import Master from "assets/image/icons/master-icon.svg"
import Trusted from "assets/image/icons/trusted-icon.svg"



import "./style.css";
import "assets/css/all.css";
import "assets/css/container.css";
import "assets/css/fonts.css";

const Choose = () => {
  return (
    <div className="choose">
      <div className="choose-wrapper ">
        <div className="choose-td">
          <h3 className="choose-title">why choose us</h3>
          <p className="choose-desc">
            Nulla egestas sapien integer mi fermentum tellus tristique consequat
            pulvinar sagittis adipiscing egestas purus et mi tempus semper id
            vel prci eu magna in senectus sit eget justo eget.
          </p>
        </div>

        <div className="choose-cards">
          <div className="choose-card">
            <img className="choose-image" src={Chooseİmg} alt="Chooseeİmg" />
            <h3 className="choose-card__title">Licensed</h3>
            <span className="choose-line"></span>
            <p className="choose-card__desc">
              Our team of licensed and insured barbers follow strict cleanliness
              and sanitation guidelines for a safe and comfortable experience.{" "}
            </p>
          </div>

          <div className="choose-card">
            <img className="choose-image" src={Master} alt="Masterİmg" />
            <h3 className="choose-card__title">Licensed</h3>
            <span className="choose-line"></span>
            <p className="choose-card__desc">
              Our team of licensed and insured barbers follow strict cleanliness
              and sanitation guidelines for a safe and comfortable experience.{" "}
            </p>
          </div>

          <div className="choose-card">
            <img className="choose-image" src={Trusted} alt="Trusedİmg" />
            <h3 className="choose-card__title">Licensed</h3>
            <span className="choose-line"></span>
            <p className="choose-card__desc">
              Our team of licensed and insured barbers follow strict cleanliness
              and sanitation guidelines for a safe and comfortable experience.{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Choose;
