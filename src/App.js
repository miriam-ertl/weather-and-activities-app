import { useState } from "react";
import Form from "./components/Form/Form.js";
import { nanoid } from "nanoid";

function App() {
  const [activities, setActivities] = useState();

  function handleAddActivity(newActivity) {
    setActivities([...activities, { ...newActivity, id: nanoid(6) }]);
  }
  return (
    <div>
      <Form onAddActivity={handleAddActivity} />
    </div>
  );
}

export default App;
