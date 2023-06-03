import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import List from "../Pages/List/List";
import NewsDetail from "../Pages/NewsDetail/NewsDetail";
import Profile from "../Pages/Profile/Profile";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route element={<List />} path="/" />
        <Route element={<NewsDetail />} path="/news/:id" />
        <Route element={<Profile />} path="/profile" />
        <Route path="*" element={<div>Страница не найдена</div>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
