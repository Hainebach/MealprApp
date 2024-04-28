import React, { useState } from "react";
import styles from "../../src/styles/UserInputForm.module.scss";

export default function UserInputForm({ onMenuData }) {
  const [dietaryRestrictions, setDietaryRestrictions] = useState("none");
  const [isLoading, setIsLoading] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();
    setIsLoading(true);
    const formData = new FormData(event.target);
    const userInput = formData.get("userInput") || "anything";
    const dietaryChoices = formData.get("dietaryChoices");
    const godsRestrictions = formData.get("godsRestrictions");
    const customDietaryRestriction = formData.get("customDietaryRestriction");
    const finalDietaryRestrictions =
      dietaryRestrictions === "other"
        ? customDietaryRestriction
        : dietaryRestrictions;

    console.log("user input: ", userInput);
    console.log("dietaryRestrictions: ", dietaryRestrictions);
    console.log("finalDietaryRestrictions: ", finalDietaryRestrictions);
    console.log("godsRestrictions: ", godsRestrictions);
    console.log("dietaryCoices: ", dietaryChoices);

    try {
      const response = await fetch("/api/generateMenu", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userInput,
          finalDietaryRestrictions,
          dietaryChoices,
          godsRestrictions,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to generate new menu");
      }

      const responseData = await response.json();
      console.log("responseData", responseData);

      // onMenuData(responseData);
      if (typeof onMenuData === "function") {
        onMenuData(responseData);
        console.log("onMenuData is: ", onMenuData);
      } else {
        console.error("onMenuData is not a function");
      }
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      {isLoading ? (
        <div
          className="gif-container"
          style={{
            width: "100%",
            height: "auto",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",

            position: "relative",
          }}
        >
          <iframe
            src="https://giphy.com/embed/9MIlfNXYBFC25L7QKT"
            style={{ width: "100%", height: "100%", position: "relative" }}
            allowFullScreen
          ></iframe>
        </div>
      ) : (
        <>
          <label htmlFor="userInput">
            What would you like to eat this week?
          </label>
          <br />
          <textarea
            id="userInput"
            name="userInput"
            type="text"
            className="form-control"
            style={{ height: "150px" }}
            placeholder="Cookies for breakfast on Wednesday, donuts for Thursday dinner, and surprise me with the rest."
          ></textarea>
          <br />
          <label htmlFor="dietaryChoices">dietery choices:</label>
          <select
            id="dietaryChoices"
            name="dietaryChoices"
            className="form-select"
          >
            <option value="vegetarian">vegetarian</option>
            <option value="vegan">vegan</option>
            <option value="pescatarian">pescatarian</option>
            <option value="omnivore">omnivore</option>
          </select>
          <br />
          <label htmlFor="dietaryRestrictions">dietary restrictions:</label>
          <select
            className="form-select"
            id="dietaryRestrictions"
            name="dietaryRestrictions"
            value={dietaryRestrictions}
            onChange={(event) => setDietaryRestrictions(event.target.value)}
          >
            <option value="none">none</option>
            <option value="gluten-free">gluten-free</option>
            <option value="lactose-free">lactose-free</option>
            <option value="nut allergy">nut allergy</option>
            <option value="other">other</option>
          </select>

          {dietaryRestrictions === "other" && (
            <input
              type="text"
              name="customDietaryRestriction"
              placeholder="enter your custom restriction"
            />
          )}
          <br />
          <label htmlFor="godsRestrictions">god's restrictions:</label>
          <select
            className="form-select"
            id="godsRestrictions"
            name="godsRestrictions"
          >
            <option value="none">none</option>
            <option value="kosher">kosher</option>
            <option value="halal">halal</option>
            <option value="hindu">hindu</option>
          </select>
          <br />
          <button type="submit" className="btn btn-success">
            Generate
          </button>
        </>
      )}
    </form>
  );
}
