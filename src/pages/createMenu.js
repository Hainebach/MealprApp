import React from "react";
import UserInputForm from "../../component/UserInputForm/UserInputForm";
import Layout from "../../component/Layout/Layout";
// import { handleResponse } from "../../utils/dataHandlers/dataHandlers";
import { useState } from "react";
import { useRouter } from "next/router";

export const handleResponse = (newGeneratedMenu, setNewGeneratedMenu) => {
  setNewGeneratedMenu(newGeneratedMenu);
  router.push({
    pathname: "/menu",
    query: { newGeneratedMenu: JSON.stringify(newGeneratedMenu) },
  });
};

export default function CreateMenu() {
  const router = useRouter();
  return (
    <Layout>
      <h1>Create your next week&apos;s menu</h1>
      {/* <UserInputForm /> */}
      <UserInputForm onNewGeneratedMenu={handleResponse} />
    </Layout>
  );
}
