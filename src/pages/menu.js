import { useRouter } from "next/router";
import Layout from "../../component/Layout/Layout";
import MenuDisplay from "../../component/MenuDisplay/MenuDisplay";
import useMenuScheduleStore from "../../store/useMenuScheduleStore";
import { useEffect } from "react";

export default function MenuPage() {
  const router = useRouter();
  const { menuData, setScheduleData } = useMenuScheduleStore();

  const handleButtonClick = async () => {
    console.log("I like this menu clicked");

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
    }
  };
  useEffect(() => {
    if (!menuData) {
      router.push("/create-menu");
    }
  }, [menuData, router]);
  console.log("menuData: ", menuData);

  return (
    <Layout>
      <MenuDisplay menuData={menuData} handleButtonClick={handleButtonClick} />
    </Layout>
  );
}
