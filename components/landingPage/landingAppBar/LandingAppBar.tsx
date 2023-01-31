import styles from './LandingAppBar.module.css';
import {
    AppBar,
    Divider,
    Button,
    Toolbar,
} from "@mui/material";
import React from "react";
import LandingAppBarButton from "../landingAppBarButton/LandingAppBarButton";
import Image from "next/image";
import WideLogo from "/public/images/logos/LogoIpsum.svg"
import {Stack} from "@mui/system";

export interface ILandingAppBar {
}

const LandingAppBar: React.FC<ILandingAppBar> = () => {
    return (
        <div className={styles.container}>

            <AppBar position="sticky" className={styles.appBar} sx={{boxShadow: 1}}>

                <Toolbar sx={{width: "90%", ml: "10%"}}>
                    <Stack spacing={2} direction={"row"} alignItems={"center"}
                           divider={<Divider orientation={"vertical"} flexItem/>}>

                        <Button href={"/"} disableRipple={true} variant={"text"}>
                            <Image src={WideLogo} alt="OpenScout Logo" width="150" height="50"/>
                        </Button>
                        <LandingAppBarButton text={"Dashboard"} href={"/dashboard"}/>
                        <LandingAppBarButton text={"API Docs"} href={"/"}/>
                        <LandingAppBarButton text={"About Us"} href={"/about"}/>
                    </Stack>
                </Toolbar>
            </AppBar>

        </div>

    )
};

export default LandingAppBar;