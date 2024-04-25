import { useRouter } from "next/router";
import Layout from "../../component/Layout/Layout";
import MenuDisplay from "../../component/MenuDisplay/MenuDisplay";
import useMenuScheduleStore from "../../store/useMenuScheduleStore";
import React, { useState, useEffect } from "react";

export default function MenuPage() {
  const router = useRouter();
  const { menuData, setScheduleData, setMenuData } = useMenuScheduleStore();
  const [isLoading, setIsLoading] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [editedMenu, setEditedMenu] = useState(menuData);

  useEffect(() => {
    setEditedMenu(menuData);
  }, [menuData]);

  const handleButtonClick = async () => {
    console.log("I like this menu clicked");
    console.log("menu data clicked: ", menuData);
    setIsLoading(true);

    try {
      const response = await fetch("/api/generateSchedule", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ newGeneratedMenu: editedMenu }),
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

  const toggleEditMode = () => {
    setEditMode(!editMode);
    setEditedMenu(menuData);
  };

  const handleMenuEdit = (event) => {
    setEditedMenu(event.target.value);
    console.log("edited menuData: ", editedMenu);
  };

  //   const submitEditedMenu = () => {
  //     setMenuData(editedMenu);
  //     console.log("edited menuData: ", menuData);
  //   };

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
      ) : editMode ? (
        <div>
          <textarea value={editedMenu} onChange={handleMenuEdit} />
          <button
            onClick={() => {
              setMenuData(editedMenu);
              handleButtonClick();
            }}
          >
            Submit Edited Menu
          </button>
          <button onClick={toggleEditMode}>Cancel</button>
        </div>
      ) : (
        <MenuDisplay
          menuData={menuData}
          onEditClick={toggleEditMode}
          handleButtonClick={handleButtonClick}
        />
      )}
    </Layout>
  );
}
