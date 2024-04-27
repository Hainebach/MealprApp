import "bootstrap/dist/css/bootstrap.min.css";
import "@/styles/global.scss";
import { Assistant } from "next/font/google";
import styles from "../styles/Home.module.scss";

const assistant = Assistant({ subsets: ["latin"] });

export default function App({ Component, pageProps }) {
  return (
    <main className={`${styles.main} ${assistant.className}`}>
      <Component {...pageProps} />
    </main>
  );
}
