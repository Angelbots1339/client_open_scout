import styles from './DashboardLayout.module.css';
import React, {ReactElement} from "react";
import DashboardDrawerLayout from "../dashboardDrawer/dashboardDrawerLayout/DashboardDrawerLayout";
import DashboardToolBarLayout from "../dashboardToolBar/dashboardToolBarLayout/DashboardToolBarLayout";
import {DashboardPageWithLayout} from "../../../../pages/_app";
import {Box, Breadcrumbs, Card, Link} from "@mui/material";

export interface IDBToolBarLayout {
    breadCrumbs: [];
    children: React.ReactNode;
}

const DashboardLayout: DashboardPageWithLayout = () => {
  return (
      <div className={styles.container}>

          <DashboardDrawerLayout/>
          <DashboardToolBarLayout/>



      </div>
  )};

DashboardLayout.getLayout = function getLayout(page: ReactElement, breadCrumbs:[]) {
    return (
        <div className={styles.container}>

        <DashboardDrawerLayout/>
        <DashboardToolBarLayout/>
            <Box sx={{ml:10, mt:5, width:"90%", height:"auto"}} >
            <Breadcrumbs aria-label="breadcrumb">
                { breadCrumbs.map((dir: string) =>
                    <Link underline="hover" color="inherit" href={dir === "Home" || dir === "Dashboard" ? "/dashboard" :"/dashboard/" + dir.toLowerCase()}>
                        {dir}
                    </Link>
                )}
            </Breadcrumbs>
            <Card color={"primary"} sx={{ width:"100%", height:"auto", boxShadow:5}}>
                {page}
            </Card>
            </Box>

        </div>
    )
}

export default DashboardLayout;