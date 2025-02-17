import "./charInfo.scss";

import View from "./View";
import { useState, useEffect } from "react";
import useMarvelService from "../../services/MarvelService";
import Spinner from "../spinner/Spinner";
import ErrorMessage from "../errorMessage/ErrorMessage";
import Skeleton from "../skeleton/Skeleton";

import PropTypes from "prop-types";

const CharInfo = ({ charId }) => {
  const [char, setChar] = useState(null);

  const { loading, error, clearError, getCharacter } = useMarvelService();

  useEffect(() => {
    updateChar();
    // eslint-disable-next-line
  }, [charId]);

  const updateChar = () => {
    if (!charId) return;

    clearError();
    getCharacter(charId).then(onCharLoaded);
  };

  const onCharLoaded = (char) => {
    setChar(char);
  };

  const skeleton = char || loading || error ? null : <Skeleton />;
  const errorMessage = error ? <ErrorMessage /> : null;
  const spinner = loading ? <Spinner /> : null;
  const content = !(loading || error || !char) ? <View char={char} /> : null;

  return (
    <div className="char__info">
      {skeleton}
      {errorMessage}
      {spinner}
      {content}
    </div>
  );
};

CharInfo.propTypes = {
  charId: PropTypes.number,
};

export default CharInfo;
