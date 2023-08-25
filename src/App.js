import useLocalStorageState from "use-local-storage-state";
import Form from "./components/Form/Form.js";
import List from "./components/List/List.js";
import { nanoid } from "nanoid";

function App() {
  const [activities, setActivities] = useLocalStorageState("activity", {
    defaultValue: [],
  });

  function handleAddActivity(newActivity) {
    setActivities([...activities, { ...newActivity, id: nanoid(6) }]);
  }

  return (
    <div>
      <List activties={activities} />
      <Form onAddActivity={handleAddActivity} />
    </div>
  );
}

export default App;
