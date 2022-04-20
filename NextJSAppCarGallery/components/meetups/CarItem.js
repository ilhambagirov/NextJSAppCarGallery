import Card from "../ui/Card";
import classes from "./CarItem.module.css";
import { useRouter } from "next/router";
import agent from "../../api/agent";

function MeetupItem(props) {
  const router = useRouter();
  const showDetailHandler = () => {
    router.push("/cars/" + props.id);
  };

  const deleteHandler = async () => {
    await agent.Cars.delete(props.id);
    router.push("/cars");
  };
  return (
    <li className={`${classes.item} col-xl-3 col-lg-4 col-md-6 `}>
      <Card style={classes.Card}>
        <div className={classes.image}>
          <img src={props.image} alt={props.brand} />
        </div>
        <div className={classes.content}>
          <h3>{props.brand}</h3>
          <h4>{props.model}</h4>
          <p>{props.year}</p>
        </div>
        <div className={classes.actions}>
          <button className="me-2" onClick={showDetailHandler}>Show Details</button>
          <button onClick={deleteHandler}>Delete</button>
        </div>
      </Card>
    </li>
  );
}

export default MeetupItem;
