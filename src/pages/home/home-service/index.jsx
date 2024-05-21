import Servicesİmg from "assets/image/service-img.png";

import "./style.css";
import "assets/css/all.css";
import "assets/css/container.css";
import "assets/css/fonts.css";

const Service = () => {
  return (
    <div className="container2">
      <div className="service-info">
        <div className="service-left">
          <div className="service-td">
            <h3 className="service-title">
              Your personal barber service at your home
            </h3>

            <p className="service-desc">
              Nulla egestas sapien integer mi fermentum tellus tristique
              consequat pulvinar sagittis adipiscing egestas purus et mi tempus
              semper id vel prci eu magna in senectus sit eget justo
            </p>
          </div>

          <div className="service">
            <div className="service-point">
              <div className="service-costumer">
                <h4 className="service-percent">99</h4>
                <span className="percent">%</span>
              </div>
              <p className="services-desc">Customer Satisfaction</p>
            </div>

            <div className="service-piont">
              <div className="service-costumer">
                <h4 className="service-year">10</h4>
                <span className="years">+</span>
              </div>
              <p className="services-desc">years of experience</p>
            </div>
          </div>
        </div>

        <div className="service-img">
          <img src={Servicesİmg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Service;
