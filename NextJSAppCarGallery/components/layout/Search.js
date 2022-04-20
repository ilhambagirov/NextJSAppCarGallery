import { useEffect, useState } from "react";
import classes from "./MainNavigation.module.css";
import agent from "../../api/agent";
import Link from "next/link";

function Search() {
  const [word, setWord] = useState();
  const [searchedCars, setsearchedCars] = useState();
  const seacrhedCarLink = () => {
    setsearchedCars(null);
  };
  const searchHandler = (e) => {
    setWord(e.target.value);
    console.log(word?.length);
    if (word?.length === 1) {
      setsearchedCars(null);
    }
  };
  useEffect(() => {
    const handler = setTimeout(async () => {
      if (word?.length > 0) {
        const response = await agent.Cars.search(word);
        setsearchedCars(response);
      }
    }, 1000);
    return () => {
      clearTimeout(handler);
    };
  }, [word]);
  return (
    <>
      <input onChange={searchHandler} className={classes.search} type="text" />
      {searchedCars != null && (
        <div className={classes.searchedCarsWrapper}>
          <ul>
            {searchedCars?.map((car) => (
              <li onClick={seacrhedCarLink}>
                <Link
                  href={`/cars/${car.id}`}
                  className={classes.seacrhedCarLink}
                >
                  <a className={classes.seacrhedCarLink}>
                    <span>
                      <img className={classes.imageURl} src={car.imageUrl} />
                    </span>
                    <span className={classes.carname}>
                      {car.brand} {car.model}
                    </span>
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}

export default Search;
