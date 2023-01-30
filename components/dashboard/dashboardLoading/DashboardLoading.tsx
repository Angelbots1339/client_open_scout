import styles from './DashboardLoading.module.css';
import React from "react";
import {CircularProgress, Paper} from "@mui/material";

export interface IDashboardLoading {
}

const DashboardLoading: React.FC<IDashboardLoading> = () => {

    return (
        <div className={styles.container}>
            <Paper sx={{width:50, height:50}}> {/* Won't render Paper for some reason*/}
                <CircularProgress variant="indeterminate" color={"primary"} className={styles.loader}/>
            </Paper>
        </div>
    )
};


export default DashboardLoading;