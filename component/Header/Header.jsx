import React from "react";
import Link from "next/link";
import styles from "../../src/styles/Header.module.scss";
import { useSession, signIn, signOut } from "next-auth/react";

export default function Header() {
  const { data: session, status } = useSession();
  console.log("session: ", session, "status: ", status);
  return (
    <header className={styles.header}>
      <Link className={styles.headerLink} href="/">
        <h1>MealprApp</h1>
      </Link>
      <div className={styles.loginContainer}>
        {session ? (
          <button onClick={() => signOut()} className={styles.loginButton}>
            Logout
          </button>
        ) : (
          <button onClick={() => signIn()} className={styles.loginButton}>
            Login
          </button>
        )}
      </div>
    </header>
  );
}
