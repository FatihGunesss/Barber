import "assets/css/all.css";
import "assets/css/container.css";
import "./style.css";

const Button = ({ style, title, className }) => {
  return (
    <div className="all-button">
      <button style={style} className={className + " button"}>
        {title}
      </button>
    </div>
  );
};

export default Button;
