import {createElement} from "react";
import {IDashboardTabs} from "./DashboardTabs";
import {Typography} from "@mui/material";

const childProp = createElement(Typography);
childProp.props = {variant: "h1", children: "Test"}

const base: IDashboardTabs = {
    children: childProp,
    index: 0,
};

export const defaultDashboardTabsProps = {
    base,
};