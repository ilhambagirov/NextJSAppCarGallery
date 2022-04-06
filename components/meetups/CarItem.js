import Card from "../ui/Card";
import classes from "./CarItem.module.css";
import { useRouter } from "next/router";

function MeetupItem(props) {
  const router = useRouter();
  const showDetailHandler = () => {
    router.push("/cars/" + props.id);
  };
  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={props.image} alt={props.brand} />
        </div>
        <div className={classes.content}>
          <h3>{props.brand}</h3>
          <h4>{props.model}</h4>
          <p>{props.year}</p>
        </div>
        <div className={classes.actions}>
          <button onClick={showDetailHandler}>Show Details</button>
        </div>
      </Card>
    </li>
  );
}

export default MeetupItem;
