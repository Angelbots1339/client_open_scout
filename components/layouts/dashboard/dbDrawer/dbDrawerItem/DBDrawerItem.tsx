import styles from './DBDrawerItem.module.css';
import {
    Button, Drawer, iconClasses, ListItemButton, ListItemIcon, ListItemText, Typography,
} from "@mui/material";
import React from "react";


export interface IDBDrawerCollapsedLayout {
    text: string;
    icon: React.ReactElement;
    collapsed: boolean;
    href: string;
}

const DBDrawerItem: React.FC<IDBDrawerCollapsedLayout> = ({text, icon, collapsed, href}) => {


    return (
      <div className={styles.container}>

          <ListItemButton href={href} className={styles.listButton}>
              <ListItemIcon>
                  <>{icon}</>
              </ListItemIcon>
              {collapsed ? <ListItemText primary={text} className={styles.listText} /> : <></>}
          </ListItemButton>
      </div>

  )};

export default DBDrawerItem;