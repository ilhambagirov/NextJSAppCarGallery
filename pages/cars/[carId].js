import CarDetail from "../../components/meetups/CarDetail";
function CarDetailPage(props) {
  return (
    <CarDetail
      image={props.carData.image}
      brand={props.carData.brand}
      model={props.carData.model}
      description={props.carData.description}
    />
  );
}
export function getStaticPaths() {
  return {
    fallback: false,
    paths: [
      {
        params: {
          carId: "c1",
        },
      },
      {
        params: {
          carId: "c2",
        },
      },
    ],
  };
}
export function getStaticProps(context) {
  const carId = context.params.carId;
  return {
    props: {
      carData: {
        id: carId,
        image:
          "https://www.mad4wheels.com/img/free-car-images/mobile/4963/mercedes-benz-s600-w221-usa-version-2009-272973.jpg",
        brand: "BMW",
        model: "740LI",
        description: "Super Car",
      },
    },
  };
}
export default CarDetailPage;
