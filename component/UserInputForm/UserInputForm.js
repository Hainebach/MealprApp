import React from "react";

export default function UserInputForm({ onResponse }) {
  async function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const userInput = formData.get("userInput");
    console.log("user input: ", userInput);

    try {
      const response = await fetch("/api/generateMenu", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userInput }),
      });

      if (!response.ok) {
        throw new Error("Failed to generate new menu");
      }

      const responseData = await response.json();
      console.log("responseData", responseData);
      const newMenu = JSON.parse(responseData.newMenu);
      console.log("newMenu", newMenu);

      onResponse(responseData); // Pass the response data to the parent component
    } catch (error) {
      console.error("Error:", error);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="userInput">What would you like to eat this week?</label>
      <input id="userInput" name="userInput" type="text" />
      <button type="submit">Generate</button>
    </form>
  );
}

// export default function UserInputForm({ onResponse }) {
//   async function handleSubmit(event) {
//     event.preventDefault();
//     const formData = new FormData(event.target);
//     const userInput = formData.get("userInput"); //Object.fromEntries(formData) if i'll have more than one input field
//     console.log(userInput);

//     try {
//       const response = await fetch("/api/generateMenu.js", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json"
//         },
//         body: JSON.stringify({userInput})
//       });
//       if (!response.ok) {
//         throw new Error("failed to generate new menu");
//       }
//     }

//     // return userInput; // send a post request to my api and inside the api handle the response using openAI api
//    catch (error) {
//     console.error("Error:", error);
//   }

//   return (
//     <form onSubmit={handleSubmit}>
//       <label htmlFor="userInput">what would you like to eat this week?</label>
//       <input id="userInput" name="userInput" type="text" />
//       <button type="submit">generate</button>
//     </form>
//   );
// }
