import React from "react";
import styles from "../../src/styles/ScheduleDisplay.module.scss";

export default function ScheduleDisplay({ scheduleData, error }) {
  if (!scheduleData) return <p>No schedule to display.</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="container mt-4">
      <h2 className="mb-3" style={{ fontSize: "2rem" }}>
        Schedule:
      </h2>
      <table className={`table table-hover ${styles.scheduleTable}`}>
        <thead className="thead-dark">
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
              <tr key={index} className={styles.scheduleRow}>
                <td className={styles.dayName}>
                  <strong>{Object.keys(day)[0]}</strong>
                </td>
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
