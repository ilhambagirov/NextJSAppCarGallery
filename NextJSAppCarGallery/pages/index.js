import { useDarkMode } from "../stores/store";
import { observer } from "mobx-react-lite";
export default observer(function Index() {
  const { carStore } = useDarkMode();
  const { groupedCars, carRegistry } = carStore;
  return (
    <ul>
      {groupedCars.map((car) => (
        <li>{car.value.brand}</li>
      ))}
    </ul>
  );
});
