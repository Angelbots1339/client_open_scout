import styles from './DashboardLoading.module.css';
import React from "react";
import {CircularProgress} from "@mui/material";

export interface IDashboardLoading {
}

const DashboardLoading: React.FC<IDashboardLoading> = () => {

    return (
        <div className={styles.container}>
            <CircularProgress variant="indeterminate" color={"primary"} className={styles.loader}/>
        </div>
    )
};




export default DashboardLoading;