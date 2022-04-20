import { useState } from "react";
import classes from "./MainNavigation.module.css";
import Link from "next/link";
import Search from "./Search";
import { FiSearch } from "react-icons/fi";
import { BiMenu } from "react-icons/bi";
import Menu from "./Menu";
import SearchDropdown from "./SearchDropdown";
function MainNavigation() {
  const [menuMode, setMenuMode] = useState(false);
  const [searchMode, setSearchMode] = useState(false);
  const changeMenuModeHandler = () => {
    setMenuMode(!menuMode);
  };
  const changeSearchModeHandler = () => {
    setSearchMode(!searchMode);
  };
  return (
    <>
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
          <div className="d-flex align-items-center">
            <FiSearch
              onClick={changeSearchModeHandler}
              className={`${classes.searchIcon} me-2`}
            />
            <BiMenu
              onClick={changeMenuModeHandler}
              className={classes.burgerMenu}
            />
          </div>
        </nav>
      </header>
      <SearchDropdown setSearchMode={setSearchMode} searchMode={searchMode} />
      <Menu menuMode={menuMode} />
    </>
  );
}

export default MainNavigation;
