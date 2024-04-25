import ScheduleDisplay from "../../component/ScheduleDisplay/ScheduleDisplay";
import useMenuScheduleStore from "../../store/useMenuScheduleStore";
import Layout from "../../component/Layout/Layout";
import { useState } from "react";

export default function SchedulePage() {
  const { scheduleData } = useMenuScheduleStore();
  const [error, setError] = useState("");

  return (
    <Layout>
      <ScheduleDisplay scheduleData={scheduleData} error={error} />
    </Layout>
  );
}
