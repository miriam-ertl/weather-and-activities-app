import useLocalStorageState from "use-local-storage-state";
import { useState, useEffect } from "react";
import Form from "./components/Form";
import List from "./components/List";
import { nanoid } from "nanoid";

function App() {
  const [weather, setWeather] = useState(false);
  const [activities, setActivities] = useLocalStorageState("activity", {
    defaultValue: [
      { name: "Katze füttern", isForGoodWeather: false, id: "200" },
    ],
  });

  useEffect(() => {
    async function fetchWeather() {
      const response = await fetch(
        `https://example-apis.vercel.app/api/${weather}`
      );
      const data = await response.json();
      setWeather(data);
    }
    fetchWeather();
  });

  function handleAddActivity(newActivity) {
    setActivities([...activities, { ...newActivity, id: nanoid(6) }]);
  }

  const filteredActivities = activities.filter(
    (activity) => activity.isForGoodWeather === weather
  );

  return (
    <main>
      <h1>
        {weather === true
          ? `${weather.condition} ${weather.temperature}` "Bad weather outside! Here’s what you can do now:"
          : `${weather.condition} ${weather.temperature}` "The weather is awesome! Go outside and:"}
      </h1>
      <List activities={filteredActivities} onAddActivity={handleAddActivity} />
      <Form onAddActivity={handleAddActivity} />
    </main>
  );
}

export default App;
