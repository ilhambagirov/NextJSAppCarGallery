import { useRef } from "react";

import Card from "../ui/Card";
import classes from "./NewCarForm.module.css";

function NewCarForm(props) {
  const brandInputRef = useRef();
  const modelInputRef = useRef();
  const yearInputRef = useRef();
  const descriptionInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const enteredBrand = titleInputRef.current.value;
    const enteredModel = imageInputRef.current.value;
    const enteredYear = addressInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;

    const newCar = {
      brand: enteredBrand,
      model: enteredModel,
      year: enteredYear,
      description: enteredDescription,
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
          <label htmlFor="image">Model</label>
          <input type="url" required id="image" ref={modelInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="address">Year</label>
          <input type="text" required id="address" ref={yearInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            required
            rows="5"
            ref={descriptionInputRef}
          ></textarea>
        </div>
        <div className={classes.actions}>
          <button>Add Meetup</button>
        </div>
      </form>
    </Card>
  );
}

export default NewCarForm;
