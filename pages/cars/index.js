import CarList from "../../components/meetups/CarList";

const static_data = [
  {
    id: "c1",
    brand: "Mercedes",
    model: "W210",
    year: "2021",
    image:
      "https://www.mad4wheels.com/img/free-car-images/mobile/4963/mercedes-benz-s600-w221-usa-version-2009-272973.jpg",
    description: "Super Car",
  },
  {
    id: "c2",
    brand: "BMW",
    model: "W210",
    year: "2022",
    image:
      "https://hips.hearstapps.com/hmg-prod/images/2020-bmw-750i-xdrive-252-1566180109.jpg?crop=0.817xw:1.00xh;0.0929xw,0&resize=640:*",
    description: "Super Car",
  },
  {
    id: "c3",
    brand: "Ford",
    model: "Mustang Shelby",
    year: "20016",
    image:
      "https://www.motortrend.com/uploads/2021/11/2022-Ford-Mustang-Shelby-GT500-Heritage-Edition-14.jpg?fit=around%7C875:492.1875",
    description: "Super Car",
  },
  {
    id: "c4",
    brand: "Aston Martin",
    model: "W210",
    year: "2014",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSC77yFcmKUv0mwWwebtJ2BRY5QuiCO4WwsA&usqp=CAU",
    description: "Super Car",
  },
];

function Cars(props) {
  console.log(props.cars);
  return <CarList cars={props.cars} />;
}

export function getStaticProps() {
  return {
    props: {
      cars: static_data,
    },
    revalidate: 1,
  };
}
export default Cars;
