import React, {ReactElement} from 'react';
import DashboardLayout from "../../../../../components/layouts/dashboard/dashboardLayout/DashboardLayout";
import DashboardTabs from "../../../../../components/dashboard/dashboardTabs/DashboardTabs";



const DashboardScoutsPage = () => {

    const teamNumber: number = 0;

    return (
        <div>
            <DashboardTabs tabs={[
                {name: "General", href: "/dashboard/data/teams/" + (teamNumber || " ") + "/general", idx: 0},
                {name: "Matches", href: "/dashboard/data/teams/" + (teamNumber || " ") + "/matches", idx: 1},
                {name: "Stats", href: "/dashboard/data/teams/" + (teamNumber || " ") + "/stats", idx: 2},
            ]} backButtonHref={"/dashboard/data/search"}>

                <p>Team Matches</p>

            </DashboardTabs>
        </div>
    )
}

DashboardScoutsPage.getLayout = function getLayout(page: ReactElement) {

    return (
        <div>
            <DashboardLayout>
                {page}
            </DashboardLayout>
        </div>
    )
}
export default DashboardScoutsPage;
