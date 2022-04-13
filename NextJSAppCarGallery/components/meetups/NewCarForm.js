import { useRef } from "react";

import Card from "../ui/Card";
import classes from "./NewCarForm.module.css";

function NewCarForm(props) {
  const brandInputRef = useRef();
  const modelInputRef = useRef();
  const yearInputRef = useRef();
  const KMInputRef = useRef();
  const colorInputRef = useRef();
  const imageInputRef = useRef();
  const carTypeInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const enteredBrand = brandInputRef.current.value;
    const enteredModel = modelInputRef.current.value;
    const enteredYear = yearInputRef.current.value;
    const enteredKM = KMInputRef.current.value;
    const enteredColor = colorInputRef.current.value;
    const enteredImage = imageInputRef.current.value;
    const enteredCarType = carTypeInputRef.current.value;

    const newCar = {
      brand: enteredBrand,
      model: enteredModel,
      year: enteredYear,
      km: enteredKM,
      color: enteredColor,
      imageUrl: enteredImage,
      carTypeId: enteredCarType,
    };
    props.onAddMeetup(newCar);
  }

  return (
    <Card style={classes.cardAdd}>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="title">Brand</label>
          <input type="text" required id="title" ref={brandInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="model">Model</label>
          <input type="text" required id="model" ref={modelInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="year">Year</label>
          <input type="text" required id="year" ref={yearInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="km">KM</label>
          <input id="km" type="text" ref={KMInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="color">Color</label>
          <input required type="text" id="color" ref={colorInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="image">Image</label>
          <input type="text" required id="image" ref={imageInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="carType">CarTypeId</label>
          <input type="number" required id="carType" ref={carTypeInputRef} />
        </div>
        <div className={classes.actions}>
          <button>Add Meetup</button>
        </div>
      </form>
    </Card>
  );
}

export default NewCarForm;
