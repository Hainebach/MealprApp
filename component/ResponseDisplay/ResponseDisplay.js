import React, { useEffect, useState } from "react";

const ResponseDisplay = ({ menuData }) => {
  const [error, setError] = useState("");
  const [parsedSchedule, setParsedSchedule] = useState(null);
  const [newGeneratedMenu, setNewGeneratedMenu] = useState();

  async function handleButtonClick(event) {
    event.preventDefault();
    console.log("I like this menu clicked");
    console.log(typeof newGeneratedMenu);
    console.log("newGeneratedMenu: ", newGeneratedMenu);

    // console.log(response);

    try {
      const response = await fetch("/api/generateSchedule", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          newGeneratedMenu,
        }),
      });
      if (!response.ok) {
        console.log("responseData generated schedule", response);
        console.log(typeof response);
        throw new Error("Failed to generate new schedule");
      }
      const responseData = await response.json();
      const parsedSchedule = JSON.parse(responseData);
      console.log("parsedSchedule!!!!!", parsedSchedule);
      setParsedSchedule(parsedSchedule);
    } catch (error) {
      console.error("error: ", error);
    }
  }

  useEffect(() => {
    const generatedMenu = menuData;
    setNewGeneratedMenu(generatedMenu?.split("\n"));
  }, [menuData]);

  return (
    <>
      {newGeneratedMenu && (
        <div>
          <h2>Suggested Menu:</h2>
          <ul>
            {newGeneratedMenu?.map((line, index) => (
              <li key={index}>{line}</li>
            ))}
          </ul>
          <button onClick={(event) => handleButtonClick(event)}>
            I like this menu
          </button>
        </div>
      )}
      {parsedSchedule && (
        <div>
          {error && <p>{error}</p>}
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
              {parsedSchedule.map((day, index) => {
                console.log("day", day);
                console.log("day.breakfast", day.breakfast);
                console.log(
                  "day[Object.keys(day)[0]]",
                  day[Object.keys(day)[0]]
                );
                const { breakfast, lunch, dinner } = day[Object.keys(day)[0]];
                console.log("breakfast", breakfast);

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
      )}
    </>
  );
};

// } else {
//   // Handle case when response doesn't contain menu data
//   return (
//     <div>
//       <h3>what's it gonna be?</h3>
//     </div>
//   );
// }

//   } else if (scheduleData) {
//     console.log(typeof scheduleData);

//     try {
//       const parsedSchedule = JSON.parse(scheduleData);
//       // console.log("array? ", Array.isArray(parsedSchedule));
//       setScheduleData(parsedSchedule);

//       return (
//         // <>
//         //   <h3>{scheduleData}</h3>
//         // </>
//         <div>
//           {error && <p>{error}</p>}
//           <h2>Schedule:</h2>

//           <table>
//             <thead>
//               <tr>
//                 <th>Day</th>
//                 <th>Breakfast</th>
//                 <th>Lunch</th>
//                 <th>Dinner</th>
//               </tr>
//             </thead>
//             <tbody>
//               {scheduleData.map((day) => {
//                 const { breakfast, lunch, dinner } = scheduleData[day];
//                 return (
//                   <tr key={day}>
//                     <td>{day}</td>
//                     <td>{breakfast.title}</td>
//                     <td>{lunch.title}</td>
//                     <td>{dinner.title}</td>
//                   </tr>
//                 );
//               })}
//             </tbody>
//           </table>
//         </div>
//       );
//     } catch (error) {
//       setError("not a valid json");
//       console.error("not a valid json");
//     }
// };

export default ResponseDisplay;
