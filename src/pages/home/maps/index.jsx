import Call from "assets/image/icons/call-icon.svg";
import Email from "assets/image/icons/email-icon.svg";

import "./style.css";
import "assets/css/all.css";
import "assets/css/container.css";
import "assets/css/fonts.css";

const Maps = () => {
  return (
    <div className="maps-wrapper">
      <div className="maps">
        <div className="maps-img"></div>
        <div className="maps-overlay"></div>
        <div className="maps-info__left">
          <div className="maps-td">
            <h3 className="maps-title">make an appointment</h3>
            <p className="maps-desc">
              Nulla egestas sapien integer mi fermentum tellus tristique
              consequat pulvinar sagittis adipiscing egestas purus et mi tempus
              semper id vel prci eu magna in senectus sit eget justo
            </p>
          </div>
          <div className="maps-give">
            <div className="maps-call">
              <img className="call-image" src={Call} alt="" />
              <div className="maps-tn">
                <h5 className="call-title">Give us a Call</h5>
                <p className="call-number">(475) 453 - 3465</p>
              </div>
            </div>

            <div className="maps-call">
              <img className="call-image" src={Email} alt="" />
              <div className="maps-tn">
                <h5 className="call-title">Send us an email</h5>
                <p className="call-number">hello@example.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="google-map">
        <iframe
          title="This is a unique title"
          className="map"
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d95920.00758676293!2d69.27901369755861!3d41.29798005566096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1str!2s!4v1716194795975!5m2!1str!2s"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default Maps;
