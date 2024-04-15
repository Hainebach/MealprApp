import React from "react";
import OpenAI from "openai";

const ResponseDisplay = ({ response }) => {
  return (
    <div>
      <h2>Suggested Menu:</h2>
      <pre>{JSON.stringify(response, null, 2)}</pre>
    </div>
  );
};

export default ResponseDisplay;

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
