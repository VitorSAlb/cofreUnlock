import React from "react";
import styles from "./page.module.css";
import Cofre from "@/components/Cofre/Cofre";

export default function Home() {
 
  return (
    <main className={styles.main}>
      <h1>Senha do cofre</h1>
      
      <Cofre/>
    </main>
  );
}
