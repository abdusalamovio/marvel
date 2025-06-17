import AppBanner from "../components/appBanner/AppBanner";

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import useMarvelService from "../services/MarvelService";
import setContent from "../utils/setContent";

const SinglePage = ({ Component, dataType }) => {
  const [data, setData] = useState(null);
  const { id } = useParams();

  const { clearError, getComic, getCharacter, process, setProcess } =
    useMarvelService();

  useEffect(() => {
    updateData();
    // eslint-disable-next-line
  }, [id]);

  const updateData = () => {
    clearError();

    switch (dataType) {
      case "comic":
        getComic(id)
          .then(onDataLoaded)
          .then(() => setProcess("confirmed"));
        break;
      case "character":
        getCharacter(id)
          .then(onDataLoaded)
          .then(() => setProcess("confirmed"));
        break;
      default:
        console.error(dataType);
    }
  };

  const onDataLoaded = (data) => {
    setData(data);
  };

  return (
    <>
      <AppBanner />
      {setContent(process, Component, data)}
    </>
  );
};

export default SinglePage;
