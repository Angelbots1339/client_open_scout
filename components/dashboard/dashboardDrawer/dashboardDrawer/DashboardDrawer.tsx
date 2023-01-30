import styles from './DashboardDrawer.module.css';
import {
    Drawer, IconButton, List,
} from "@mui/material";
import React, {useEffect} from "react";
import {bindMenu, bindToggle, usePopupState} from "material-ui-popup-state/hooks";
import {
    ShowChart,
    ChevronRight,
    ChevronLeft,
    Group,
    AccessTime,
    Assignment,
    Search,
    Star,
    ViewStream,
    AssignmentInd
} from "@mui/icons-material"
import DashboardDrawerItem from "../dashboardDrawerItem/DashboardDrawerItem";
import {CurrentTheme} from "../../../../pages/_app";

export interface IDashboardDrawerLayout {
    mainLayoutSetDrawerOpen: (bool: boolean) => void;
}


const DashboardDrawer: React.FC<IDashboardDrawerLayout> = ({mainLayoutSetDrawerOpen}) => {

    const DashboardDrawerPopupState = usePopupState({variant: 'popover', popupId: 'dashboardDrawer'})
    const DataDropDownPopupState = usePopupState({variant: 'popover', popupId: 'dashboardDrawer'})


    useEffect(() => {

        mainLayoutSetDrawerOpen(DashboardDrawerPopupState.isOpen);

    }, [mainLayoutSetDrawerOpen, DashboardDrawerPopupState])

    const DesktopDrawerInner = () => {
        return (
        <List className={DashboardDrawerPopupState.isOpen ? styles.drawerListOpen : styles.drawerListClosed}>

            <DashboardDrawerItem text={"Scouts"} icon={<AssignmentInd fontSize="medium"/>}
                                 drawerOpen={DashboardDrawerPopupState} href="/dashboard/scouts/active"
                                 dropDownType=""/>
            <DashboardDrawerItem text={"Schedule"} icon={<AccessTime fontSize="medium"/>}
                                 drawerOpen={DashboardDrawerPopupState} href="/dashboard/schedule"
                                 dropDownType=""/>
            <DashboardDrawerItem text={"Scouting"} icon={<Assignment fontSize="medium"/>}
                                 drawerOpen={DashboardDrawerPopupState} href="/dashboard/scouting"
                                 dropDownType=""/>

            <DashboardDrawerItem text={"Data"} icon={<ShowChart fontSize="medium"/>}
                                 drawerOpen={DashboardDrawerPopupState} dropDownType="parent"
                                 dropDownPopupState={DataDropDownPopupState}/>
            <DashboardDrawerItem text={"Team Lookup"} icon={<Search fontSize="medium"/>}
                                 drawerOpen={DashboardDrawerPopupState} href="/dashboard/data/search"
                                 dropDownType="child" dropDownPopupState={DataDropDownPopupState}/>
            <DashboardDrawerItem text={"Starred"} icon={<Star fontSize="medium"/>}
                                 drawerOpen={DashboardDrawerPopupState} href="/dashboard/data/starred"
                                 dropDownType="child" dropDownPopupState={DataDropDownPopupState}/>
            <DashboardDrawerItem text={"My Team"} icon={<Group fontSize="medium"/>}
                                 drawerOpen={DashboardDrawerPopupState} href="/dashboard/data/myTeam"
                                 dropDownType="child" dropDownPopupState={DataDropDownPopupState}/>
            <DashboardDrawerItem text={"Competitions"} icon={<ViewStream fontSize="medium"/>}
                                 drawerOpen={DashboardDrawerPopupState} href="/dashboard/data/competitions"
                                 dropDownType="child" dropDownPopupState={DataDropDownPopupState}/>

        </List>
        )}

    const handleMobileClick = () => {
        DashboardDrawerPopupState.open();
    }

    return (
        <div className={styles.container}>

            {/****** Desktop Drawer ******/}
            <Drawer sx={{display: { xs: 'none', sm: 'block' }}} PaperProps={{sx: {backgroundColor: CurrentTheme().palette.background.paper}}} variant="permanent" anchor="left" {...bindMenu(DashboardDrawerPopupState)}>
                <div className={styles.drawerDiv}>
                    {DashboardDrawerPopupState.isOpen ?
                        <div className={styles.drawerHeaderOpened}>
                            <IconButton className={styles.iconButton} {...bindToggle(DashboardDrawerPopupState)}>
                                <ChevronLeft style={{color: CurrentTheme().palette.text.secondary}} fontSize="medium"/>
                            </IconButton>
                        </div>
                        :
                        <div className={styles.drawerHeaderClosed}>
                            <IconButton className={styles.iconButton} {...bindToggle(DashboardDrawerPopupState)}>
                                <ChevronRight style={{color: CurrentTheme().palette.text.secondary}} fontSize="medium"/>
                            </IconButton>
                        </div>}
                </div>
                <DesktopDrawerInner/>
            </Drawer>

            {/****** Mobile Drawer ******/}

            <IconButton onClick={handleMobileClick}>
                <ChevronRight style={{color: CurrentTheme().palette.text.secondary}} fontSize="large"/>
            </IconButton>

            <Drawer sx={{display: { xs: 'block', sm: 'none' }}} PaperProps={{sx: {backgroundColor: CurrentTheme().palette.background.paper}}} variant="temporary" anchor="left" {...bindMenu(DashboardDrawerPopupState)}>
                <div className={styles.drawerDiv}>
                        <div className={styles.drawerHeaderClosed}>
                            <IconButton className={styles.iconButton} {...bindToggle(DashboardDrawerPopupState)}>
                                <ChevronLeft style={{color: CurrentTheme().palette.text.secondary}} fontSize="large"/>
                            </IconButton>
                        </div>
                </div>
                <DesktopDrawerInner/>
            </Drawer>


        </div>

    )
};

export default DashboardDrawer;