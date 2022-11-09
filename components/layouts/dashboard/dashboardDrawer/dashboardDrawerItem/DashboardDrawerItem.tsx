import styles from './DashboardDrawerItem.module.css';
import {
    Collapse,
    ListItemButton, ListItemIcon, ListItemText, Tooltip,
} from "@mui/material";
import React from "react";
import {ExpandLess, ExpandMore} from "@mui/icons-material";
import {PopupState} from "material-ui-popup-state/core";
import {bindToggle} from "material-ui-popup-state/hooks";


export interface IDashboardDrawerItem {
    text: string;
    icon: React.ReactElement;
    drawerOpen: PopupState;
    dropDownType: "child" | "parent" | "";

    href?: string;

    dropDownPopupState?: PopupState;
}

const DashboardDrawerItem: React.FC<IDashboardDrawerItem> = ({
                                                                 text,
                                                                 icon,
                                                                 drawerOpen,
                                                                 href,
                                                                 dropDownType,
                                                                 dropDownPopupState
                                                             }) => {


    return (
        <div className={styles.container}>
            <Tooltip title={text} placement="right">
                {dropDownType.toLowerCase() === "child" && dropDownPopupState ?
                    // If it is a Drop-Down Child
                    <Collapse in={dropDownPopupState.isOpen} timeout="auto" unmountOnExit
                              className={drawerOpen ? styles.collapsibleClosed : styles.collapsibleOpened}>
                        <ListItemButton {...(href && {href: href})}
                                        className={drawerOpen.isOpen ? styles.listButtonClosed : styles.listButtonOpened}>
                            <ListItemIcon>
                                <>{icon}</>
                            </ListItemIcon>
                            {drawerOpen.isOpen && <ListItemText primary={text} className={styles.listText}/>}
                        </ListItemButton>
                    </Collapse>


                    // If it is a Drop-Down Parent
                    : dropDownType.toLowerCase() === "parent" && dropDownPopupState ?
                        <ListItemButton {...bindToggle(dropDownPopupState)}
                                        className={drawerOpen.isOpen ? styles.listButtonClosed : styles.listButtonOpened}>
                            <ListItemIcon
                                className={dropDownPopupState.isOpen ? styles.parentIconOpened : styles.parentIconClosed}>
                                <>{icon}</>
                            </ListItemIcon>
                            {drawerOpen.isOpen && <ListItemText primary={text} className={styles.listText}/>}
                            {dropDownPopupState.isOpen ? <ExpandLess/> : <ExpandMore/>}
                        </ListItemButton>

                        :
                        // If it is not a Drop-Down at all
                        <ListItemButton  {...(href && {href: href})}
                                         className={drawerOpen.isOpen ? styles.listButtonClosed : styles.listButtonOpened}>
                            <ListItemIcon>
                                <>{icon}</>
                            </ListItemIcon>
                            {drawerOpen.isOpen && <ListItemText primary={text} className={styles.listText}/>}
                        </ListItemButton>

                }
            </Tooltip>
        </div>

    )
};

export default DashboardDrawerItem;