import React, {ReactElement} from "react";
import DashboardLayout from "../../components/layouts/dashboard/dashboardLayout/DashboardLayout";
import {Typography} from "@mui/material";
import {PageWithLayout} from "../_app";


const DashboardSchedule: PageWithLayout = () => {

    return <></>;

}

DashboardSchedule.getLayout = function getLayout(page: ReactElement) {

    return (
        <DashboardLayout>
            <Typography variant={"h2"} sx={{m:10}}>Dashboard Home</Typography>
            {page}
        </DashboardLayout>
    )

}


export default DashboardSchedule;
