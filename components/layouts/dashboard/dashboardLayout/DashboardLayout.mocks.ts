import {createElement} from "react";
import {IDashboardLayout} from "./DashboardLayout";
import {Typography} from "@mui/material";

const childProp = createElement(Typography);
childProp.props = {variant: "h1", children: "Test"}

const base: IDashboardLayout = {
    children: childProp,
};

export const defaultDashboardLayoutProps = {
    base,
};