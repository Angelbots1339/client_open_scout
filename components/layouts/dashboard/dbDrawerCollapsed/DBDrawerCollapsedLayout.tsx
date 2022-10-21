import styles from './DBDrawerCollapsedLayout.module.css';
import {
    Button, Drawer, Typography,
} from "@mui/material";
import React from "react";


export interface IDBDrawerCollapsedLayout {}

const DBDrawerCollapsedLayout: React.FC<IDBDrawerCollapsedLayout> = () => {


    return (
      <div className={styles.container}>

          <Typography sx={{m:1}}> Collapsed </Typography>

      </div>

  )};

export default DBDrawerCollapsedLayout;