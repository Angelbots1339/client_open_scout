import React, {ReactElement} from "react";
import DashboardLayout from "../../../components/layouts/dashboard/dashboardLayout/DashboardLayout";
import {PageWithLayout} from "../../_app";


const DashboardMyTeam: PageWithLayout = () => {

    return <></>;
}

DashboardMyTeam.getLayout = function getLayout(page: ReactElement) {

    return (
        <DashboardLayout>
            {page}
        </DashboardLayout>
    )
}

export default DashboardMyTeam;
