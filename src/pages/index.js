import ResponseDisplay from "../../component/ResponseDisplay/ResponseDisplay";
import UserInputForm from "../../component/UserInputForm/UserInputForm";
import { useState, useEffect } from "react";
import generator from "../../utils/openai";

// export default function Home() {
//   const [response, setResponse] = useState(null);
//   useEffect(() => {
//     async function fetchData() {
//       try {
//         const responseData = await generator("default input");
//         setResponse(responseData);
//       } catch (error) {
//         console.error("Error fetching initial data:", error);
//       }
//     }

//     fetchData();
//   }, []);
//   const handleResponse = (responseData) => {
//     setResponse(responseData);
//   };
export default function Home() {
  const [response, setResponse] = useState(null); // Initialize response state as null

  const handleResponse = (responseData) => {
    setResponse(responseData); // Update response state when form is submitted
  };

  return (
    <main>
      <h1>welcome to MealprApp</h1>
      <UserInputForm onResponse={handleResponse} />
      <ResponseDisplay response={response} />
    </main>
  );
}
