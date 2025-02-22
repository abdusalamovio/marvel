import AppBanner from "../components/appBanner/AppBanner";
import Spinner from "../components/spinner/Spinner";
import ErrorMessage from "../components/errorMessage/ErrorMessage";

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import useMarvelService from "../services/MarvelService";

const SinglePage = ({ Component, dataType }) => {
  const [data, setData] = useState(null);
  const { id } = useParams();

  const { loading, error, clearError, getComic, getCharacter } =
    useMarvelService();

  useEffect(() => {
    updateData();
    // eslint-disable-next-line
  }, [id]);

  const updateData = () => {
    clearError();

    switch (dataType) {
      case "comic":
        getComic(id).then(onDataLoaded);
        break;
      case "character":
        getCharacter(id).then(onDataLoaded);
        break;
      default:
        console.error(dataType);
    }
  };

  const onDataLoaded = (data) => {
    setData(data);
  };

  const errorMessage = error ? <ErrorMessage /> : null;
  const spinner = loading ? <Spinner /> : null;
  const content = !(loading || error || !data) ? (
    <Component data={data} />
  ) : null;

  return (
    <>
      <AppBanner />
      {errorMessage}
      {spinner}
      {content}
    </>
  );
};

export default SinglePage;
