import styles from './DashboardLayout.module.css';
import React, {ReactElement, useState} from "react";
import DashboardDrawerLayout from "../dashboardDrawer/dashboardDrawerLayout/DashboardDrawerLayout";
import DashboardToolBar from "../dashboardToolBar/dashboardToolBar/DashboardToolBar";
import { PageWithLayout} from "../../../../pages/_app";
import {Box, Breadcrumbs, Card, Link, Typography} from "@mui/material";
import {useRouter} from "next/router";

export interface IDashboardLayout {
    children: React.ReactNode;
}

const DashboardLayout: PageWithLayout = () => {
  return (
      <div className={styles.container}>


      </div>
  )};

DashboardLayout.getLayout = function getLayout(page: ReactElement) {

    const [isDrawerOpen, setIsDrawerOpen] = useState(true);

    const setDrawerOpen = (bool: boolean) => {
        setIsDrawerOpen(bool);
        console.log(isDrawerOpen);
    }

    const splitPath = useRouter().pathname.split("/").slice(1);

    return (
        <div className={styles.container}>

        <DashboardDrawerLayout mainLayoutSetDrawerOpen={setDrawerOpen} />

            <div className={isDrawerOpen ? styles.movedByDrawerOpen : styles.movedByDrawerClosed}>
                <DashboardToolBar/>
            <Box sx={{ml:10, mr:10, mt:5, width:"auto", height:"auto"}} >
                <div className={styles.cardHeader}>
                    <Typography variant="h2" className={styles.breadcrumbsHeader}> {splitPath[splitPath.length - 1] === "dashboard" ? "Home" : splitPath[splitPath.length - 1].charAt(0).toUpperCase() + splitPath[splitPath.length - 1].slice(1)} </Typography>

                    <Breadcrumbs aria-label="breadcrumb" className={styles.breadcrumbs}>

                        {splitPath.length === 1 ? <Link underline="hover" color="inherit" href={"/dashboard"}>
                            Dashboard
                        </Link> : ""}

                        {splitPath.map((dir: string) =>
                            <Link underline="hover" color="inherit" href={dir === "home" || dir === "dashboard" ? "/dashboard" :"/dashboard/" + dir.toLowerCase()}>
                                {splitPath.length === 1 ? "Home" : dir.charAt(0).toUpperCase() + dir.slice(1)}
                            </Link>
                        )}
                    </Breadcrumbs>
                </div>

            <Card color={"primary"} sx={{ width:"100%", height:"auto", boxShadow:5}}>
                {page}
            </Card>
            </Box>
            </div>
        </div>
    )
}

export default DashboardLayout;