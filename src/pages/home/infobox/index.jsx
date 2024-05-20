import Address from "assets/image/icons/address.svg";
import Phone from "assets/image/icons/phone.svg";
import Hours from "assets/image/icons/hours.svg";
import "./style.css";
import "assets/css/all.css";
import "assets/css/container.css";
import "assets/css/fonts.css";

const InfoBox = () => {
  return (
    <div className="container2">
      <div className="info-box">
        <div className="box">
          <div className="info-card">
            <img className="info-box__img" src={Address} alt="Address" />
            <h3 className="info-box__title">Address</h3>
            <span className="line"></span>
            <p className="info-desc">3696 Lynden Road, Lefroy Ontario canada</p>
          </div>

          <div className="info-card">
            <img className="info-box__img" src={Phone} alt="Address" />
            <h3 className="info-box__title">Phone</h3>
            <span className="line"></span>
            <p className="info-desc">+62(123)-456-7890 +62(123)-456-7890</p>
          </div>

          <div className="info-card">
            <img className="info-box__img" src={Hours} alt="Address" />
            <h3 className="info-box__title">Hours</h3>
            <span className="line"></span>
            <p className="info-desc">Mon – Sat: 9AM – 8PM Sun: 9AM – 6PM</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoBox;
