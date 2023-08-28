import useLocalStorageState from "use-local-storage-state";
import Form from "./components/Form";
import List from "./components/List";
import { nanoid } from "nanoid";

function App() {
  const isGoodWeather = true;
  const [activities, setActivities] = useLocalStorageState("activity", {
    defaultValue: [
      { name: "Katze füttern", isForGoodWeather: false, id: "200" },
    ],
  });

  function handleAddActivity(newActivity) {
    setActivities([...activities, { ...newActivity, id: nanoid(6) }]);
  }

  function handleSubmit(id) {
    setActivities(
      activities.map((activity) =>
        activity.id === id
          ? { ...activity, isGoodWeather: !isGoodWeather }
          : activity
      )
    );
  }

  return (
    <main>
      <List activities={activities} onAddActivity={handleSubmit} />
      <Form onAddActivity={handleAddActivity} />
    </main>
  );
}

export default App;
