import styles from './DBDrawerLayout.module.css';
import {
    Button, Drawer,
} from "@mui/material";
import React from "react";
import {bindMenu, bindToggle, usePopupState} from "material-ui-popup-state/hooks";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import DBDrawerCollapsedLayout from "../dbDrawerCollapsed/DBDrawerCollapsedLayout";
import DBDrawerOpenLayout from "../dbDrawerOpen/DBDrawerOpenLayout";

export interface IDBDrawerCollapsedLayout {}

const DBDrawerLayout: React.FC<IDBDrawerCollapsedLayout> = () => {

    const DashboardDrawerPopupState = usePopupState({ variant: 'popover', popupId: 'dashboardDrawer' })

    return (
      <div className={styles.container}>

          <Drawer variant="permanent"
                  anchor="left"
                  {...bindMenu(DashboardDrawerPopupState)}>

              {DashboardDrawerPopupState.isOpen ?
                  <> <Button
                      {...bindToggle(DashboardDrawerPopupState)}
                      variant={"text"}
                      sx={{m:1}}>
                      <ChevronLeftIcon fontSize="large"/>
                  </Button>
                      <DBDrawerOpenLayout/>
                  </>

                  : <> <Button
                      {...bindToggle(DashboardDrawerPopupState)}
                      variant={"text"}
                      sx={{m:1}}>
                      <ChevronRightIcon fontSize="large"/>
                  </Button>
                      <DBDrawerCollapsedLayout/>
                  </>
                  }


          </Drawer>
      </div>

  )};

export default DBDrawerLayout;