import styles from './DashboardDrawerLayout.module.css';
import {
    Drawer, IconButton, List,
} from "@mui/material";
import React, {useEffect} from "react";
import {bindMenu, bindToggle, usePopupState} from "material-ui-popup-state/hooks";
import {ShowChart, ChevronRight, ChevronLeft, Group, AccessTime, Assignment, Search, Star, ViewStream, AssignmentInd} from "@mui/icons-material"
import DashboardDrawerItem from "../dashboardDrawerItem/DashboardDrawerItem";

export interface IDashboardDrawerLayout {
    mainLayoutSetDrawerOpen: (bool: boolean) => void;
}


const DashboardDrawerLayout: React.FC<IDashboardDrawerLayout> = ({mainLayoutSetDrawerOpen}) => {

    const DashboardDrawerPopupState = usePopupState({ variant: 'popover', popupId: 'dashboardDrawer' })
    const DataDropDownPopupState = usePopupState({ variant: 'popover', popupId: 'dashboardDrawer' })

    useEffect(() => {

        mainLayoutSetDrawerOpen(DashboardDrawerPopupState.isOpen);

    }, [mainLayoutSetDrawerOpen, DashboardDrawerPopupState])

    return (
      <div className={styles.container}>

          <Drawer variant="permanent" anchor="left" {...bindMenu(DashboardDrawerPopupState)}>

              <div className={styles.drawerDiv}>

              {DashboardDrawerPopupState.isOpen ?
                  <div className={styles.drawerHeaderOpened}>
                      <IconButton className={styles.iconButton} {...bindToggle(DashboardDrawerPopupState)}>
                      <ChevronLeft fontSize="medium"/>
                  </IconButton>
                  </div>
                  :
                  <div className={styles.drawerHeaderClosed}>
                  <IconButton className={styles.iconButton} {...bindToggle(DashboardDrawerPopupState)}>
                      <ChevronRight fontSize="medium"/>
                  </IconButton>
                  </div>}
              </div>

              <List className={DashboardDrawerPopupState.isOpen ? styles.drawerListOpen : styles.drawerListClosed}>

                  <DashboardDrawerItem text={"Scouts"} icon={<AssignmentInd fontSize="medium" />} drawerOpen={DashboardDrawerPopupState} href="/dashboard/scouts" dropDownType=""/>
                  <DashboardDrawerItem text={"Schedule"} icon={<AccessTime fontSize="medium" />} drawerOpen={DashboardDrawerPopupState} href="/dashboard/schedule" dropDownType=""/>
                  <DashboardDrawerItem text={"Scouting"} icon={<Assignment fontSize="medium" />} drawerOpen={DashboardDrawerPopupState} href="/dashboard/scouting" dropDownType=""/>

                  <DashboardDrawerItem text={"Data"} icon={<ShowChart fontSize="medium" />} drawerOpen={DashboardDrawerPopupState} dropDownType="parent" dropDownPopupState={DataDropDownPopupState}/>
                    <DashboardDrawerItem text={"Team Lookup"} icon={<Search fontSize="medium" />} drawerOpen={DashboardDrawerPopupState} href="/dashboard/data/search" dropDownType="child" dropDownPopupState={DataDropDownPopupState}/>
                    <DashboardDrawerItem text={"Starred"} icon={<Star fontSize="medium" />} drawerOpen={DashboardDrawerPopupState} href="/dashboard/data/starred" dropDownType="child" dropDownPopupState={DataDropDownPopupState}/>
                    <DashboardDrawerItem text={"My Team"} icon={<Group fontSize="medium" />} drawerOpen={DashboardDrawerPopupState} href="/dashboard/data/myTeam" dropDownType="child" dropDownPopupState={DataDropDownPopupState}/>
                    <DashboardDrawerItem text={"Competitions"} icon={<ViewStream fontSize="medium" />} drawerOpen={DashboardDrawerPopupState} href="/dashboard/data/competitions" dropDownType="child" dropDownPopupState={DataDropDownPopupState}/>

              </List>

          </Drawer>
      </div>

  )};

export default DashboardDrawerLayout;