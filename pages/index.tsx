import type { NextPage } from 'next'
import {Box, Button, Paper, Typography} from "@mui/material";
import axios, {AxiosResponse} from "axios";
import React, {useEffect, useState} from "react";





const Home: NextPage = () => {





  return (
    <>
        <Box sx={{ marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',}}>
            <Paper  sx={{p:5, backgroundColor: 'lightblue'}}>
                <Button href="/login" variant={"contained"} sx={{m:1}}>Login</Button>




            </Paper>

        </Box>
    </>
  )
}

export default Home
