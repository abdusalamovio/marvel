import RandomChar from "../components/randomChar/RandomChar";
import CharList from "../components/charList/CharList";
import CharInfo from "../components/charInfo/CharInfo";

import decoration from "../assets/img/vision.png";

import React from "react";

class MainPage extends React.Component {
  state = {
    selectedChar: null,
  };

  onCharSelected = (id) => {
    this.setState({
      selectedChar: id,
    });
  };

  render() {
    return (
      <main>
        <RandomChar />
        <div className="char__content">
          <CharList onCharSelected={this.onCharSelected} />
          <CharInfo charId={this.state.selectedChar} />
        </div>
        <img className="bg-decoration" src={decoration} alt="vision" />
      </main>
    );
  }
}

export default MainPage;
