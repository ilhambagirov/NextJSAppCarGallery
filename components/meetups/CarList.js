import CarItem from './CarItem';
import classes from './CarList.module.css';

function CarList(props) {
  return (
    <ul className={classes.list}>
      {props.cars.map((car) => (
        <CarItem
          key={car.id}
          id={car.id}
          brand={car.brand}
          model={car.model}
          year={car.year}
          image = {car.image}
          description={car.description}
        />
      ))}
    </ul>
  );
}

export default CarList;
