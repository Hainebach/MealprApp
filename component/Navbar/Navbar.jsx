import React from "react";
import Link from "next/link";

export default function Navbar({ menuData, scheduleData }) {
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
