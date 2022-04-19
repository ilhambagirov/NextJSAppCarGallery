import agent from "../../api/agent";
import NewCarForm from "../../components/meetups/NewCarForm";
import { useRouter } from "next/router";
function Create(props) {
  const router = useRouter();
  const createCarHandler = async (newCar) => {
    var response = await agent.Cars.create(newCar);
    console.log(response);
    router.replace("/cars");
  };
  return (
    <NewCarForm onAddMeetup={createCarHandler} carTypeData={props.carTypes} />
  );
}
export default Create;

export async function getStaticProps() {
  const res = await agent.CarTypes.getAll();
  console.log(res);
  return {
    props: {
      carTypes: res,
    },
  };
}
