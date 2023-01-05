import {createElement} from "react";
import {IDBToolBarAccountItem} from "./DashboardToolBarAccountItem";
import {AccountCircle} from "@mui/icons-material";


const base: IDBToolBarAccountItem = {
    text: "Example",
    icon: createElement(AccountCircle),
    href: "/",
};

export const defaultDBToolBarAccountItemProps = {
    base,
};