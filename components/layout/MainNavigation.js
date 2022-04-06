import classes from "./MainNavigation.module.css";
import Link from "next/link";

function MainNavigation() {
  return (
    <header className={classes.header}>
      <Link href="/">
        <a className={classes.logo}>IB Gallery</a>
      </Link>
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
