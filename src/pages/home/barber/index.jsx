import "./style.css";
import "assets/css/all.css";
import "assets/css/container.css";
import "assets/css/fonts.css";
import Button from "components/buttons";

const Barber = () => {
  return (
      <div className="barber">
        <div className="barber-tb">
          <h3 className="barber-title">Experience the luxury of concierge barber services at your home</h3>
          <Button className={"barber-button"} title={"Book an Appointment"}/>
        </div>
      </div>
  )
}

export default Barber