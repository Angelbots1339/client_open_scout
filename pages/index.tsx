import type {NextPage} from 'next'
import {
    Box,
} from "@mui/material";
import React from "react";
import LandingAppBar from "../components/landingPage/landingAppBar/LandingAppBar";

const Home: NextPage = () => {

    return (
        <>
            <LandingAppBar {...{barColor: '#ffffff',}}/>

            <Box sx={{
                marginTop: 8,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
            }}>

            </Box>
        </>
    )
}

export default Home;
