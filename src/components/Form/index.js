//import { useState } from "react";

export default function Form({ onAddActivity }) {
  function handleSubmit(event) {
    event.preventDefault();
    const formElements = event.target.elements;
    const newActivity = {
      name: formElements.name.value,
      isForGoodWeather: formElements.isForGoodWeather.checked,
    };
    onAddActivity(newActivity);
    event.target.reset();
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>Add new activity:</h1>
      <div className="form__field">
        <label htmlFor="name">Name of activity:</label>
        <input type="text" name="name" id="name" />
      </div>
      <div className="form__checkbox">
        <label htmlFor="activityBox">Good weather activity:</label>
        <input type="checkbox" name="isForGoodWeather" id="activityBox" />
      </div>
      <div className="form__button">
        <button type="submit">Submit</button>
      </div>
    </form>
  );
}
