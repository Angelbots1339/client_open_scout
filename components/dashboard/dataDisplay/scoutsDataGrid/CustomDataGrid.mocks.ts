import {ICustomDataGrid} from "./CustomDataGrid";

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

const base: ICustomDataGrid = {
    data: testData,
    keysToDisplay: "any",
    displayNames: ["Name", "Assigned Team", "Time Scouted"],
    width: 300,
};

export const defaultTableDraggableProps = {
    base,
};