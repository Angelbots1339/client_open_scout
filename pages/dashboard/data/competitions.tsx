import React, {ReactElement} from "react";
import DashboardLayout from "../../../components/layouts/dashboard/dashboardLayout/DashboardLayout";
import {PageWithLayout} from "../../_app";


const DashboardCompetitions: PageWithLayout = () => {

    return <></>;
}

DashboardCompetitions.getLayout = function getLayout(page: ReactElement) {

    return (
        <DashboardLayout>
            {page}
        </DashboardLayout>
    )
}

export default DashboardCompetitions;
