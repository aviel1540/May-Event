import React from "react";
import { useState } from "react";
// import styles from "./Main.module.css";
import { Categories } from "../components/Categories";

export const MainLayout = (props) => {

  const [ showCategories, setShaowCategories ] = useState(true);
  

  return (
    <main>
      {showCategories && <Categories />}
    </main>
  );
};
