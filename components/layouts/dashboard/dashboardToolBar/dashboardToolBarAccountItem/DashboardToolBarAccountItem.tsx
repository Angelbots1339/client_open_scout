import styles from './DashboardToolBarAccountItem.module.css';
import React from "react";
import {Link, ListItemText, MenuItem} from "@mui/material";

export interface IDBToolBarAccountItem {
    text: string;
    icon: React.ReactElement;
    href: string;
}

const DashboardToolBarAccountItem: React.FC<IDBToolBarAccountItem> = ({text, icon, href}) => {

    return (
      <div className={styles.container}>
          <Link color="inherit" underline="none" href={href}>
              <MenuItem className={styles.menuItem}>
                  {icon}
                  <ListItemText className={styles.text}>{text}</ListItemText>
              </MenuItem>
          </Link>
      </div>
  )};


export default DashboardToolBarAccountItem;