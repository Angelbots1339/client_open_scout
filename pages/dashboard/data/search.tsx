import React, {ReactElement} from "react";
import DashboardLayout from "../../../components/layouts/dashboard/dashboardLayout/DashboardLayout";
import {PageWithLayout} from "../../_app";
import {Box} from "@mui/material";



const DashboardSearch: PageWithLayout = () => {

    return (<>

        <Box>
            {/****** Fill this in when test data is made ******/}
            {/*<CustomDataGrid data={activeScouts} width={300}*/}
            {/*                keysToDisplay={["name", "assignedTeam", "timeScouted"]}*/}
            {/*                displayNames={["Name", "Assigned Team", "Time Scouted"]}*/}
            {/*/>*/}
        </Box>

    </>);
}

DashboardSearch.getLayout = function getLayout(page: ReactElement) {

    return (
        <DashboardLayout>
            {page}
        </DashboardLayout>
    )
}

export default DashboardSearch;
