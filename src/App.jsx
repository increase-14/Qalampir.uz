import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import NewsPage from "./pages/NewsPage";
import SavedPage from "./pages/SavedPage";
import DetailPage from "./pages/DetailPage";

const App = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<NewsPage />} />
        <Route path="/saved" element={<SavedPage />} />
        <Route path="/detail/:id" element={<DetailPage />} />
      </Route>
    </Routes>
  );
};

export default App;
