import styles from './DBDrawerOpenLayout.module.css';
import {
    Button, Drawer, Typography,
} from "@mui/material";
import React from "react";


export interface IDBDrawerOpenLayout {}

const DBDrawerOpenLayout: React.FC<IDBDrawerOpenLayout> = () => {


    return (
      <div className={styles.container}>

          <Typography sx={{m:10}}> Open </Typography>

      </div>

  )};

export default DBDrawerOpenLayout;