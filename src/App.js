import useLocalStorageState from "use-local-storage-state";
import Form from "./components/Form";
import List from "./components/List";
import { nanoid } from "nanoid";

function App() {
  const isGoodWeather = false;
  const [activities, setActivities] = useLocalStorageState("activity", {
    defaultValue: [
      { name: "Katze füttern", isForGoodWeather: false, id: "200" },
    ],
  });

  function handleAddActivity(newActivity) {
    setActivities([...activities, { ...newActivity, id: nanoid(6) }]);
  }

  const filteredActivities = activities.filter(
    (activity) => activity.isForGoodWeather === isGoodWeather
  );

  return (
    <main>
      <List activities={filteredActivities} onAddActivity={handleAddActivity} />
      <Form onAddActivity={handleAddActivity} />
    </main>
  );
}

export default App;
