import ResponseDisplay from "../../component/ResponseDisplay/ResponseDisplay";
import UserInputForm from "../../component/UserInputForm/UserInputForm";
import { useState } from "react";
require("dotenv").config();

export default function Home() {
  const [response, setResponse] = useState(null);
  const [scheduleData, setScheduleData] = useState(null);

  const handleResponse = (responseData) => {
    setResponse(responseData);
  };

  const handleSchedule = (scheduleData) => {
    setScheduleData(scheduleData);
  };

  return (
    <main>
      <h1>welcome to MealprApp</h1>
      <UserInputForm onResponse={handleResponse} />
      <ResponseDisplay
        response={response}
        onResponse={handleResponse}
        setResponse={setResponse}
        scheduleData={scheduleData}
        setScheduleData={setScheduleData}
      />
    </main>
  );
}
