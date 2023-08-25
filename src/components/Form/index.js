export default function Form({ onAddActivity }) {
  return (
    <form>
      <h1>Add new actitity:</h1>
      <div className="form__field">
        <label htmlFor="activityName">Name of activity:</label>
        <input type="text" name="activityName" id="activityName" />
      </div>
      <div className="form__checkbox">
        <label htmlFor="activityBox">Good weather actitity:</label>
        <input type="checkbox" name="activityBox" id="activityBox"></input>
      </div>
      <div className="form__button">
        <button type="submit">Submit</button>
      </div>
    </form>
  );
}
