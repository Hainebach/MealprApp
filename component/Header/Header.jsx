import React from "react";
import Link from "next/link";
import styles from "../../src/styles/Home.module.scss";

export default function Header() {
  return (
    <>
      <Link href="/">
        <h1 className="header">MealprApp</h1>
      </Link>
    </>
  );
}
