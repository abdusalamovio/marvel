import "./comicsList.scss";

import React from "react";
import useMarvelService from "../../services/MarvelService";
import Spinner from "../spinner/Spinner";
import ErrorMessage from "../errorMessage/ErrorMessage";

const ComicsList = () => {
  const [comicsList, setComicsList] = React.useState([]);
  const [newItemLoading, setNewItemLoading] = React.useState(false);
  const [offset, setOffset] = React.useState(0);
  const [comicsEnded, setComicsEnded] = React.useState(false);

  const { loading, error, getAllComics } = useMarvelService();

  React.useEffect(() => {
    onRequest(offset, true);
    // eslint-disable-next-line
  }, []);

  const onRequest = (offset, initial) => {
    initial ? setNewItemLoading(false) : setNewItemLoading(true);
    getAllComics(offset).then(onComicsListLoaded);
  };

  const onComicsListLoaded = (newCharList) => {
    setComicsList((charList) => [...charList, ...newCharList]);
    setNewItemLoading(false);
    setOffset((offset) => offset + 8);
    setComicsEnded(newCharList.length < 8);
  };

  const renderItems = (arr) => {
    const items = arr.map((item, i) => {
      return (
        <li key={i} className="comics__item">
          <a href="#">
            <img
              className="comics__item-img"
              src={item.thumbnail}
              alt={item.title}
            />
            <div className="comics__item-name">{item.title}</div>
            <div className="comics__item-price">{item.price}</div>
          </a>
        </li>
      );
    });
    return <ul className="comics__grid">{items}</ul>;
  };

  const items = renderItems(comicsList);

  const errorMessage = error ? <ErrorMessage /> : null;
  const spinner = loading && !newItemLoading ? <Spinner /> : null;

  return (
    <div className="comics__list">
      {errorMessage}
      {spinner}
      {items}
      <button
        className="button button__main button__long"
        onClick={() => onRequest(offset)}
        style={{ display: comicsEnded ? "none" : "block" }}
        disabled={newItemLoading}
      >
        <div className="inner">load more</div>
      </button>
    </div>
  );
};

export default ComicsList;
