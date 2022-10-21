import styles from './DBDrawerCollapsedLayout.module.css';
import {
  AppBar,
  Box,
  Button,
  Divider,
  Toolbar,
  Typography
} from "@mui/material";
import React from "react";

export interface IDBDrawerCollapsedLayout {}

const DBDrawerCollapsedLayout: React.FC<IDBDrawerCollapsedLayout> = () => {
  return (
      <div className={styles.container}>
        Hello World
      </div>

  )};

export default DBDrawerCollapsedLayout;