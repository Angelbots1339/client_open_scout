import React, {ReactElement, SyntheticEvent, useEffect, useState} from "react";
import DashboardLayout from "../../../components/layouts/dashboard/dashboardLayout/DashboardLayout";
import {PageWithLayout} from "../../_app";
import {Autocomplete, Box, Card, Grid, TextField} from "@mui/material";

const DashboardSuperScout: PageWithLayout = () => {

    const testTeams = [
        {teamNumber: 1339, teamName: "Angelbotics"},
        {teamNumber: 1678, teamName: "Citrus Circuits"},
        {teamNumber: 1619, teamName: "Up A Creek"},
    ]

    const [selectedTeam, setSelectedTeam] = useState(testTeams[0]);

    useEffect(() => {

    }, [selectedTeam])

    const convertToDisplayName = (team: any) => {
        return team.teamNumber + " " + team.teamName;
    }

    const handleYearChange = (event: SyntheticEvent<Element, Event>, newValue: string | null) => {
        // @ts-ignore
        let temp = testTeams.find((team) => convertToDisplayName(team) === newValue);
        setSelectedTeam(temp != undefined ? temp : testTeams[0]);
    }

    return (<>
        <Grid container spacing={2} sx={{mt: 0, width: "98%", ml: "1%"}}>

            {/*<Grid item xs={12} sx={{display: {xs: 'block', sm: 'block'}}}>*/}

            {/*    <Autocomplete*/}
            {/*        disablePortal*/}
            {/*        onChange={handleYearChange}*/}
            {/*        defaultValue={convertToDisplayName(testTeams[0])}*/}
            {/*        id="YearSelect"*/}
            {/*        options={testTeams.map((team) => convertToDisplayName(team))}*/}
            {/*        sx={{width: 225}}*/}
            {/*        renderInput={(params) => <TextField {...params} label="Team"/>}*/}
            {/*    />*/}


            {/*</Grid>*/}

            {/*<Grid item xs={12} sx={{display: {xs: 'block', sm: 'block'}}}>*/}

            {/*    <Typography variant="h4">{convertToDisplayName(selectedTeam)}</Typography>*/}

            {/*</Grid>*/}
            <Grid item xs={12} sm={12} md={10} lg={6} xl={6}>
                <Grid direction={"row-reverse"} container spacing={2} sx={{width: "100%"}} columns={12}>
                    <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                        <Box sx={{mt: 0, ml: 0}}>
                            <Grid direction={"row-reverse"} container spacing={2} sx={{width: "100%"}} columns={12}>
                                <Grid item xs={12} sm={6} md={4} lg={4} xl={4}>
                                    <Autocomplete
                                        disablePortal
                                        onChange={handleYearChange}
                                        defaultValue={convertToDisplayName(testTeams[0])}
                                        id="TeamSelect"
                                        options={testTeams.map((team) => convertToDisplayName(team))}
                                        sx={{width: 215, mt: 2}}
                                        renderInput={(params) => <TextField {...params} label="Team"/>}
                                    />
                                    <Autocomplete
                                        disablePortal
                                        onChange={handleYearChange}
                                        defaultValue={convertToDisplayName(testTeams[0])}
                                        id="TeamSelect"
                                        options={testTeams.map((team) => convertToDisplayName(team))}
                                        sx={{width: 215, mt: 2}}
                                        renderInput={(params) => <TextField {...params} label="Team"/>}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6} md={8} lg={8} xl={8}>
                                    {/*<Typography variant={"h2"}>{selectedTeam.teamName}</Typography>*/}
                                    {/*<Typography variant={"h3"}>{selectedTeam.teamNumber}</Typography>*/}
                                    {/*<Typography variant={"h5"}>Denver, Colorado, USA</Typography>*/}

                                    {/*<Image src={}/>*/}
                                    <Card sx={{width: "100%", height: "100%"}}>Image Goes Here</Card>
                                </Grid>
                            </Grid>
                        </Box>
                    </Grid>

                    {/*<Grid item xs={12} sm={12} md={6} lg={4} xl={4}>*/}
                    {/*    /!*<Image src={}/>*!/*/}
                    {/*    <Card sx={{width: "100%", height: "100%"}}>Image Goes Here</Card>*/}
                    {/*</Grid>*/}
                </Grid>
            </Grid>

            <Grid item xs={12} sm={10} md={6} lg={3} xl={3}>
                <TextField
                    id="filled-textarea"
                    label="General Notes"
                    placeholder="General Notes"
                    multiline
                    variant="filled"
                    sx={{width: "75%", ml: "12.5%"}}
                />
            </Grid>
            <Grid item xs={12} sm={10} md={6} lg={3} xl={3}>
                <TextField
                    id="filled-textarea"
                    label="General Notes"
                    placeholder="General Notes"
                    multiline
                    variant="filled"
                    sx={{width: "75%", ml: "12.5%"}}
                />
            </Grid>

        </Grid>
    </>);
}

DashboardSuperScout.getLayout = function getLayout(page: ReactElement) {

    return (
        <DashboardLayout>
            {page}
        </DashboardLayout>
    )
}

export default DashboardSuperScout;
