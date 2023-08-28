//import { useState } from "react";

export default function Form({ onAddActivity }) {
  function handleSubmit(event) {
    event.preventDefault();
    const formElements = event.target.elements;
    const newAvtivity = {
      name: formElements.name.value,
      isForGooddWeather: formElements.isForGoodWeather.checked,
    };
    onAddActivity(newAvtivity);
    event.target.reset();
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>Add new actitity:</h1>
      <div className="form__field">
        <label htmlFor="name">Name of activity:</label>
        <input type="text" name="name" id="name" />
      </div>
      <div className="form__checkbox">
        <label htmlFor="activityBox">Good weather actitity:</label>
        <input type="checkbox" name="isForGoodWeather" id="activityBox" />
      </div>
      <div className="form__button">
        <button type="submit">Submit</button>
      </div>
    </form>
  );
}
