import classes from "./MainNavigation.module.css";
import Link from "next/link";
import ReactSearchBox from "react-search-box";
import Search from "./Search";

function MainNavigation() {
  return (
    <header className={classes.header}>
      <Link href="/">
        <a className={classes.logo}>IB Gallery</a>
      </Link>
      <div className={classes.searchWrapper}>
        <Search />
      </div>
      <nav>
        <ul>
          <li>
            <Link href="/cars">Cars</Link>
          </li>
          <li>
            <Link href="/cars/create">Add Car</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
