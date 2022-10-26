import React from "react";
import type { NextPage} from 'next'
import DashboardLayout from "../../components/layouts/dashboard/dashboardLayout/DashboardLayout";
import {Typography} from "@mui/material";


const DashboardScouting: NextPage = () => {

    const getLayout = DashboardLayout.getLayout ?? ((page) => page);

    return getLayout(
        <>
            <Typography variant={"h2"} sx={{m:10}}>Scouting</Typography>
        </>
    ,["Dashboard", "Scouting"]);
    }


export default DashboardScouting;
