import type {NextComponentType, NextPage} from 'next'
import {
    AppBar,
    Avatar,
    Box,
    Button,
    ButtonGroup,
    Divider, Drawer,
    Menu,
    MenuItem,
    Paper,
    Toolbar,
    Typography
} from "@mui/material";
import axios, {AxiosResponse} from "axios";
import React, {Component, useEffect, useState} from "react";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

import {usePopupState, bindTrigger, bindMenu, bindToggle,} from 'material-ui-popup-state/hooks'


const DashboardHome: NextPage = () => {

    return (
        <>
            <DashboardAppBar/>

            <Box sx={{ marginTop: 8,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'}}>

            </Box>
        </>
    )}


const DashboardAppBar: NextComponentType = () => {

    const AccountMenuPopupState = usePopupState({ variant: 'popover', popupId: 'accountMenu' })
    const DashboardDrawerPopupState = usePopupState({ variant: 'popover', popupId: 'dashboardDrawer' })


    return (
        <>

            <Drawer variant="permanent"
                    anchor="left"
                    {...bindMenu(DashboardDrawerPopupState)}>



                {DashboardDrawerPopupState.isOpen ?
                    <> <Button
                        {...bindToggle(DashboardDrawerPopupState)}
                        variant={"text"}
                        sx={{m:1}}>
                        <ChevronLeftIcon fontSize="large"/>
                    </Button>
                    <DashboardDrawerFull/> </>

                    : <> <Button
                        {...bindToggle(DashboardDrawerPopupState)}
                        variant={"text"}
                        sx={{m:1}}>
                        <ChevronRightIcon fontSize="large"/>
                    </Button>
                    <DashboardDrawerCollapsed/></>
                }
            </Drawer>


            <Toolbar sx={{width:"90%", ml:"10%"}}>



                <Box sx={{width:"100%"}}></Box>
                <Button
                    {...bindTrigger(AccountMenuPopupState)}
                    variant={"text"}
                    sx={{m:1}}>
                    <Avatar/>
                </Button>
                <Menu {...bindMenu(AccountMenuPopupState)}>

                    <MenuItem onClick={AccountMenuPopupState.close}>Cake</MenuItem>
                    <MenuItem onClick={AccountMenuPopupState.close}>Death</MenuItem>
                </Menu>

            </Toolbar>


        </>
    )}


const DashboardDrawerFull: NextComponentType = () => {

    return(
        <>
            <Typography sx={{m:15}}> Drawer </Typography>
        </>
    )}

const DashboardDrawerCollapsed: NextComponentType = () => {

    return(
        <>
            <Typography sx={{m:1}}> Collapsed </Typography>
        </>
    )}

export default DashboardHome
