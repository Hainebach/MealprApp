import React from "react";

export default function ScheduleDisplay({ scheduleData, error }) {
  if (!scheduleData) return <p>No schedule to display.</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h2>Schedule:</h2>
      <table>
        <thead>
          <tr>
            <th>Day</th>
            <th>Breakfast</th>
            <th>Lunch</th>
            <th>Dinner</th>
          </tr>
        </thead>
        <tbody>
          {scheduleData.map((day, index) => {
            const { breakfast, lunch, dinner } = day[Object.keys(day)[0]];
            return (
              <tr key={index}>
                <td>{Object.keys(day)[0]}</td>
                <td>{breakfast.title}</td>
                <td>{lunch.title}</td>
                <td>{dinner.title}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
