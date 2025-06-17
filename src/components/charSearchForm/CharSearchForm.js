import "./charSearchForm.scss";

import { useState } from "react";
import useMarvelService from "../../services/MarvelService";
import ErrorMessage from "../errorMessage/ErrorMessage";

import { Link } from "react-router-dom";

import { Formik, Form, Field, ErrorMessage as ErrMsg } from "formik";
import * as Yup from "yup";

const CharSearchForm = () => {
  const [char, setChar] = useState(null);
  const { loading, error, clearError, getCharacterByName } = useMarvelService();

  const updateChar = (name) => {
    clearError();
    getCharacterByName(name).then(onCharLoaded);
  };

  const onCharLoaded = (char) => {
    setChar(char);
  };

  const errorMessage = error ? (
    <div className="char__search-critical-error">
      <ErrorMessage />
    </div>
  ) : null;

  const results = !char ? null : char.length > 0 ? (
    <div className="char__search-wrapper">
      <div className="char__search-success">
        There is! Visit {char[0].name} page?
      </div>
      <Link
        to={`/characters/${char[0].id}`}
        className="button button__secondary"
      >
        <div className="inner">To page</div>
      </Link>
    </div>
  ) : (
    <div className="char__search-error">
      The character was not found. Check the name and try again
    </div>
  );

  return (
    <div className="char__search-form">
      <Formik
        initialValues={{
          charName: "",
        }}
        validationSchema={Yup.object({
          charName: Yup.string().required("This field is required"),
        })}
        onSubmit={({ charName }) => {
          updateChar(charName);
        }}
      >
        <Form>
          <label htmlFor="charName" className="char__search-label">
            Or find a character by name:
          </label>
          <div className="char__search-wrapper">
            <Field name="charName" placeholder="Enter name" type="text" />
            <button
              className="button button__main"
              disabled={loading}
              type="submit"
            >
              <div className="inner">find</div>
            </button>
          </div>
          <ErrMsg
            name="charName"
            className="char__search-error"
            component="div"
          />
        </Form>
      </Formik>
      {results}
      {errorMessage}
    </div>
  );
};

export default CharSearchForm;
