import styles from './LandingAppBar.module.css';
import {
  AppBar,
  Box,
  Button,
  Divider,
  Toolbar,
  Typography
} from "@mui/material";
import React from "react";

export interface IDashboardLayout {}

const DashboardLayout: React.FC<IDashboardLayout> = () => {
  return (
      <div className={styles.container}>
        Hello World
      </div>

  )};

export default DashboardLayout;