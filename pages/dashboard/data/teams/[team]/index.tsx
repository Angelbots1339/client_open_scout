import React, {ReactElement} from 'react';
import DashboardLayout from "../../../../../components/layouts/dashboard/dashboardLayout/DashboardLayout";
import {BottomNavigation, BottomNavigationAction} from "@mui/material";
import {Leaderboard, PrecisionManufacturing, VideogameAsset} from "@mui/icons-material";



const DashboardScoutsPage = () => {

    const [currentPage, setCurrentPage] = React.useState(0);


    const DesktopNav = () => {
        return (<>
            <BottomNavigation
                showLabels
                value={currentPage}
                onChange={(event, newValue) => {
                    setCurrentPage(newValue);
                }}
            >
                <BottomNavigationAction key={"auto"} label={"Auto"} icon={<PrecisionManufacturing/>}/>
                <BottomNavigationAction key={"teleop"} label={"Teleop"} icon={<VideogameAsset/>}/>
                <BottomNavigationAction key={"endgame"} label={"Endgame"} icon={<Leaderboard/>}/>
            </BottomNavigation>
        </>)
    }



    return (
        <div>
            <DesktopNav/>
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
