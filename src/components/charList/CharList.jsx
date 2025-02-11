import "./charList.scss";

import React from "react";
import MarvelService from "../../services/MarvelService";
import Spinner from "../spinner/Spinner";
import ErrorMessage from "../errorMessage/ErrorMessage";

import PropTypes from "prop-types";

const CharList = (props) => {
  const [charList, setCharList] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);
  const [newItemLoading, setNewItemLoading] = React.useState(false);
  const [offset, setOffset] = React.useState(210);
  const [charEnded, setCharEnded] = React.useState(false);

  const marvelService = new MarvelService();

  React.useEffect(() => {
    onRequest();
    // eslint-disable-next-line
  }, []);

  const onRequest = (offset) => {
    onCharListLoading();
    marvelService
      .getAllCharacters(offset)
      .then(onCharListLoaded)
      .catch(onError);
  };

  const onCharListLoading = () => {
    setNewItemLoading(true);
  };

  const onCharListLoaded = (newCharList) => {
    setCharList((prevCharList) => {
      const uniqueChars = newCharList.filter(
        (newChar) => !prevCharList.some((char) => char.id === newChar.id)
      );
      return [...prevCharList, ...uniqueChars];
    });
    setLoading(false);
    setNewItemLoading(false);
    setOffset((prevOffset) => prevOffset + 9);
    setCharEnded(newCharList.length < 9);
  };

  const onError = () => {
    setError(true);
    setLoading(false);
  };

  const itemRefs = React.useRef([]);

  const focusOnItem = (id) => {
    itemRefs.current.forEach((item) =>
      item.classList.remove("char__item_selected")
    );
    itemRefs.current[id].classList.add("char__item_selected");
    itemRefs.current[id].focus();
  };

  function renderItems(arr) {
    const items = arr.map((item, index) => {
      let imgStyle = { objectFit: "cover" };
      if (
        item.thumbnail ===
        "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"
      ) {
        imgStyle = { objectFit: "unset" };
      }

      return (
        <li
          className="char__item"
          tabIndex={0}
          ref={(elem) => (itemRefs.current[index] = elem)}
          key={item.id}
          onClick={() => {
            props.onCharSelected(item.id);
            focusOnItem(index);
          }}
          onKeyPress={(e) => {
            if (e.key === " " || e.key === "Enter") {
              props.onCharSelected(item.id);
              focusOnItem(index);
            }
          }}
        >
          <img style={imgStyle} src={item.thumbnail} alt={item.name} />
          <div className="char__name">{item.name}</div>
        </li>
      );
    });

    return <ul className="char__grid">{items}</ul>;
  }

  const items = renderItems(charList);

  const spinner = loading ? <Spinner /> : null;
  const errorMessage = error ? <ErrorMessage /> : null;
  const content = !(loading || error) ? items : null;

  return (
    <div className="char__list">
      {spinner}
      {errorMessage}
      {content}
      <button
        onClick={() => onRequest(offset)}
        className="button button__main button__long"
        style={{ display: charEnded ? "none" : "block" }}
        disabled={newItemLoading}
      >
        <div className="inner">load more</div>
      </button>
    </div>
  );
};

CharList.propTypes = {
  onCharSelected: PropTypes.func.isRequired,
};

export default CharList;
