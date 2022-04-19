import agent from "../../../api/agent";
import NewCarForm from "../../../components/meetups/NewCarForm";
import { useRouter } from "next/router";
function CarUpdate(props) {
  const router = useRouter();
  const createCarHandler = async (newCar) => {
    console.log(newCar);
    console.log(router.query.updateCarId);
    var response = await agent.Cars.edit(router.query.updateCarId, newCar);
    router.replace("/cars");
  };
  return (
    <NewCarForm
      onAddMeetup={createCarHandler}
      carData={props.carData}
      carTypeData={props.carTypeData}
    />
  );
}

export async function getServerSideProps(context) {
  const carId = context.params.updateCarId;
  const response = await agent.Cars.get(carId);
  const responseCarType = await agent.CarTypes.getAll();
  console.log("salam");
  if (response === "") {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      carData: response,
      carTypeData: responseCarType,
    },
  };
}
export default CarUpdate;
