import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import List from "../List/List";
import NewsDetail from "../NewsDetail/NewsDetail";

const Router = () => {
    return (
       <BrowserRouter>
           <Routes>
               <Route element={<List />} path="/"/>
               <Route element={<NewsDetail />} path="/news/:id"/>
               <Route path="*" element={<div>Страница не найдена</div>} />
           </Routes>
       </BrowserRouter>
    );
};

export default Router;