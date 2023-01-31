import React, {ReactElement, useEffect, useState} from 'react';
import DashboardLayout from "../../../../../components/layouts/dashboard/dashboardLayout/DashboardLayout";
import DashboardTabs from "../../../../../components/dashboard/dashboardTabs/DashboardTabs";
import {useRouter} from "next/router";

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

    useEffect(() => {
        testDataArray.map((data, index) => {
            if (data.name === scoutPath) setScout(testDataArray[index]);
        })
    }, [scoutPath])



    return (
        <div>
            <DashboardTabs tabs={[
                {name: "General", href: "/dashboard/scouts/list/" + (scout.name || " ") + "/general", idx: 0},
                {name: "Matches Scouted", href: "/dashboard/scouts/list/" + (scout.name || " ") + "/matches", idx: 1},
                {name: "Pits Scouted", href: "/dashboard/scouts/list/" + (scout.name || " ") + "/pitscout", idx: 2}

            ]} backButtonHref={scout.active ? "/dashboard/scouts/active" : "/dashboard/scouts/inactive"}>
                <p>{scout.name}</p>
                <p>{scout.assignedTeam}</p>
                <p>{scout.timeScouted}</p>
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
