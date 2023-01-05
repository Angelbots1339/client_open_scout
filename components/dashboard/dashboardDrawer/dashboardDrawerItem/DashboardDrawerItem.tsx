import styles from './DashboardDrawerItem.module.css';
import {
    Collapse,
    ListItemButton, ListItemIcon, ListItemText, Tooltip,
} from "@mui/material";
import React from "react";
import {ExpandLess, ExpandMore} from "@mui/icons-material";
import {PopupState} from "material-ui-popup-state/core";
import {bindToggle} from "material-ui-popup-state/hooks";
import Link from "next/link";
import {CurrentTheme} from "../../../../pages/_app";


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
                        <Link href={href ? href : ""} passHref>
                            <ListItemButton
                                className={drawerOpen.isOpen ? styles.listButtonClosed : styles.listButtonOpened}>
                                <ListItemIcon
                                    style={{color: CurrentTheme().palette.text.secondary}}>
                                    <>{icon}</>
                                </ListItemIcon>
                                {drawerOpen.isOpen && <ListItemText style={{color: CurrentTheme().palette.text.secondary}} primary={text} className={styles.listText}/>}
                            </ListItemButton>
                        </Link>
                    </Collapse>

                    // If it is a Drop-Down Parent
                    : dropDownType.toLowerCase() === "parent" && dropDownPopupState ?
                        <ListItemButton {...bindToggle(dropDownPopupState)}
                                        className={drawerOpen.isOpen ? styles.listButtonClosed : styles.listButtonOpened}>
                            <ListItemIcon
                                style={{color: CurrentTheme().palette.primary.main}}
                                className={dropDownPopupState.isOpen ? styles.parentIconOpened : styles.parentIconClosed}>
                                <>{icon}</>
                            </ListItemIcon>
                            {drawerOpen.isOpen && <ListItemText style={{color: CurrentTheme().palette.text.secondary}} primary={text} className={styles.listText}/>}
                            {dropDownPopupState.isOpen ? <ExpandLess style={{color: CurrentTheme().palette.text.secondary}}/> : <ExpandMore style={{color: CurrentTheme().palette.text.secondary}}/>}
                        </ListItemButton>

                        :
                        // If it is not a Drop-Down at all
                        <div> {/* div needed for tooltips to work correctly*/}
                            <Link href={href ? href : ""} passHref>
                                <ListItemButton
                                    className={drawerOpen.isOpen ? styles.listButtonClosed : styles.listButtonOpened}>
                                    <ListItemIcon
                                        style={{color: CurrentTheme().palette.text.secondary}}>
                                        <>{icon}</>
                                    </ListItemIcon>
                                    {drawerOpen.isOpen && <ListItemText style={{color: CurrentTheme().palette.text.secondary}} primary={text} className={styles.listText}/>}
                                </ListItemButton>
                            </Link>
                        </div>

                }
            </Tooltip>
        </div>

    )
};

export default DashboardDrawerItem;