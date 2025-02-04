import Header from "../components/header/Header";

import MainPage from "../pages/MainPage";
import ComicsPage from "../pages/ComicsPage";
import SinglePage from "../pages/SinglePage";

import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/comics" element={<ComicsPage />} />
        <Route path="/comics/:id" element={<SinglePage />} />
      </Routes>
    </div>
  );
};

export default App;
