import React from "react";
import Header from "../Header/Header";
import Navbar from "../Navbar/Navbar";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      {children}
      <Navbar />
    </>
  );
}
