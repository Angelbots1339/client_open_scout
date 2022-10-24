import styles from './DBDrawerItem.module.css';
import {
   ListItemButton, ListItemIcon, ListItemText,
} from "@mui/material";
import React from "react";


export interface IDBDrawerItem {
    text: string;
    icon: React.ReactElement;
    open: boolean;
    href: string;
}

const DBDrawerItem: React.FC<IDBDrawerItem> = ({text, icon, open, href}) => {


    return (
      <div className={styles.container}>

          <ListItemButton href={href} className={styles.listButton}>
              <ListItemIcon>
                  <>{icon}</>
              </ListItemIcon>
              {open ? <ListItemText primary={text} className={styles.listText} /> : <></>}
          </ListItemButton>
      </div>

  )};

export default DBDrawerItem;