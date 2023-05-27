import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import styles from "./NewsDetail.module.css";
import moment from "moment/moment";
import "moment/locale/ru";
import parse from "html-react-parser";
import SideBar from "../../ui/SideBar/SideBar";

const NewsDetail = () => {
  const { id } = useParams();
  const [news, setNews] = useState({});
  const fullText = { __html: news.fulltext };
  const datePub = moment(news.pubDate * 1000).format("DD MMMM YYYY");
  moment.locale("ru");
  useEffect(() => {
    if (!id) return;
    const fetchData = async () => {
      const response = await axios.get(`http://localhost:3200/news/${id}`);
      setNews(response.data);
    };

    fetchData();
  }, [id]);
  return (
    <div className={styles.newsDetail}>
      <div className={styles.wrapperContent}>
        <h1 className={styles.title}>Заголовок страницы</h1>
        <div className={styles.newsContent}>
          <span className={styles.date}>{datePub}</span>
          <h2>{news.title}</h2>
          <div>{parse(String(news.fulltext))}</div>
        </div>
      </div>
      <SideBar />
    </div>
  );
};

export default NewsDetail;
