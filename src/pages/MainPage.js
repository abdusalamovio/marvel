import RandomChar from "../components/randomChar/RandomChar";
import CharList from "../components/charList/CharList";
import CharInfo from "../components/charInfo/CharInfo";

import decoration from "../assets/img/vision.png";

const MainPage = () => {
  return (
    <main>
      <RandomChar />
      <div className="char__content">
        <CharList />
        <CharInfo />
      </div>
      <img className="bg-decoration" src={decoration} alt="vision" />
    </main>
  );
};

export default MainPage;
