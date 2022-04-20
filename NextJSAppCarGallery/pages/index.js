import { useDarkMode } from "../stores/store";
import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import { useRouter } from "next/router";
export default observer(function Index() {
  const { carStore } = useDarkMode();
  const { groupedCars, carRegistry } = carStore;
  const router = useRouter();
  useEffect(() => {
    router.push("/cars");
  });
  return (
    <ul>
      {groupedCars.map((car) => (
        <li>{car.value.brand}</li>
      ))}
    </ul>
  );
});
