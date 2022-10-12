import React, {useEffect, useState} from 'react';
import axios, {AxiosResponse} from "axios";
import {Box, Button, Paper, Typography} from "@mui/material";
import {useRouter} from "next/router";

const Scouts = () => {

    const router = useRouter()
    const [userObject, setUserObject] = useState<any>()
    useEffect(() => {
        axios.get("http://localhost:5000/auth/getuser", { withCredentials: true }).then((res: AxiosResponse) => {
            if (res.data) {
                setUserObject(res.data);
            }
            else {
                router.push("http://localhost:3000/")
            }
        })
    }, [])
    return (
        <Box sx={{ marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',}}>
            <Paper  sx={{p:5, backgroundColor: 'lightblue'}}>
                <Button variant={"contained"} sx={{m:1}} onClick={() => {
                    axios.post("http://localhost:5000/auth/logout", {}, {withCredentials: true})
                    router.push("http://localhost:3000/")
                }}>Logout</Button>
                {`Hello ${userObject? userObject.firstName + " " + userObject.lastName: ""}`}

            </Paper>
        </Box>


    );
};

export default Scouts;