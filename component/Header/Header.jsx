import React from "react";
import Link from "next/link";
import styles from "../../src/styles/Header.module.scss";

export default function Header() {
  return (
    <header className={styles.header}>
      <Link className={styles.headerLink} href="/">
        <h1>MealprApp</h1>
      </Link>
    </header>
  );
}
