import CarDetail from "../../components/meetups/CarDetail";
import agent from "../../api/agent";
function CarDetailPage(props) {
  console.log(props);
  return (
    <CarDetail
      image={props.carData.imageUrl}
      brand={props.carData.brand}
      model={props.carData.model}
      description={props.carData.description}
      id = {props.carData.id}
    />
  );
}

export async function getServerSideProps(context) {
  const carId = context.params.carId;
  const response = await agent.Cars.get(carId);
  console.log(response);
  if (response === '') {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      carData: response,
    },
  };
}
export default CarDetailPage;
