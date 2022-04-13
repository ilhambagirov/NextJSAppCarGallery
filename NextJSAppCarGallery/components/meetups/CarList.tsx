import { Car } from '../../models/car';
import CarItem from './CarItem';
import classes from './CarList.module.css';
interface Props {
  cars: Car[]
}
export default function CarList({ cars }: Props) {
  return (
    <ul className={classes.list}>
      {
        cars?.map((car) => (
          <CarItem
            key={car.id}
            id={car.id}
            brand={car.brand}
            model={car.model}
            image={car.imageUrl}
            year={car.year}
          />
        ))
      }
    </ul>
  );
}
