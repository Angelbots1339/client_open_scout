import {ITableDraggable} from "./TableDraggable";

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

const base: ITableDraggable = {
    data: testData,
    headerName: "Scouts",
    keysToDisplay: "any",
    displayNames: ["Assigned Team", "Time Scouted"],
    url: "/"
};

export const defaultTableDraggableProps = {
    base,
};