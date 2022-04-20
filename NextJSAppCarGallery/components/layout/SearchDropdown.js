import React from "react";
import styles from "./SearchDropdown.module.scss";
import Search from "./Search";
import { AiOutlineCloseCircle } from "react-icons/ai";

const SearchDropdown = (props) => {
  return (
    <>
      <div
        className={`${`${styles["searchDropdown-wrapper"]} d-flex justify-content-center`} ${
          props.searchMode && styles["active"]
        }`}
      >
        <AiOutlineCloseCircle
          onClick={() => props.setSearchMode(!props.searchMode)}
          className={styles.closeSearch}
        />
        <div className={styles["menu-content"]}>
          <Search />
        </div>
      </div>
    </>
  );
};

export default SearchDropdown;
