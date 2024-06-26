import React from "react";
import styles from "../../src/styles/MenuDisplay.module.scss";
export default function MenuDisplay({
  menuData,
  handleButtonClick,
  onEditClick,
}) {
  if (!menuData || !Array.isArray(menuData)) {
    return <p>No menu to display</p>; // Corrected the return statement
  }

  return (
    <div className="container mt-4">
      <h2>Suggested Menu:</h2>
      <ul className="list-unstyled">
        {menuData.map((line, index) => {
          const cleanLine = line.replace(/^- /, ""); // Removes leading dash and space if present
          const isDayName =
            /(Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday)/i.test(
              cleanLine
            );
          return (
            <li key={index} className={isDayName ? styles.dayName : ""}>
              {cleanLine}
            </li>
          );
        })}
      </ul>
      <div className="d-flex justify-content-between mt-3">
        <button className="btn btn-success" onClick={handleButtonClick}>
          I like this menu
        </button>
        <button className="btn btn-warning" onClick={onEditClick}>
          I like this but...
        </button>
      </div>
    </div>
  );
}
