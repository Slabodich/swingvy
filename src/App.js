import React from "react";
import styles from "./App.module.css";
import Router from "./components/Router/Router";

function App() {
  return (
    <div className={styles.App}>
      <div className={styles.main}>
        <Router />
      </div>
    </div>
  );
}

export default App;
