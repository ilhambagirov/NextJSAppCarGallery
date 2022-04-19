import Card from "../ui/Card";
import classes from "./CarDetail.module.css";
import { useRouter } from "next/router";
import Link from "next/link";
function CarDetail(props) {
  const router = useRouter();
  const showDetailHandler = () => {
    router.push("/cars");
  };
  return (
    <Card style={classes.detail}>
      <img className={classes.image} src={props.image} alt={props.brand} />
      <h1>{props.brand}</h1>
      <h4>{props.model}</h4>
      <p>{props.description}</p>
      <div className={classes.actions}>
        <button onClick={showDetailHandler}>Back</button>
        <Link href={`/cars/updateCar/${props.id}`}>Edit</Link>
      </div>
    </Card>
  );
}
export default CarDetail;
