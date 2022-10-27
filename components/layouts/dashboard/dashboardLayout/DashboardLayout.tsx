import styles from './DashboardLayout.module.css';
import React, {ReactElement} from "react";
import DashboardDrawerLayout from "../dashboardDrawer/dashboardDrawerLayout/DashboardDrawerLayout";
import DashboardToolBarLayout from "../dashboardToolBar/dashboardToolBarLayout/DashboardToolBarLayout";
import {DashboardPageWithLayout} from "../../../../pages/_app";
import {Box, Breadcrumbs, Card, Link, Typography} from "@mui/material";
import {useRouter} from "next/router";

export interface IDBToolBarLayout {
    children: React.ReactNode;
}

const DashboardLayout: DashboardPageWithLayout = () => {
  return (
      <div className={styles.container}>

          <DashboardDrawerLayout/>
          <DashboardToolBarLayout/>



      </div>
  )};

DashboardLayout.getLayout = function getLayout(page: ReactElement) {

    const splitPath = useRouter().pathname.split("/").slice(1);

    return (
        <div className={styles.container}>

        <DashboardDrawerLayout/>
        <DashboardToolBarLayout/>
            <Box sx={{ml:10, mt:5, width:"90%", height:"auto"}} >
                <div className={styles.cardHeader}>
                    <Typography variant="h2" className={styles.breadcrumbsHeader}> {splitPath[0] === "dashboard" ? "Home" : splitPath[splitPath.length - 1].charAt(0).toUpperCase() + splitPath[splitPath.length - 1].slice(1)} </Typography>

                    <Breadcrumbs aria-label="breadcrumb" className={styles.breadcrumbs}>

                        <Link underline="hover" color="inherit" href={"/dashboard"}>
                            Dashboard
                        </Link>

                        {splitPath.map((dir: string) =>
                            <Link underline="hover" color="inherit" href={dir === "home" || dir === "dashboard" ? "/dashboard" :"/dashboard/" + dir.toLowerCase()}>
                                {dir === "dashboard" ? "Home" : dir.charAt(0).toUpperCase() + dir.slice(1)}
                            </Link>
                        )}
                    </Breadcrumbs>
                </div>

            <Card color={"primary"} sx={{ width:"100%", height:"auto", boxShadow:5}}>
                {page}
            </Card>
            </Box>

        </div>
    )
}

export default DashboardLayout;