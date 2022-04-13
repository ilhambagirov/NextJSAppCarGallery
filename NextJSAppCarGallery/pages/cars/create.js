import agent from "../../api/agent";
import NewCarForm from "../../components/meetups/NewCarForm";
import { useRouter } from "next/router";
import { CarFormValues } from "../../models/car";
function Create() {
  const router = useRouter();
  const createCarHandler = async (newCar) => {
    let car = new CarFormValues(newCar);
    console.log(car);
    var response = await agent.Cars.create(car);
    console.log(response);
    router.replace("/cars");
  };
  return <NewCarForm onAddMeetup={createCarHandler} />;
}
export default Create;
