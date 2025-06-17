import AppHeader from "../components/appHeader/AppHeader";
import Spinner from "../components/spinner/Spinner";

import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const MainPage = lazy(() => import("../pages/MainPage"));
const ComicsPage = lazy(() => import("../pages/ComicsPage"));
const SinglePage = lazy(() => import("../pages/SinglePage"));
const SingleComicLayout = lazy(() =>
  import("../pages/singleComicLayout/SingleComicLayout")
);
const SingleCharacterLayout = lazy(() =>
  import("../pages/singleCharacterLayout/SingleCharacterLayout")
);
const Page404 = lazy(() => import("../pages/404"));

const App = () => {
  return (
    <Router basename="/marvel">
      <div className="app">
        <AppHeader />
        <Suspense fallback={<Spinner />}>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/comics" element={<ComicsPage />} />
            <Route
              path="/comics/:id"
              element={
                <SinglePage Component={SingleComicLayout} dataType="comic" />
              }
            />
            <Route
              path="/characters/:id"
              element={
                <SinglePage
                  Component={SingleCharacterLayout}
                  dataType="character"
                />
              }
            />
            <Route path="*" element={<Page404 />} />
          </Routes>
        </Suspense>
      </div>
    </Router>
  );
};

export default App;
