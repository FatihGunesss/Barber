import "assets/css/all.css";
import "assets/css/container.css";
import "./style.css";

const Button = ({ style, title, className }) => {
  return (
    <button style={style} className={className + " button"}>
      {title}
    </button>
  );
};

export default Button;
