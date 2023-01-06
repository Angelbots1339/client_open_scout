import {createElement} from "react";
import {IDashboardLoading} from "./DashboardLoading";
import {Typography} from "@mui/material";

const childProp = createElement(Typography);
childProp.props = {variant: "h1", children: "Test"}

const base: IDashboardLoading = {
    children: childProp,
    index: 0,
};

export const defaultDashboardLoadingProps = {
    base,
};