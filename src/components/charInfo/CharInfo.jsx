import "./charInfo.scss";

import React from "react";
import MarvelService from "../../services/MarvelService";
import Spinner from "../spinner/Spinner";
import ErrorMessage from "../errorMessage/ErrorMessage";
import Skeleton from "../skeleton/Skeleton";
import View from "./View";

import PropTypes from "prop-types";

const CharInfo = ({ charId }) => {
  const [char, setChar] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(false);

  const marvelService = new MarvelService();

  React.useEffect(() => {
    updateChar();
    // eslint-disable-next-line
  }, [charId]);

  const updateChar = () => {
    if (!charId) return;

    onCharLoading();
    marvelService.getCharacter(charId).then(onCharLoaded).catch(onError);
  };

  const onCharLoading = () => {
    setLoading(true);
  };

  const onCharLoaded = (char) => {
    setChar(char);
    setLoading(false);
  };

  const onError = () => {
    setLoading(false);
    setError(true);
  };

  const spinner = loading ? <Spinner /> : null;
  const errorMessage = error ? <ErrorMessage /> : null;
  const skeleton = char || loading || error ? null : <Skeleton />;
  const content = !(loading || error || !char) ? <View char={char} /> : null;

  return (
    <div className="char__info">
      {spinner}
      {errorMessage}
      {skeleton}
      {content}
    </div>
  );
};

CharInfo.propTypes = {
  charId: PropTypes.number,
};

export default CharInfo;
