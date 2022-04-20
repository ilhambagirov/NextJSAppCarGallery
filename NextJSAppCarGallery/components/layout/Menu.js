import React from "react";
import styles from "./Menu.module.scss";
import Link from "next/link";

const Menu = (props) => {
  console.log(props.menuMode);
  return (
    <>
      <div
        className={`${styles["menu-wrapper"]} ${
          props.menuMode && styles["active"]
        }`}
      >
        <div className={styles["menu-content"]}>
          <ul>
            <li>
              <Link href="/cars">Cars</Link>
            </li>
            <li>
              <Link href="/cars/create">Add Car</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Menu;
