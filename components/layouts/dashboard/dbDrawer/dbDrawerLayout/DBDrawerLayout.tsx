import styles from './DBDrawerLayout.module.css';
import {
    Drawer, IconButton, List, ListItemButton, ListItemIcon, ListItemText,
} from "@mui/material";
import React from "react";
import {bindMenu, bindToggle, usePopupState} from "material-ui-popup-state/hooks";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import GroupIcon from '@mui/icons-material/Group';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import AssignmentIcon from '@mui/icons-material/Assignment';
import DBDrawerItem from "../dbDrawerItem/DBDrawerItem";

export interface IDBDrawerCollapsedLayout {}

const DBDrawerLayout: React.FC<IDBDrawerCollapsedLayout> = () => {

    const DashboardDrawerPopupState = usePopupState({ variant: 'popover', popupId: 'dashboardDrawer' })

    return (
      <div className={styles.container}>

          <Drawer variant="permanent"
                  anchor="left"
                  {...bindMenu(DashboardDrawerPopupState)}>

              <div style={{
                      alignItems:"right",
                      alignContent:"right",
                        display:"flex",
                  marginLeft:"auto"

              }}>

              {DashboardDrawerPopupState.isOpen ?
                  <IconButton
                      {...bindToggle(DashboardDrawerPopupState)}
                      sx={{m:1, width:40}}>
                      <ChevronLeftIcon fontSize="medium"/>
                  </IconButton>
                  :<IconButton
                      {...bindToggle(DashboardDrawerPopupState)}
                      sx={{m:1, width:40}}>
                      <ChevronRightIcon fontSize="medium"/>
                  </IconButton>}
              </div>

            <List>

                <DBDrawerItem text={"Scouts"} icon={<GroupIcon fontSize="medium" />} collapsed={DashboardDrawerPopupState.isOpen} href="/dashboard/scouts"/>
                <DBDrawerItem text={"Schedule"} icon={<AccessTimeIcon fontSize="medium" />} collapsed={DashboardDrawerPopupState.isOpen} href="/dashboard/schedule"/>
                <DBDrawerItem text={"Scouting"} icon={<AssignmentIcon fontSize="medium" />} collapsed={DashboardDrawerPopupState.isOpen} href="/dashboard/scouting"/>

            </List>



          </Drawer>
      </div>

  )};

export default DBDrawerLayout;