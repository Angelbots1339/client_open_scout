import { IDBDrawerItem } from './DBDrawerItem';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import {createElement} from "react";



const base: IDBDrawerItem = {
    text: "Drawer Item",
    icon: createElement(AccessTimeIcon),
    open: true,
    href: "",
};

export const DBDrawerCollapsedLayoutProps = {
    base,
};

