import agent from "../../api/agent";
import CarList from "../../components/meetups/CarList";
import { useDarkMode } from "../../stores/store";
import { observer } from "mobx-react-lite";
import { useEffect } from "react";

export default observer(function Cars(props) {
  // const { carStore } = useDarkMode();
  // const { loadCars, groupedCars } = carStore;

  // useEffect(() => {
  //   loadCars(props.cars);
  // }, []);

  return <CarList cars={props.cars} />;
});

export async function getServerSideProps() {
  const res = await agent.Cars.getAll();
  console.log(res);
  return {
    props: {
      cars: res,
    },
  };
}
