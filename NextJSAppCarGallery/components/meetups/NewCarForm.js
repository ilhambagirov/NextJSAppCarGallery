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
    const enteredCarType = props.carTypeData.filter(
      (x) => x.type === carTypeInputRef.current.value
    )[0].id;

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
    <div className="container mt-2">
      <div className={`row justify-content-center ${classes.formRow} `}>
        <Card style={classes.cardAdd}>
          <form className={classes.form} onSubmit={submitHandler}>
            <div className={classes.control}>
              <label htmlFor="title">Brand</label>
              <input
                type="text"
                required
                id="title"
                defaultValue={props.carData ? props.carData.brand : ""}
                ref={brandInputRef}
              />
            </div>
            <div className={classes.control}>
              <label htmlFor="model">Model</label>
              <input
                type="text"
                required
                id="model"
                defaultValue={props.carData ? props.carData.model : ""}
                ref={modelInputRef}
              />
            </div>
            <div className={classes.control}>
              <label htmlFor="year">Year</label>
              <input
                type="text"
                required
                id="year"
                defaultValue={props.carData ? props.carData.year : ""}
                ref={yearInputRef}
              />
            </div>
            <div className={classes.control}>
              <label htmlFor="km">KM</label>
              <input
                id="km"
                type="text"
                defaultValue={props.carData ? props.carData.km : ""}
                ref={KMInputRef}
              />
            </div>
            <div className={classes.control}>
              <label htmlFor="color">Color</label>
              <input
                required
                type="text"
                id="color"
                defaultValue={props.carData ? props.carData.color : ""}
                ref={colorInputRef}
              />
            </div>
            <div className={classes.control}>
              <label htmlFor="image">Image</label>
              <input
                type="text"
                required
                id="image"
                defaultValue={props.carData ? props.carData.imageUrl : ""}
                ref={imageInputRef}
              />
            </div>
            <div className={classes.control}>
              <label htmlFor="carType">CarTypeId</label>
              <select ref={carTypeInputRef} name="cars" id="cars">
                {props.carTypeData?.map((x) => (
                  <option
                    selected={
                      x.id === props.carData?.carType.id ? "selected" : ""
                    }
                    value={x.type}
                  >
                    {x.type}
                  </option>
                ))}
              </select>
            </div>
            <div className={classes.actions}>
              <button>Add Meetup</button>
            </div>
          </form>
        </Card>
      </div>
    </div>
  );
}

export default NewCarForm;
