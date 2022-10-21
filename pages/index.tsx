import type {NextComponentType, NextPage} from 'next'
import {
    AppBar,
    Box,
    Button,
    Divider,
    Toolbar,
    Typography
} from "@mui/material";
import React from "react";
import LandingAppBar from "../components/layouts/landingPage/landingAppBar/LandingAppBar";
import {defaultLandingAppBarProps} from "../components/layouts/landingPage/landingAppBar/LandingAppBar.mocks";



const Home: NextPage = () => {

  return (
    <>
        {/*<HomeAppBar/>*/}
        <LandingAppBar {...{barColor: '#ffffff',}}/>

        <Box sx={{ marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'}}>

        </Box>
    </>
  )}


// const HomeAppBar: NextComponentType = () => {
//
//     return (
//         <AppBar position="sticky" sx={{display: "flex", flexDirection:"row", alignItems: "center", width: "100", backgroundColor:"white", boxShadow:1}}>
//
//             <Toolbar sx={{width:"90%", ml:"10%"}}>
//
//                 <AppBarNavigationButtons/>
//
//                 <Box sx={{width:"100%"}}></Box>
//                 <Button
//                     variant={"text"}
//                     sx={{m:1}}>
//                     Placeholder
//                 </Button>
//
//             </Toolbar>
//         </AppBar>
//     )}
//
// const AppBarNavigationButtons: NextComponentType = () => {
//
//     return(
//         <>
//
//
//     <Button href="/dashboard" variant={"text"} sx={{m:0, width:150}}>
//         <Typography sx={{}}>Dashboard</Typography>
//     </Button>
//     <Divider orientation="vertical" variant="middle" flexItem />
//     <Button href="/" variant={"text"} sx={{m:0, width:150}}>
//         <Typography sx={{}}>API Docs</Typography>
//     </Button>
//     <Divider orientation="vertical" variant="middle" flexItem />
//
//
//     </>)}


export default Home;
