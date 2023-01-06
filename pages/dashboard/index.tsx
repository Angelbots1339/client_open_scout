import React, {ReactElement} from "react";
import DashboardLayout from "../../components/layouts/dashboard/dashboardLayout/DashboardLayout";
import {PageWithLayout} from "../_app";


const DashboardHome: PageWithLayout = () => {

    return <></>;
}

DashboardHome.getLayout = function getLayout(page: ReactElement) {

    return (
        <DashboardLayout>
            {page}
        </DashboardLayout>
    )
}

export default DashboardHome;
