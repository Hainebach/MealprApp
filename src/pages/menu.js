import React from "react";
import ResponseDisplay from "../../component/ResponseDisplay/ResponseDisplay.jsx";
import Layout from "../../component/Layout/Layout.jsx";
import { useRouter } from "next/router.js";

export default function Menu() {
  const router = useRouter();
  const { menuData } = router.query;
  return (
    <Layout>
      <h1>Generated Menu</h1>
      <ResponseDisplay />
    </Layout>
  );
}
