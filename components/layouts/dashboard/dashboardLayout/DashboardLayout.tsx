import styles from './DashboardLayout.module.css';
import React from "react";
import DBDrawerLayout from "../dbDrawer/dbDrawerLayout/DBDrawerLayout";

export interface IDashboardLayout {}

const DashboardLayout: React.FC<IDashboardLayout> = () => {
  return (
      <div className={styles.container}>
          <DBDrawerLayout/>

      </div>
  )};

export default DashboardLayout;