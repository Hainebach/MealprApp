import "@/styles/globals.css";
import { useState } from "react";

export default function App({ Component, pageProps }) {
  const [newGeneratedMenu, setNewGeneratedMenu] = useState(null);
  const modifiedPageProps = {
    ...pageProps,
    newGeneratedMenu,
    setNewGeneratedMenu,
  };
  return <Component {...modifiedPageProps} />;
}
