import {createElement} from "react";
import {IDashboardTabs} from "./DashboardTabs";
import {Typography} from "@mui/material";

const childProp = createElement(Typography);
childProp.props = {variant: "h1", children: "Test"}

const base: IDashboardTabs = {
    children: childProp,
    tabs: [{ name: "1", href: "", idx: 0 }, { name: "2", href: "", idx: 1 }],
};

export const defaultDashboardTabsProps = {
    base,
};