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

export interface ILandingAppBar {}

const LandingAppBar: React.FC<ILandingAppBar> = () => {
    return (
        <div className={styles.container}>

            <AppBar position="sticky" className={styles.appBar} sx={{ boxShadow:1, backgroundColor:"#FFFFFF"}}>

                <Toolbar sx={{width:"90%", ml:"10%"}}>

                    <Button  className={styles.button} href="/dashboard" variant={"text"}>
                        <Typography>Dashboard</Typography>
                    </Button>
                    <Divider orientation="vertical" variant="middle" flexItem />
                    <Button className={styles.button} href="/" variant={"text"}>
                        <Typography>API Docs</Typography>
                    </Button>
                    <Divider orientation="vertical" variant="middle" flexItem />
                    <Button className={styles.button} href="/" variant={"text"}>
                        <Typography>About Us</Typography>
                    </Button>

                    <Box sx={{width:"100%"}}></Box>
                    <Button className={styles.button} variant={"text"}>
                        Placeholder
                    </Button>


                </Toolbar>
            </AppBar>

        </div>

    )};

export default LandingAppBar;