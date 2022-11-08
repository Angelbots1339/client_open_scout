import styles from './DashboardToolBar.module.css';
import React from "react";
import {Avatar, Box, Button, Menu, Toolbar, Typography} from "@mui/material";
import {bindMenu, bindTrigger, usePopupState} from "material-ui-popup-state/hooks";
import DashboardToolBarAccountItem from "../dashboardToolBarAccountItem/DashboardToolBarAccountItem";
import {AccountCircle, Logout} from "@mui/icons-material";

export interface IDBToolBar {}

const DashboardToolBar: React.FC<IDBToolBar> = () => {

    const AccountMenuPopupState = usePopupState({ variant: 'popover', popupId: 'accountMenu' })
    
    return (
      <div className={styles.container}>
          <Toolbar className={styles.toolBar} >

              <Typography variant="h4">Dashboard</Typography>
              <Box sx={{width:"100%"}}></Box>
              <Button
                  {...bindTrigger(AccountMenuPopupState)}
                  variant={"text"}
                  sx={{m:1}}
                  disableRipple={true}
              >
                  <Avatar/>
              </Button>
              <Menu className={styles.menu} {...bindMenu(AccountMenuPopupState)}>
                  <DashboardToolBarAccountItem text="My Account" icon={<AccountCircle fontSize="medium" />} href="/myaccount"/>
                  <DashboardToolBarAccountItem text="Logout" icon={<Logout fontSize="medium" />} href="/logout"/>
              </Menu>

          </Toolbar>
      </div>
  )};

export default DashboardToolBar;