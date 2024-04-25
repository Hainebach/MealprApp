import React from "react";
import Link from "next/link";
import useMenuScheduleStore from "../../store/useMenuScheduleStore";

export default function Navbar() {
  const { menuData, scheduleData } = useMenuScheduleStore();
  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/create-menu">Create Menu</Link>
        </li>
        {menuData && (
          <li>
            <Link href="/menu">Menu</Link>
            {console.log("menu navbar clicked: ", menuData)}
          </li>
        )}
        {scheduleData && (
          <li>
            <Link href="/schedule">Schedule</Link>
          </li>
        )}
      </ul>
    </nav>
  );
}
