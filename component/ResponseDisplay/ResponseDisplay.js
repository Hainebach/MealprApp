import React from "react";

const ResponseDisplay = ({ response }) => {
  // Check if response has newMenu property and message content
  if (
    response &&
    response.newMenu &&
    response.newMenu.choices &&
    response.newMenu.choices.length > 0
  ) {
    const generatedMenu = response.newMenu.choices[0].message.content;

    // Split the menu into separate lines
    const menuLines = generatedMenu.split("\n");

    return (
      <div>
        <h2>Suggested Menu:</h2>
        <ul>
          {menuLines.map((line, index) => (
            <li key={index}>{line}</li>
          ))}
        </ul>
      </div>
    );
  } else {
    // Handle case when response doesn't contain menu data
    return (
      <div>
        <h2>your menu is being prepared</h2>
      </div>
    );
  }
};

export default ResponseDisplay;

// import React from "react";
// import OpenAI from "openai";

// const ResponseDisplay = ({ response }) => {
//   console.log("menu: ", response.newMenu.choices[0].message.content);

//   return (
//     <div>
//       <h2>Suggested Menu:</h2>
//       <pre>
//         {JSON.stringify(response.newMenu.choices[0].message.content, null, 2)}
//       </pre>
//     </div>
//   );
// };

// export default ResponseDisplay;

//-----------------------------------------------------------------------------------------------------------------

// import React from "react";

// const ResponseDisplay = ({ response }) => {
//   const days = Object.keys(response);

//   return (
//     <div>
//       <h2>Suggested Menu:</h2>
//       <ul>
//         {days.map((day, index) => (
//           <li key={index}>
//             <strong>{day}</strong>:
//             <ul>
//               <li>Breakfast: {response[day].breakfast}</li>
//               <li>Lunch: {response[day].lunch}</li>
//               <li>Dinner: {response[day].dinner}</li>
//             </ul>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default ResponseDisplay;
