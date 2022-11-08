import styles from './DashboardScouts.module.css';
import React from "react";
import TableDraggable from "../../../../dataDisplay/tables/tableDraggable/TableDraggable";

export interface IDashboardScouts {}

const DashboardScouts: React.FC<IDashboardScouts> = () => {

    const testData = [
        {
            name: "Ethan B",
            assignedTeam: "1678",
            timeScouted: "7",

        },
        {
            name: "Dresden F",
            assignedTeam: "7157",
            timeScouted: "0",

        },
        {
            name: "Nathan B",
            assignedTeam: "1619",
            timeScouted: "10",
        },
        {
            name: "Joy D",
            assignedTeam: "1410",
            timeScouted: "3",

        },
        {
            name: "Kellan C",
            assignedTeam: "1690",
            timeScouted: "10",

        }
    ];


    return (
      <div className={styles.container}>

        <TableDraggable data={testData} nameKey={"name"} headerName={"Scouts"} keysToDisplay={["assignedTeam", "timeScouted"]} displayNames={["Assigned Team", "Time Scouted"]}/>

      </div>
  )};

export default DashboardScouts;