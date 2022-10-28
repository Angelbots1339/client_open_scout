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
import LandingAppBarButton from "../landingAppBarButton/LandingAppBarButton";

export interface ILandingAppBar {}

const LandingAppBar: React.FC<ILandingAppBar> = () => {
    return (
        <div className={styles.container}>

            <AppBar position="sticky" className={styles.appBar} sx={{ boxShadow:1, backgroundColor:"#FFFFFF"}}>

                <Toolbar sx={{width:"90%", ml:"10%"}}>


                    <LandingAppBarButton text={"Dashboard"} href={"/dashboard"}/>

                    <Divider orientation="vertical" variant="middle" flexItem />

                    <LandingAppBarButton text={"API Docs"} href={"/"}/>

                    <Divider orientation="vertical" variant="middle" flexItem />
                    <LandingAppBarButton text={"About Us"} href={"/about"}/>


                    <Box sx={{width:"100%"}}></Box>
                    <Button className={styles.button} variant={"text"}>
                        Placeholder
                    </Button>


                </Toolbar>
            </AppBar>

        </div>

    )};

export default LandingAppBar;