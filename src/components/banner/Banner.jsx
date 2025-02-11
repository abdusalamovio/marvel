import "./banner.scss";
import avengers from "../../assets/img/avengers.png";
import avengersLogo from "../../assets/img/avengers-logo.png";

const Banner = () => {
  return (
    <div className="banner">
      <img src={avengers} alt="Avengers" />
      <div className="banner-text">
        New comics every week!
        <br />
        Stay tuned!
      </div>
      <img src={avengersLogo} alt="AvengersLogo" />
    </div>
  );
};

export default Banner;
