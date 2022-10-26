import { IDashboardDrawerItem } from './DashboardDrawerItem';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import AssignmentIcon from '@mui/icons-material/Assignment';
import {createElement} from "react";



const base: IDashboardDrawerItem = {
    text: "Drawer Item",
    icon: createElement(AccessTimeIcon),
    drawerOpen: true,
    href: "",
    parentText: "Parent Text",
    parentIcon: createElement(AssignmentIcon),
};

export const defaultDashboardDrawerItemProps = {
    base,
};

