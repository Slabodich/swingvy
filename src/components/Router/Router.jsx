import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import List from "../Pages/List/List";
import NewsDetail from "../Pages/NewsDetail/NewsDetail";
import Profile from "../Pages/Profile/Profile";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<List />} path="/" />
        <Route element={<NewsDetail />} path="/news/:id" />
        <Route element={<Profile />} path="/profile" />
        <Route path="*" element={<div>Страница не найдена</div>} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
