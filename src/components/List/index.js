export default function List({ activities }) {
  console.log(activities);
  return (
    <>
      <ul>
        {activities.map((activity) => {
          return <li key={activity.id}>{activity.name}</li>;
        })}
      </ul>
    </>
  );
}
