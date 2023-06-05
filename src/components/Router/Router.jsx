import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import List from '../Pages/List/List';
import NewsDetail from '../Pages/NewsDetail/NewsDetail';
import Profile from '../Pages/Profile/Profile';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import styles from './Router.module.css';

const Router = () => {
  return (
    <BrowserRouter>
      <div className={styles.wrapper}>
        <Header />
        <div className={styles.main}>
          <Routes>
            <Route element={<List />} path="swingvy/" />
            <Route element={<NewsDetail />} path="/news/:id" />
            <Route element={<Profile />} path="/profile" />
            <Route path="*" element={<div>Страница не найдена</div>} />
          </Routes>
        </div>

        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default Router;
