import React from "react"
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import List from "./components/List/List";
import styles from './App.module.css'

function App() {
  return (
    <div className={styles.App}>
      <Header />
      <List />
      <Footer />
    </div>
  );
}

export default App;
