import React, {ReactElement, useEffect, useState} from 'react';
import DashboardLayout from "../../../../../components/layouts/dashboard/dashboardLayout/DashboardLayout";
import {NavTab} from "../../../../../components/dashboard/dashboardTabs/DashboardTabs";
import {useRouter} from "next/router";
import {Box, IconButton, Tabs} from "@mui/material";
import Link from "next/link";
import {Stack} from "@mui/system";
import {ArrowBack} from "@mui/icons-material";

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

interface ScoutInterface {
    name: string;
    assignedTeam: number;
    timeScouted: number;
    active: boolean;

}

const DashboardScoutsPage = () => {
    const router = useRouter();
    const {scout: scoutPath} = router.query;
    const [scout, setScout] = useState<ScoutInterface>({name: "", assignedTeam: 0, timeScouted: 0, active: false});

    const [currentIndex, setCurrentIndex] = useState(0);


    useEffect(() => {
        testDataArray.map((data, index) => {
            if (data.name === scoutPath) setScout(testDataArray[index]);
        })
        setCurrentIndex(2);
    }, [scoutPath, currentIndex])
    const changeCurrentIndex = (index: number) => {
        setCurrentIndex(index);
    }


    return (
        <div>
            <Stack direction={"row"}>
                <Link style={{alignSelf: "left"}}
                      href={scout.active ? "/dashboard/scouts/active" : "/dashboard/scouts/inactive"}>
                    <IconButton sx={{height:50, width:50, p:1}}>
                        <ArrowBack fontSize={"medium"}/>
                    </IconButton>
                </Link>
                <Box sx={{display: "flex", width: "100%", justifyContent: "center"}}>
                    <Tabs value={currentIndex} aria-label="Navigational Tabs">
                        <NavTab label="General" href={"/dashboard/scouts/list/" + (scout.name || " ") + "/general"}
                                changeIndex={changeCurrentIndex}
                                index={0}/>
                        <NavTab label="Matches Scouted"
                                href={"/dashboard/scouts/list/" + (scout.name || " ") + "/matches"}
                                changeIndex={changeCurrentIndex}
                                index={1}/>
                        <NavTab label="Pits Scouted"
                                href={"/dashboard/scouts/list/" + (scout.name || " ") + "/pitscout"}
                                changeIndex={changeCurrentIndex}
                                index={2}/>
                    </Tabs>
                </Box>
            </Stack>

            <p>{scout.name}</p>
            <p>{scout.assignedTeam}</p>
            <p>{scout.timeScouted}</p>
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
