import Tarak from "assets/image/icons/Tarak.svg";
import Makina from "assets/image/icons/Makina.svg";
import Parfüm from "assets/image/icons/Parfüm.svg";
import Tarak2 from "assets/image/icons/Tarak2.svg";
import Ustara from "assets/image/icons/Ustara.svg";
import Sakal from "assets/image/icons/Sakal.svg";

import "./style.css";
import "assets/css/all.css";
import "assets/css/container.css";
import "assets/css/fonts.css";
import Button from "components/buttons";

const Browse = () => {
  const services = [
    {
      id: 1,
      title: "Adult haircut",
      desc: "Nulla egestas sapien integer mi fermentum tellus tristique consequatolm pulvinar sagittis",
      price: "$39 USD",
      img: Tarak,
    },
    {
      id: 2,
      title: "Beard Trim",
      desc: "Nulla egestas sapien integer mi fermentum tellus tristique consequatolm pulvinar sagittis",
      price: "$29 USD",
      img: Makina,
    },
    {
      id: 3,
      title: "Scalp Moisturizing",
      desc: "Nulla egestas sapien integer mi fermentum tellus tristique consequatolm pulvinar sagittis",
      price: "$10 USD",
      img: Parfüm,
    },
    {
      id: 4,
      title: "Kids Haircut",
      desc: "Nulla egestas sapien integer mi fermentum tellus tristique consequatolm pulvinar sagittis",
      price: "$19 USD",
      img: Tarak2,
    },
    {
      id: 5,
      title: "Neck Shave",
      desc: "Nulla egestas sapien integer mi fermentum tellus tristique consequatolm pulvinar sagittis",
      price: "$39 USD",
      img: Ustara,
    },
    {
      id: 6,
      title: "Beard Grooming",
      desc: "Nulla egestas sapien integer mi fermentum tellus tristique consequatolm pulvinar sagittis",
      price: "$49 USD",
      img: Sakal,
    },
  ];

  return (
    <div className="container2">
      <div className="browse">
        <div className="browse-td">
          <h3 className="browse-title">Browse our services</h3>
          <p className="browse-desc">
            Nulla egestas sapien integer mi fermentum tellus tristique consequat
            pulvinar sagittis adipiscing egestas purus et mi tempus semper id
            vel prci eu magna in senectus sit eget justo eget.
          </p>
        </div>

        <div className="browse-wrapper">
          {services.map((item, indx) => (
            <div className="browes-item">
              <img key={indx} src={item.img} alt="img" />
              <div className="browse-item__info">
                <h4 className="browse-item__title">{item.title}</h4>
                <p className="browse-item__desc">{item.desc}</p>
                <p className="browse-item__price">{item.price}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="browse-button">
          <Button title={"Book an Appointment"} className="browse-button" />
        </div>
      </div>
    </div>
  );
};

export default Browse;
