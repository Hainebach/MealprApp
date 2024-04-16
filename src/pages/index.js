import ResponseDisplay from "../../component/ResponseDisplay/ResponseDisplay";
import UserInputForm from "../../component/UserInputForm/UserInputForm";
import { useState } from "react";

export default function Home() {
  const [response, setResponse] = useState(null);

  const handleResponse = (responseData) => {
    setResponse(responseData);
  };

  return (
    <main>
      <h1>welcome to MealprApp</h1>
      <UserInputForm onResponse={handleResponse} />
      <ResponseDisplay response={response} />
    </main>
  );
}
