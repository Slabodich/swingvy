import React from "react"
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import ItemList from "./components/List/ItemList";
import styles from './App.module.css'

function App() {
  return (
    <div className={styles.App}>
      <Header />
      <ItemList />
      <Footer />
    </div>
  );
}

export default App;
