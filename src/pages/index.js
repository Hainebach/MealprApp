import { useState } from "react";
require("dotenv").config();
import Link from "next/link";
import Layout from "../../component/Layout/Layout.jsx";
// import { handleResponse } from "../../utils/dataHandlers/dataHandlers.js";

export default function Home() {
  const [scheduleData, setScheduleData] = useState(null);

  return (
    <Layout>
      <h1>welcome to MealprApp</h1>
      <Link href="/createMenu">let&apos;s create a menu</Link>
    </Layout>
  );
}
