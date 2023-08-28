import useLocalStorageState from "use-local-storage-state";
import Form from "./components/Form";
import List from "./components/List";
import { nanoid } from "nanoid";

function App() {
  const [activities, setActivities] = useLocalStorageState("activity", {
    defaultValue: [
      { name: "Katze füttern", isForGoodWeather: false, id: "200" },
    ],
  });

  function handleAddActivity(newActivity) {
    setActivities([...activities, { ...newActivity, id: nanoid(6) }]);
  }

  return (
    <main>
      <List activities={activities} />
      <Form onAddActivity={handleAddActivity} />
    </main>
  );
}

export default App;
