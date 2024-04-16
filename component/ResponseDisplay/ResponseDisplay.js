import React from "react";

const ResponseDisplay = ({ response }) => {
  if (
    response &&
    response.newMenu &&
    response.newMenu.choices &&
    response.newMenu.choices.length > 0
  ) {
    const generatedMenu = response.newMenu.choices[0].message.content;

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
        <h3>what's it gonna be?</h3>
      </div>
    );
  }
};

export default ResponseDisplay;
