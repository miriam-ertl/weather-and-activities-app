import { useState } from "react";

export default function Form({ onAddActivity }) {
  const [isForGoodWeather, setISForGoodWeather] = useState(false);

  return (
    <form>
      <h1>Add new actitity:</h1>
      <div className="form__field">
        <label htmlFor="activityName">Name of activity:</label>
        <input type="text" name="activityName" id="activityName" />
      </div>
      <div key={isForGoodWeather.id} className="form__checkbox">
        <label htmlFor="activityBox">Good weather actitity:</label>
        <input
          type="checkbox"
          name="activityBox"
          id="activityBox"
          checked={isForGoodWeather.checked}
          onChange={() => setISForGoodWeather(!isForGoodWeather)}
        >
          {isForGoodWeather
            ? isForGoodWeather.unchecked
            : isForGoodWeather.checked}
        </input>
      </div>
      <div className="form__button">
        <button type="submit" onClick={onAddActivity}>
          Submit
        </button>
      </div>
    </form>
  );
}
