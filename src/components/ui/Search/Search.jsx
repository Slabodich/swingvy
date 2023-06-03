import React from 'react';
import styles from './Search.module.css'
import {ReactComponent as DmSearch} from "../../../accets/images/dmSearch.svg";

const Search = () => {
    return (
        <form action="https://google.com/" target="_blank" className={styles.searchForm}>
            <button className={styles.button}> <DmSearch/> </button>
            <input type="text" placeholder="Поиск" className={styles.input}/>
        </form>
    );
};

export default Search;