import "./banner.scss";
import avengers from "../../assets/img/avengers.png";
import avengersLogo from "../../assets/img/avengers-logo.png";

const Banner = () => {
  return (
    <div className="banner">
      <img src={avengers} alt="avengers" />
      <div className="banner-text">
        New comics every week!
        <br />
        Stay tuned!
      </div>
      <img src={avengersLogo} alt="avengersLogo" />
    </div>
  );
};

export default Banner;
