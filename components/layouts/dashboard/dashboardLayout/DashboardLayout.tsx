import styles from './DashboardLayout.module.css';
import React, {useEffect, useState} from "react";
import DashboardDrawerLayout from "../../../dashboard/dashboardDrawer/dashboardDrawerLayout/DashboardDrawerLayout";
import DashboardToolBar from "../../../dashboard/dashboardToolBar/dashboardToolBar/DashboardToolBar";
import {Box, Paper, Typography} from "@mui/material";
import {useRouter} from "next/router";
import NextBreadcrumbs from "../../../dashboard/breadcrumbs/NextBreadcrumbs";
import DashboardLoading from "../../../dashboard/dashboardLoading/DashboardLoading";
import {CurrentTheme} from "../../../../pages/_app";

export interface IDashboardLayout {
    children: React.ReactNode;
}

const DashboardLayout: React.FC<IDashboardLayout> = ({children}) => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(true);
    const [isLoading, setIsLoading] = useState(false);

    const router = useRouter()

    useEffect(() => {
        const handleRouteChangeStart = () => {
            setIsLoading(true)
        }
        const handleRouteChangeEnd = () => {
            setIsLoading(false)
        }
        router.events.on('routeChangeStart', handleRouteChangeStart)
        router.events.on('routeChangeComplete', handleRouteChangeEnd)

        // If the component is unmounted, unsubscribe
        // from the event with the `off` method:
        return () => {
            router.events.off('routeChangeStart', handleRouteChangeStart)
            router.events.off('routeChangeComplete', handleRouteChangeEnd)
        }
    }, [isLoading, router.events])

    const setDrawerOpen = (bool: boolean) => {
        setIsDrawerOpen(bool);
    }

    const splitPath = useRouter().pathname.split("/").slice(1).map((entry) => {
        return entry.startsWith("[") ? entry.substring(1, entry.length - 1) : entry;
    });

    return (
        <div className={styles.container}>

            {isLoading && <DashboardLoading/>}

            <DashboardDrawerLayout mainLayoutSetDrawerOpen={setDrawerOpen}/>
            <div className={isDrawerOpen ? styles.movedByDrawerOpen : styles.movedByDrawerClosed}>
                <DashboardToolBar/>
                <Box sx={{ml: 10, mr: 10, mt: 5, width: "auto", height: "auto"}}>
                    <div className={styles.cardHeader}>
                        <Typography variant="h2" className={styles.breadcrumbsHeader}>
                            {splitPath[splitPath.length - 1] === "dashboard" ? "Home" : (splitPath[splitPath.length - 1].charAt(0).toUpperCase() + splitPath[splitPath.length - 1].slice(1)).replace(/([A-Z])/g, ' $1').trim()}
                        </Typography>

                        <NextBreadcrumbs/>
                    </div>

                    <Paper sx={{width: "100%", height: "auto", boxShadow: 5, minWidth: 700, minHeight: 400, overflow:"scroll", backgroundColor: CurrentTheme().palette.background.paper}}>
                        {children}
                    </Paper>
                </Box>
            </div>
        </div>
    )
};


export default DashboardLayout;