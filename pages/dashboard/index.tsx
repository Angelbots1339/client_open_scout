import type {NextComponentType, NextPage} from 'next'
import {
    Avatar,
    Box,
    Button,
    Menu,
    MenuItem,
    Toolbar,
} from "@mui/material";
import React from "react";

import {usePopupState, bindTrigger, bindMenu} from 'material-ui-popup-state/hooks'
import DBDrawerLayout from "../../components/layouts/dashboard/dbDrawer/dbDrawerLayout/DBDrawerLayout";


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

    return (
        <>
            <DBDrawerLayout/>

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

export default DashboardHome
