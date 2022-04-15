import agent from "../../api/agent";
import NewCarForm from "../../components/meetups/NewCarForm";
import { useRouter } from "next/router";
function Create() {
  const router = useRouter();
  const createCarHandler = async (newCar) => {
    var response = await agent.Cars.create(newCar);
    console.log(response);
    router.replace("/cars");
  };
  return <NewCarForm onAddMeetup={createCarHandler} />;
}
export default Create;
