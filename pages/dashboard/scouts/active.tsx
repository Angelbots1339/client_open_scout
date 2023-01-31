import React, {ReactElement, useEffect, useState} from 'react';
import DashboardLayout from "../../../components/layouts/dashboard/dashboardLayout/DashboardLayout";
import {NavTab} from "../../../components/dashboard/dashboardTabs/DashboardTabs";
import {Box, Tabs} from "@mui/material";
import CustomDataGrid from "../../../components/dashboard/dataDisplay/scoutsDataGrid/CustomDataGrid";

const testDataArray = [
    {
        name: "active",
        assignedTeam: 0,
        timeScouted: 0,
        active: true,
    },
    {
        name: "inactive",
        assignedTeam: 0,
        timeScouted: 0,
        active: false,
    },
    {
        name: "Ethan B",
        assignedTeam: 1678,
        timeScouted: 10,
        active: true,
    },
    {
        name: "Dresden F",
        assignedTeam: 7157,
        timeScouted: 0,
        active: true,

    },
    {
        name: "Nathan B",
        assignedTeam: 1619,
        timeScouted: 10,
        active: false,
    },
    {
        name: "Joy D",
        assignedTeam: 1410,
        timeScouted: 3,
        active: false,

    },
    {
        name: "Kellan C",
        assignedTeam: 1690,
        timeScouted: 10,
        active: true,

    },
    {
        name: "Chris A",
        assignedTeam: 1011,
        timeScouted: 6,
        active: false,
    }
];

const DashboardActiveScouts = () => {

    const [currentIndex, setCurrentIndex] = useState(0);

    const [activeScouts, setActiveScouts] = useState(testDataArray.filter((scout) => {
        if (scout.active && scout.name != "active") return scout;
    }));

    const changeCurrentIndex = (index: number) => {
        setCurrentIndex(index);
    }

    useEffect(() => {
        setActiveScouts(testDataArray.filter((scout) => {
            if (scout.active && scout.name != "active") return scout;
        }))

    }, [])


    return (
        <div>
            <Box sx={{display: "flex", width: "100%", justifyContent: "center", mb: 5}}>
                <Tabs value={currentIndex} aria-label="Navigational Tabs">
                    <NavTab label="Active" href={"/dashboard/scouts/active"} changeIndex={changeCurrentIndex}
                            index={0}/>
                    <NavTab label="Inactive" href={"/dashboard/scouts/inactive"} changeIndex={changeCurrentIndex}
                            index={1}/>
                </Tabs>
            </Box>

            {/* Don't remove or the tables won't update on change */}
            {activeScouts.map(({name}) => {
                return <div key={name + " div"}></div>
            })}

            <Box sx={{width: "95%", ml: "2.5%"}}>
            <CustomDataGrid data={activeScouts} width={300}
                            keysToDisplay={["name", "assignedTeam", "timeScouted"]}
                            displayNames={["Name", "Assigned Team", "Time Scouted"]}
            />
            </Box>
        </div>
    )
}

DashboardActiveScouts.getLayout = function getLayout(page: ReactElement) {

    return (
        <div>
            <DashboardLayout>
                {page}
            </DashboardLayout>
        </div>
    )
}
export default DashboardActiveScouts;
