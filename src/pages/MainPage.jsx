import RandomChar from "../components/randomChar/RandomChar";
import CharList from "../components/charList/CharList";
import CharInfo from "../components/charInfo/CharInfo";

import decoration from "../assets/img/vision.png";

import React from "react";
import ErrorBoundary from "../components/errorBoundary/ErrorBoundary";

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
        <ErrorBoundary>
          <RandomChar />
        </ErrorBoundary>
        <div className="char__content">
          <ErrorBoundary>
            <CharList onCharSelected={this.onCharSelected} />
          </ErrorBoundary>
          <ErrorBoundary>
            <CharInfo charId={this.state.selectedChar} />
          </ErrorBoundary>
        </div>
        <img className="bg-decoration" src={decoration} alt="vision" />
      </main>
    );
  }
}

export default MainPage;
