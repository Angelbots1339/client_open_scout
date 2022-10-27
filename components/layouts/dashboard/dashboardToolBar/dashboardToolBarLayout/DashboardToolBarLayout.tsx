import styles from './DashboardToolBarLayout.module.css';
import React from "react";
import {Avatar, Box, Button, Menu, MenuItem, Toolbar, Typography} from "@mui/material";
import {bindMenu, bindTrigger, usePopupState} from "material-ui-popup-state/hooks";

export interface IDBToolBarLayout {}

const DashboardToolBarLayout: React.FC<IDBToolBarLayout> = () => {

    const AccountMenuPopupState = usePopupState({ variant: 'popover', popupId: 'accountMenu' })
    
    return (
      <div className={styles.container}>
          <Toolbar className={styles.toolBar} >

              <Typography variant="h4">Dashboard</Typography>
              <Box sx={{width:"100%"}}></Box>
              <Button
                  {...bindTrigger(AccountMenuPopupState)}
                  variant={"text"}
                  sx={{m:1}}>
                  <Avatar/>
              </Button>
              <Menu className={styles.menu} {...bindMenu(AccountMenuPopupState)}>
                  <MenuItem onClick={AccountMenuPopupState.close}>Cake</MenuItem>
                  <MenuItem onClick={AccountMenuPopupState.close}>Death</MenuItem>
              </Menu>

          </Toolbar>
      </div>
  )};

export default DashboardToolBarLayout;