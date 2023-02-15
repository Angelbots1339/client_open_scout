import {IBottomNav} from "./BottomNav";
import {Leaderboard, PrecisionManufacturing, VideogameAsset} from "@mui/icons-material";

const tabs = [
    {name: "Auto", icon: PrecisionManufacturing, idx: 0},
    {name: "Teleop", icon: VideogameAsset, idx: 1},
    {name: "Endgame", icon: Leaderboard, idx: 2},
]

const setActive = (idx: number) => {
    console.log("Set active to " + idx);
}

const base: IBottomNav = {
    tabs: tabs,
    setActive: setActive
};

export const defaultDashboardBottomNavProps = {
    base,
};