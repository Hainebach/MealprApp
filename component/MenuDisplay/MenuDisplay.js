import React from "react";

export default function MenuDisplay({ menuData, handleButtonClick }) {
  if (!menuData || !Array.isArray(menuData)) return <p>No menu to display.</p>;

  return (
    <div>
      <h2>Suggested Menu:</h2>
      <ul>
        {menuData.map((line, index) => (
          <li key={index}>{line}</li>
        ))}
      </ul>
      <button onClick={handleButtonClick}>I like this menu</button>
    </div>
  );
}
