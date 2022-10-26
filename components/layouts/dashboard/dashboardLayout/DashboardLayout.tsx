import styles from './DashboardLayout.module.css';
import React, {ReactElement} from "react";
import DashboardDrawerLayout from "../dashboardDrawer/dashboardDrawerLayout/DashboardDrawerLayout";
import DashboardToolBarLayout from "../dashboardToolBar/dashboardToolBarLayout/DashboardToolBarLayout";
import {PageWithLayout} from "../../../../pages/_app";

export interface IDBToolBarLayout {
    children: React.ReactNode;
}

const DashboardLayout: PageWithLayout = () => {
  return (
      <div className={styles.container}>

          <DashboardDrawerLayout/>
          <DashboardToolBarLayout/>


      </div>
  )};

DashboardLayout.getLayout = function getLayout(page: ReactElement) {
    return (
        <div className={styles.container}>

        <DashboardDrawerLayout/>
        <DashboardToolBarLayout/>
            {page}

        </div>
    )
}

export default DashboardLayout;