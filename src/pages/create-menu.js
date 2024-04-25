import Layout from "../../component/Layout/Layout";
import UserInputForm from "../../component/UserInputForm/UserInputForm";
import useMenuScheduleStore from "../../store/useMenuScheduleStore";
import { useRouter } from "next/router";
import { useState } from "react";

export default function CreateMenuPage() {
  const router = useRouter();
  const { setMenuData } = useMenuScheduleStore();
  const [isLoading, setIsLoading] = useState(false);

  const handleMenuData = async (menuData) => {
    setIsLoading(true);
    try {
      const menuItems = menuData
        .split("\n")
        .map((item) => item.trim())
        .filter((item) => item !== "");
      setMenuData(menuItems);
      console.log("Converted menuData to array:", menuItems);
      router.push("/menu");
    } catch (error) {
      console.error("Error handling menu data:", error);
      // Optionally handle error state here
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <Layout>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <>
          <UserInputForm onMenuData={handleMenuData} />
        </>
      )}
    </Layout>
  );
}
