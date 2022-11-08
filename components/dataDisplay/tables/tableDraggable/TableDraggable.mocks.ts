import {ITableDraggable} from "./TableDraggable";

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

const base: ITableDraggable = {
    data: testData,
    nameKey: "name",
    headerName: "Scouts",
    keysToDisplay: "any",
    displayNames: ["Assigned Team", "Time Scouted"],
};

export const defaultTableDraggableProps = {
    base,
};