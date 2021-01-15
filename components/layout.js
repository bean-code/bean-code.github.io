import Head from "next/head";
import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";

const name = "Bean Code";
export const siteTitle = "Welcome to a wonderful world of Web Development";

export default function Layout({ children, home }) {
  return (
    <div>
      <Head>
        <Link rel="icon" href="/favicon.ico" />
        <meta name="description" content="a wonderful world of code" />
      </Head>
      <header></header>
      <main></main>
    </div>
  );
}
