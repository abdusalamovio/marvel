import "./charList.scss";

import React from "react";
import useMarvelService from "../../services/MarvelService";
import Spinner from "../spinner/Spinner";
import ErrorMessage from "../errorMessage/ErrorMessage";

import PropTypes from "prop-types";

const CharList = (props) => {
  const [charList, setCharList] = React.useState([]);
  const [newItemLoading, setNewItemLoading] = React.useState(false);
  const [offset, setOffset] = React.useState(210);
  const [charEnded, setCharEnded] = React.useState(false);

  const { loading, error, getAllCharacters } = useMarvelService();

  React.useEffect(() => {
    onRequest(offset, true);
    // eslint-disable-next-line
  }, []);

  const onRequest = (offset, initial) => {
    initial ? setNewItemLoading(false) : setNewItemLoading(true);
    getAllCharacters(offset).then(onCharListLoaded);
  };

  const onCharListLoaded = (newCharList) => {
    setCharList((charList) => [...charList, ...newCharList]);
    setNewItemLoading(false);
    setOffset((offset) => offset + 9);
    setCharEnded(newCharList.length < 9);
  };

  const itemRefs = React.useRef([]);

  const focusOnItem = (id) => {
    itemRefs.current.forEach((item) =>
      item.classList.remove("char__item_selected")
    );
    itemRefs.current[id].classList.add("char__item_selected");
    itemRefs.current[id].focus();
  };

  const renderItems = (arr) => {
    const items = arr.map((item, index) => {
      const imgStyle = {
        objectFit:
          item.thumbnail ===
          "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"
            ? "unset"
            : "cover",
      };
      return (
        <li
          key={item.id}
          className="char__item"
          tabIndex={0}
          ref={(elem) => (itemRefs.current[index] = elem)}
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
  };

  const items = renderItems(charList);

  const errorMessage = error ? <ErrorMessage /> : null;
  const spinner = loading && !newItemLoading ? <Spinner /> : null;

  return (
    <div className="char__list">
      {errorMessage}
      {spinner}
      {items}
      <button
        className="button button__main button__long"
        onClick={() => onRequest(offset)}
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
