import ResponseDisplay from "../../component/ResponseDisplay/ResponseDisplay";
import UserInputForm from "../../component/UserInputForm/UserInputForm";
import { useState, useEffect } from "react";
import generator from "../../utils/openai";
import OpenAI from "openai";
export default function Home() {
  const [response, setResponse] = useState("...soon you'll find out");
  useEffect(() => {
    async function fetchData() {
      try {
        const responseData = await generator("default input");
        setResponse(responseData);
      } catch (error) {
        console.error("Error fetching initial data:", error);
      }
    }

    fetchData();
  }, []);
  const handleResponse = (responseData) => {
    setResponse(responseData);
  };

  return (
    <main>
      <h1>welcome to MealprApp</h1>
      <UserInputForm onSubmit onResponse={handleResponse} />
      <ResponseDisplay response={response} />
    </main>
  );
}
