import Link from "next/link";
import Layout from "../../component/Layout/Layout";
export default function Home() {
  return (
    <Layout>
      <h1>Welcome to MealprApp</h1>
      <Link href="/create-menu">Create Your Menu</Link>
    </Layout>
  );
}

// import Layout from "../../component/Layout/Layout";
// import ResponseDisplay from "../../component/ResponseDisplay/ResponseDisplay";
// import UserInputForm from "../../component/UserInputForm/UserInputForm";
// import { useState } from "react";
// require("dotenv").config();

// export default function Home() {
//   const [menuData, setMenuData] = useState(null);
//   const [scheduleData, setScheduleData] = useState(null);

//   const handleMenuData = (menuData) => {
//     setMenuData(menuData);
//   };

//   const handleSchedule = (scheduleData) => {
//     setScheduleData(scheduleData);
//   };

//   return (
//     <Layout>
//       <h1>welcome to MealprApp</h1>
//       <UserInputForm onMenuData={handleMenuData} />
//       <ResponseDisplay
//         menuData={menuData}
//         onMenuData={handleMenuData}
//         setMenuData={setMenuData}
//         scheduleData={scheduleData}
//         setScheduleData={setScheduleData}
//       />
//     </Layout>
//   );
// }
