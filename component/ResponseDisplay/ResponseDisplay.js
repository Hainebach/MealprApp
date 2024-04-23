import React from "react";

const ResponseDisplay = ({
  response,
  onResponse,
  scheduleData,
  setScheduleData,
  setResponse,
}) => {
  if (response) {
    const generatedMenu = response;
    console.log("generatedMenu: ", generatedMenu);

    const menuLines = generatedMenu?.split("\n");

    async function handleButtonClick(event) {
      event.preventDefault();
      console.log("I like this menu clicked");
      console.log(typeof menuLines);
      console.log(typeof generatedMenu);
      console.log("schedule: ", scheduleData);

      console.log(response);
      try {
        const response = await fetch("/api/generateSchedule", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            generatedMenu,
          }),
        });
        if (!response.ok) {
          console.log("responseData generated schedule", response);
          console.log(typeof response);
          throw new Error("Failed to generate new schedule");
        }
        const responseData = await response.json();
        console.log("responseData generated schedule", responseData);
        setScheduleData(responseData);
        onResponse(responseData);
        setResponse(null);
      } catch (error) {
        console.error("error: ", error);
      }
    }

    return (
      <div>
        <h2>Suggested Menu:</h2>
        <ul>
          {menuLines?.map((line, index) => (
            <li key={index}>{line}</li>
          ))}
        </ul>
        <button onClick={(event) => handleButtonClick(event)}>
          I like this menu
        </button>
      </div>
    );
  } else if (scheduleData) {
    console.log(typeof scheduleData);
    console.log(scheduleData);
    const parsedSchedule = JSON.parse(scheduleData);
    console.log(typeof parsedSchedule);

    return (
      // <h3>{scheduleData}</h3>
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
            {Object.keys(parsedSchedule).map((day) => {
              const { breakfast, lunch, dinner } = parsedSchedule[day];
              return (
                <tr key={day}>
                  <td>{day}</td>
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
  } else {
    // Handle case when response doesn't contain menu data
    return (
      <div>
        <h3>what's it gonna be?</h3>
      </div>
    );
  }
};

export default ResponseDisplay;
