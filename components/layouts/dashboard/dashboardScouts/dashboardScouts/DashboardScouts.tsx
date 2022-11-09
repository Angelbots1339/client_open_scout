import styles from './DashboardScouts.module.css';
import React from "react";
import TableDraggable from "../../../../dataDisplay/tables/tableDraggable/TableDraggable";

export interface IDashboardScouts {
}

const DashboardScouts: React.FC<IDashboardScouts> = () => {

    const testData = {
            "Ethan B": {
                assignedTeam: "1678",
                timeScouted: "10",

            },
            "Dresden F": {
                assignedTeam: "7157",
                timeScouted: "0",

            }
            ,
            "Nathan B": {
                assignedTeam: "1619",
                timeScouted: "10",
            },
            "Joy D": {
                assignedTeam: "1410",
                timeScouted: "3",

            },
            "Kellan C": {
                assignedTeam: "1690",
                timeScouted: "10",

            },
        "Chris A": {
            assignedTeam: "1011",
            timeScouted: "6",
        }
        };


    return (
        <div className={styles.container}>

            <TableDraggable data={testData} headerName={"Scouts"}
                            keysToDisplay={["assignedTeam", "timeScouted"]}
                            displayNames={["Assigned Team", "Time Scouted"]}/>

        </div>
    )
};

export default DashboardScouts;