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

      onResponse(responseData);
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
