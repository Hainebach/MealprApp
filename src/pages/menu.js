import { useRouter } from "next/router";
import Layout from "../../component/Layout/Layout";
import MenuDisplay from "../../component/MenuDisplay/MenuDisplay";
import useMenuScheduleStore from "../../store/useMenuScheduleStore";
import React, { useState, useEffect } from "react";
import styles from "../../src/styles/UserInputForm.module.scss";

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
    console.log("first menuData with laya: ", menuData);
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
    if (!editMode) {
      // If going to edit mode
      setEditedMenu(menuData.join("\n"));
    } else {
      // If exiting edit mode
      setMenuData(
        editedMenu
          .split("\n")
          .map((item) => item.trim())
          .filter((item) => item !== "")
      );
    }
  };

  const handleMenuEditSubmit = () => {
    const menuItems = editedMenu
      .split("\n")
      .map((item) => item.trim())
      .filter((item) => item !== "");

    console.log("Converting edited menu to array:", menuItems);
    setMenuData(menuItems);
    console.log("Updated menuData in store.");
    handleButtonClick();
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
      ) : editMode ? (
        <div className="container-fluid">
          <textarea
            value={editedMenu}
            onChange={(e) => setEditedMenu(e.target.value)}
            className="form-control textarea-edit"
            style={{ height: "80vh", width: "100%" }}
          />
          <div className="d-flex justify-content-between mt-3">
            <button className="btn btn-primary" onClick={handleMenuEditSubmit}>
              Submit Edited Menu
            </button>
            <button className="btn btn-warning" onClick={toggleEditMode}>
              Cancel
            </button>
          </div>
        </div>
      ) : (
        <MenuDisplay
          menuData={menuData}
          onEditClick={toggleEditMode}
          handleButtonClick={handleButtonClick}
          className="bodyContent"
        />
      )}
    </Layout>
  );
}
