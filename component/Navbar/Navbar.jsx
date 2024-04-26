import React from "react";
import Link from "next/link";
import useMenuScheduleStore from "../../store/useMenuScheduleStore";
import styles from "../../src/styles/Navbar.module.scss";

export default function Navbar() {
  const { menuData, scheduleData } = useMenuScheduleStore();
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-light bg-light fixed-bottom content ${styles.navbarCustom}`}
    >
      <div className="container-fluid">
        <span className="nav-item">
          <Link className="navbar-brand nav-link" href="/">
            MealprApp
          </Link>
        </span>
        <span className="nav-item">
          <Link className="navbar-brand nav-link" href="/create-menu">
            Create Menu
          </Link>
        </span>
        {menuData && (
          <span className="nav-item">
            <Link className="navbar-brand nav-link" href="/menu">
              Menu
            </Link>
            {console.log("menu navbar clicked: ", menuData)}
          </span>
        )}
        {scheduleData && (
          <span className="nav-item">
            <Link className="navbar-brand nav-link" href="/schedule">
              Schedule
            </Link>
          </span>
        )}
      </div>
    </nav>
  );
}
