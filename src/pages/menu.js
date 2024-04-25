import { useRouter } from "next/router";
import Layout from "../../component/Layout/Layout";
import MenuDisplay from "../../component/MenuDisplay/MenuDisplay";
import useMenuScheduleStore from "../../store/useMenuScheduleStore";
import React, { useState } from "react";

export default function MenuPage() {
  const router = useRouter();
  const { menuData, setScheduleData } = useMenuScheduleStore();
  const [isLoading, setIsLoading] = useState(false);

  const handleButtonClick = async () => {
    console.log("I like this menu clicked");
    setIsLoading(true);

    try {
      const response = await fetch("/api/generateSchedule", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ menuData }),
      });
      const responseData = await response.json();
      console.log("Schedule generated:", responseData);
      setScheduleData(responseData);

      router.push("/schedule");
    } catch (error) {
      console.error("Error generating schedule:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Layout>
      {isLoading ? (
        <div
          className="gif-container"
          style={{
            width: "100%",
            height: "0",
            paddingBottom: "56%",
            position: "relative",
          }}
        >
          <iframe
            src="https://giphy.com/embed/LMtqBDUJAzyYjUTaRP"
            style={{ width: "100%", height: "100%", position: "absolute" }}
            allowFullScreen
          ></iframe>
        </div>
      ) : (
        <MenuDisplay
          menuData={menuData}
          handleButtonClick={handleButtonClick}
        />
      )}
    </Layout>
  );
}
