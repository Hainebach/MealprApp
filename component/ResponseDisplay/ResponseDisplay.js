import React from "react";

const ResponseDisplay = ({
  response,
  onResponse,
  scheduleData,
  setResponse,
}) => {
  // if (
  //   response &&
  //   response.newMenu &&
  //   response.newMenu.choices &&
  //   response.newMenu.choices.length > 0
  // ) {
  const generatedMenu = response;
  console.log("generatedMenu: ", generatedMenu);

  const menuLines = generatedMenu?.split("\n");

  async function handleButtonClick(event, setResponse) {
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
        console.log("responseData generated schedule", responseData);
        throw new Error("Failed to generate new schedule");
      }
      const responseData = await response.json();
      console.log("responseData generated schedule", responseData);

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
      <button onClick={(event) => handleButtonClick(event, setResponse)}>
        I like this menu
      </button>
    </div>
  );
  // } else if (scheduleData) {
  //   console.log(typeof scheduleData);
  //   console.log(scheduleData);
  //   return (
  //     <div>
  //       <h2>Schedule:</h2>
  //       <table>
  //         <thead>
  //           <tr>
  //             <th>Day</th>
  //             <th>Breakfast</th>
  //             <th>Lunch</th>
  //             <th>Dinner</th>
  //           </tr>
  //         </thead>
  //         <tbody>
  //           <tr>
  //             <td>{scheduleData.day}</td>
  //             <td>{scheduleData.breakfast}</td>
  //             <td>{scheduleData.lunch}</td>
  //             <td>{scheduleData.dinner}</td>
  //           </tr>
  //         </tbody>
  //       </table>
  //     </div>
  //   );
  // } else {
  //   // Handle case when response doesn't contain menu data
  //   return (
  //     <div>
  //       <h3>what's it gonna be?</h3>
  //     </div>
  //   );
  // }
};

export default ResponseDisplay;
